import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { 
      firstName,
      lastName,
      phone, 
      email, 
      address,
      unit,
      city,
      state,
      zip,
      county,
      isOwner,
      occupancy,
      reasonForSelling,
      otherReason,
      askingPrice,
      timeline,
      fullAddress,
      name,
      reason,
      source 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !address || !city || !zip) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Construct full address if not provided
    const propertyAddress = fullAddress || `${address}${unit ? ' ' + unit : ''}, ${city}, ${state} ${zip}`
    const fullName = name || `${firstName} ${lastName}`
    const sellingReason = reason || (reasonForSelling === 'Other' ? otherReason : reasonForSelling)

    const leadData = {
      // Contact Info
      firstName,
      lastName,
      name: fullName,
      phone,
      email,
      
      // Property Info
      address,
      unit: unit || '',
      city,
      state: state || 'FL',
      zip,
      county: county || '',
      fullAddress: propertyAddress,
      
      // Property Details
      isOwner: isOwner || '',
      occupancy: occupancy || '',
      
      // Situation
      reasonForSelling: sellingReason || '',
      askingPrice: askingPrice || '',
      timeline: timeline || '',
      
      // Meta
      source: source || 'Website',
      submittedAt: new Date().toISOString(),
      submittedAtFormatted: new Date().toLocaleString('en-US', { 
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'short'
      }),
      website: 'garrisonpointsolutions.com'
    }

    // Send to Zapier webhook
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
      }
    }

    // Send email notification via Resend (if configured)
    const resendApiKey = process.env.RESEND_API_KEY
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'kenny@garrisonvi.com'
    
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
            subject: `🏠 NEW LEAD: ${propertyAddress}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #0F1C2E; padding: 20px; text-align: center;">
                  <h1 style="color: #C5A572; margin: 0;">New Lead Received!</h1>
                </div>
                <div style="padding: 30px; background: #f5f5f5;">
                  <h2 style="color: #0F1C2E; border-bottom: 2px solid #C5A572; padding-bottom: 10px;">Lead Details</h2>
                  
                  <h3 style="color: #C5A572; margin-top: 20px;">Contact Information</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333; width: 150px;">Name:</td>
                      <td style="padding: 8px 0; color: #555;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                      <td style="padding: 8px 0; color: #555;"><a href="tel:${phone}" style="color: #0F1C2E;">${phone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                      <td style="padding: 8px 0; color: #555;"><a href="mailto:${email}" style="color: #0F1C2E;">${email}</a></td>
                    </tr>
                  </table>

                  <h3 style="color: #C5A572; margin-top: 20px;">Property Information</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333; width: 150px;">Address:</td>
                      <td style="padding: 8px 0; color: #555;">${propertyAddress}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">County:</td>
                      <td style="padding: 8px 0; color: #555;">${county || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">Owner Status:</td>
                      <td style="padding: 8px 0; color: #555;">${isOwner || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">Occupancy:</td>
                      <td style="padding: 8px 0; color: #555;">${occupancy || 'Not specified'}</td>
                    </tr>
                  </table>

                  <h3 style="color: #C5A572; margin-top: 20px;">Seller Situation</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333; width: 150px;">Reason:</td>
                      <td style="padding: 8px 0; color: #555;">${sellingReason || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333;">Timeline:</td>
                      <td style="padding: 8px 0; color: #555;">${timeline || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #333; background: #fff3cd;">Min. Asking:</td>
                      <td style="padding: 8px 0; color: #333; font-weight: bold; font-size: 18px; background: #fff3cd;">$${askingPrice || 'Not specified'}</td>
                    </tr>
                  </table>

                  <div style="margin-top: 30px; padding: 20px; background: #0F1C2E; border-radius: 8px; text-align: center;">
                    <a href="tel:${phone}" style="display: inline-block; background: #C5A572; color: #0F1C2E; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 5px;">📞 Call ${firstName} Now</a>
                  </div>

                  <p style="margin-top: 20px; color: #888; font-size: 12px;">Submitted: ${leadData.submittedAtFormatted} ET</p>
                </div>
              </div>
            `
          })
        })
        console.log('Email notification sent')
      } catch (emailError) {
        console.error('Email notification error:', emailError)
      }
    }

    // Log the lead
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
