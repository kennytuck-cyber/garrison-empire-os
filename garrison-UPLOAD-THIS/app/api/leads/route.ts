import { NextResponse } from 'next/server'
import { createDeal } from '@/lib/notion'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(5, 'Property address required'),
  timeline: z.string(),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = leadSchema.parse(body)

    // Create deal in Notion
    const result = await createDeal({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      address: validatedData.address,
      timeline: validatedData.timeline,
      source: validatedData.source || 'Website',
    })

    // Optional: Send to Zapier webhook if configured
    if (process.env.ZAPIER_WEBHOOK_URL) {
      await fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We\'ll contact you within 24-48 hours.',
      dealId: result.id,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Lead submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit. Please try again.' },
      { status: 500 }
    )
  }
}
