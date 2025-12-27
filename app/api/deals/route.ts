import { NextResponse } from 'next/server'
import { getDeals } from '@/lib/notion'

export async function GET() {
  try {
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
