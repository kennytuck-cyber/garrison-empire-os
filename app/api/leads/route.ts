import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, phone, email, address, timeline, source } = body

    // Validate required fields
    if (!name || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const leadData = {
      name,
      phone,
      email,
      address,
      timeline: timeline || 'Not specified',
      source: source || 'Website',
      submittedAt: new Date().toISOString(),
      website: 'garrisonpointsolutions.com'
    }

    // Send to Zapier webhook (if configured)
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        })
        console.log('Lead sent to Zapier webhook')
      } catch (webhookError) {
        console.error('Zapier webhook error:', webhookError)
        // Don't fail the request if webhook fails
      }
    }

    // Send email notification
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'kenny@garrisonvi.com'
    
    // Using Resend API (or you can swap for SendGrid, etc.)
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Garrison Point Solutions <leads@garrisonpointsolutions.com>',
            to: notificationEmail,
            subject: `🏠 NEW LEAD: ${address}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #0F1C2E; padding: 20px; text-align: center;">
                  <h1 style="color: #C5A572; margin: 0;">New Lead Received!</h1>
                </div>
                <div style="padding: 30px; background: #f5f5f5;">
                  <h2 style="color: #0F1C2E; border-bottom: 2px solid #C5A572; padding-bottom: 10px;">Lead Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Name:</td>
                      <td style="padding: 10px 0; color: #555;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
                      <td style="padding: 10px 0; color: #555;"><a href="tel:${phone}" style="color: #0F1C2E;">${phone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                      <td style="padding: 10px 0; color: #555;"><a href="mailto:${email}" style="color: #0F1C2E;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Property:</td>
                      <td style="padding: 10px 0; color: #555;">${address}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Timeline:</td>
                      <td style="padding: 10px 0; color: #555;">${timeline || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #333;">Submitted:</td>
                      <td style="padding: 10px 0; color: #555;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
                    </tr>
                  </table>
                  <div style="margin-top: 30px; padding: 20px; background: #0F1C2E; border-radius: 8px; text-align: center;">
                    <a href="tel:${phone}" style="display: inline-block; background: #C5A572; color: #0F1C2E; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 5px; margin-right: 10px;">📞 Call Now</a>
                  </div>
                </div>
                <div style="padding: 15px; background: #0F1C2E; text-align: center;">
                  <p style="color: #888; margin: 0; font-size: 12px;">Garrison Point Solutions | garrisonpointsolutions.com</p>
                </div>
              </div>
            `
          })
        })
        console.log('Email notification sent')
      } catch (emailError) {
        console.error('Email notification error:', emailError)
        // Don't fail the request if email fails
      }
    }

    // Log the lead (always works)
    console.log('New lead received:', leadData)

    return NextResponse.json({ 
      success: true, 
      message: 'Lead submitted successfully',
      leadId: Date.now().toString()
    })

  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}
