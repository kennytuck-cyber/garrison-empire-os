import { NextResponse } from 'next/server'
import { getDeals } from '@/lib/notion'

export async function GET() {
  try {
    const deals = await getDeals()
    return NextResponse.json({ success: true, deals })
  } catch (error) {
    console.error('Error fetching deals:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch deals' },
      { status: 500 }
    )
  }
}

export const revalidate = 0 // Disable caching for real-time data
