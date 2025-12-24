import { NextRequest, NextResponse } from 'next/server'
import { getDeals } from '@/lib/notion'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status') || undefined

    const deals = await getDeals(status)

    // Transform Notion data to cleaner format
    const transformedDeals = deals.map((deal: any) => ({
      id: deal.id,
      name: deal.properties?.Name?.title?.[0]?.text?.content || 'Untitled',
      status: deal.properties?.Status?.select?.name || 'Unknown',
      phone: deal.properties?.Phone?.phone_number || '',
      email: deal.properties?.Email?.email || '',
      address: deal.properties?.['Property Address']?.rich_text?.[0]?.text?.content || '',
      timeline: deal.properties?.Timeline?.select?.name || '',
      createdAt: deal.created_time,
      updatedAt: deal.last_edited_time,
    }))

    return NextResponse.json({ deals: transformedDeals })
  } catch (error) {
    console.error('Error fetching deals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch deals' },
      { status: 500 }
    )
  }
}
