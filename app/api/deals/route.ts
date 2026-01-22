import { NextResponse } from 'next/server'
import { getDeals, DATABASES } from '@/lib/notion'

// Force dynamic rendering to prevent build-time API calls
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Check if Notion is configured
    if (!process.env.NOTION_API_KEY || !DATABASES.deals) {
      return NextResponse.json(
        {
          deals: [],
          message: 'Notion integration not configured. Set NOTION_API_KEY and NOTION_DATABASE_DEALS environment variables.'
        },
        { status: 200 }
      )
    }

    // Fetch raw deals from Notion
    const rawDeals = await getDeals()

    // Map Notion properties to clean JSON for the dashboard
    const deals = rawDeals.map((page: any) => {
      const props = page.properties
      return {
        id: page.id,
        name: props['Name']?.title[0]?.plain_text || 'Unknown',
        status: props['Status']?.select?.name || 'New Lead',
        phone: props['Phone']?.phone_number || '',
        email: props['Email']?.email || '',
        address: props['Property Address']?.rich_text[0]?.plain_text || '',
        timeline: props['Timeline']?.select?.name || '',
        createdAt: page.created_time
      }
    })

    return NextResponse.json({ deals })
  } catch (error) {
    console.error('Error fetching deals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch deals' }, 
      { status: 500 }
    )
  }
}
