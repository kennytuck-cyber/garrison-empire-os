import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Garrison Point Solutions',
  description: 'Learn how Garrison Point Solutions collects, uses, and protects your personal information. Our privacy policy covers data collection, SMS consent, and your rights.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold mb-4 text-[#C5A572]">Privacy Policy</h1>
        <p className="text-white/50 mb-8">Last Updated: January 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          <p className="text-lg">
            Garrison Point Solutions, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website garrisonpointsolutions.com or interact with our services.
          </p>

          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p><strong className="text-white">Personal Information You Provide:</strong> When you fill out our contact form, request a cash offer, or communicate with us, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name (first and last)</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Property address and details</li>
            <li>Reason for selling</li>
            <li>Timeline preferences</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <p><strong className="text-white">Automatically Collected Information:</strong> When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate your property for a potential cash offer</li>
            <li>Communicate with you about your property inquiry</li>
            <li>Send SMS messages, calls, and emails related to our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">3. SMS & Communication Consent</h2>
          <p>
            By submitting your phone number through our website forms, you expressly consent to receive SMS text messages, phone calls, and emails from Garrison Point Solutions, LLC regarding your property inquiry and our services.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Message Frequency:</strong> Message frequency varies based on your inquiry and our communications.</li>
            <li><strong className="text-white">Opt-Out:</strong> You may opt out of SMS messages at any time by replying STOP to any message. You may also text HELP for assistance.</li>
            <li><strong className="text-white">Costs:</strong> Message and data rates may apply depending on your mobile carrier plan.</li>
            <li><strong className="text-white">Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p>
            Your consent to receive SMS messages is not a condition of purchasing any property or service from us.
          </p>

          <h2 className="text-2xl font-bold text-white">4. Information Sharing & Disclosure</h2>
          <p>We do not sell your personal information to third-party marketing companies. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Service Providers:</strong> Third parties who help us operate our business (e.g., email services, CRM systems, analytics providers)</li>
            <li><strong className="text-white">Title Companies & Closing Agents:</strong> When processing a real estate transaction</li>
            <li><strong className="text-white">Legal Requirements:</strong> When required by law, subpoena, or to protect our rights</li>
            <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Lead Information:</strong> Retained for up to 7 years for business records and potential future contact</li>
            <li><strong className="text-white">Transaction Records:</strong> Retained as required by tax and real estate regulations</li>
            <li><strong className="text-white">Communication Records:</strong> Retained for compliance and quality assurance purposes</li>
          </ul>
          <p>You may request deletion of your data by contacting us (see Section 9).</p>

          <h2 className="text-2xl font-bold text-white">6. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience on our website. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
            <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
            <li><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-bold text-white">7. Your Privacy Rights</h2>
          <p><strong className="text-white">All Users Have the Right To:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <p><strong className="text-white">California Residents (CCPA Rights):</strong> If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Right to Know:</strong> You can request details about the categories and specific pieces of personal information we have collected about you</li>
            <li><strong className="text-white">Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions</li>
            <li><strong className="text-white">Right to Opt-Out:</strong> We do not sell personal information, but you may opt out of any data sharing for advertising purposes</li>
            <li><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
          </ul>
          <p>To exercise your CCPA rights, contact us using the information in Section 9.</p>

          <h2 className="text-2xl font-bold text-white">8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure data storage with access controls</li>
            <li>Regular security assessments</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-white">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to file a complaint, please contact us:</p>
          <div className="bg-[#1B365D] p-6 rounded-lg border border-[#C5A572]/20 mt-4">
            <p className="text-white font-semibold">Garrison Point Solutions, LLC</p>
            <p>7901 4th Street N, Suite 300</p>
            <p>St Petersburg, FL 33702</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@garrisonpointsolutions.com" className="text-[#C5A572] hover:underline">
                info@garrisonpointsolutions.com
              </a>
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{' '}
              <a href="tel:2392913444" className="text-[#C5A572] hover:underline">
                (239) 291-3444
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after any changes constitutes acceptance of the updated policy.
          </p>

          <div className="border-t border-[#C5A572]/20 pt-8 mt-12">
            <p className="text-sm text-white/50">
              This Privacy Policy is effective as of January 2026 and applies to all information collected through our website and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
