import { NextRequest, NextResponse } from 'next/server'
import { createLead } from '@/lib/notion'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, phone, email, address, timeline, source } = body

    // Validate required fields
    if (!name || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email, address' },
        { status: 400 }
      )
    }

    // Create lead in Notion
    const lead = await createLead({
      name,
      phone,
      email,
      address,
      timeline,
      source: source || 'Website Form'
    })

    // Optional: Send notification via Zapier webhook
    if (process.env.ZAPIER_WEBHOOK_URL) {
      fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          timeline,
          source: 'Website',
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.error('Zapier webhook error:', err))
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead created successfully',
      id: lead.id 
    })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Leads API - Use POST to submit a lead' })
}
