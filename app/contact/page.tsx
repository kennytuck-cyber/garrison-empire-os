'use client'
import { Phone, Mail, MapPin, Clock, CheckCircle2, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', address: '', city: '', state: 'FL', zip: '', message: ''
  })
  const [termsConsent, setTermsConsent] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
          fullAddress: formData.address ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}` : '',
          reasonForSelling: 'Contact Form Inquiry',
          source: 'Contact Page'
        })
      })
      if (response.ok) {
        setShowSuccess(true)
        setFormData({ firstName: '', lastName: '', phone: '', email: '', address: '', city: '', state: 'FL', zip: '', message: '' })
        setTermsConsent(false)
        setSmsConsent(false)
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Unable to submit. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="bg-[#0F1C2E] text-white">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#1B365D] border border-[#C5A572]/30 rounded-2xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-2xl">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
            <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-[#0F1C2E]" /></div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Message Received!</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <div className="space-y-4">
              <p className="text-[#C5A572] font-semibold">Need immediate assistance?</p>
              <a href="tel:2392913444" className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all"><Phone className="w-5 h-5 mr-2" />Call (239) 291-3444</a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/we-buy-houses-florida-cash-home-buyers-fast-closing.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/90 via-[#0F1C2E]/80 to-[#0F1C2E]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Get In <span className="text-[#C5A572]">Touch</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Have questions? Ready to get your cash offer? We're here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Phone, title: "Call Us", content: "(239) 291-3444", href: "tel:2392913444", sub: "Available 7 days a week" },
              { icon: Mail, title: "Email Us", content: "info@garrisonpointsolutions.com", href: "mailto:info@garrisonpointsolutions.com", sub: "Response within 24 hours" },
              { icon: MapPin, title: "Office", content: "7901 4th Street N, Suite 300", href: "https://maps.google.com/?q=7901+4th+Street+N+Suite+300+St+Petersburg+FL+33702", sub: "St Petersburg, FL 33702" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#1B365D]/50 border border-[#C5A572]/20 rounded-2xl p-8 text-center hover:border-[#C5A572]/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#0F1C2E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#C5A572] font-semibold mb-1">{item.content}</p>
                <p className="text-white/60 text-sm">{item.sub}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Send Us a <span className="text-[#C5A572]">Message</span>
              </h2>
              <p className="text-white/70 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. If you have a property to sell, include the address for a faster response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="(239) 555-0123" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Property Address (Optional)</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="123 Main Street" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/80 mb-2">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="Fort Myers" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">ZIP</label>
                    <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors" placeholder="33901" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-lg text-white placeholder-white/40 focus:border-[#C5A572] focus:outline-none transition-colors resize-none" placeholder="How can we help you?" />
                </div>

                {/* Consent checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" checked={termsConsent} onChange={(e) => setTermsConsent(e.target.checked)} required className="mt-1 w-5 h-5 rounded border-[#C5A572]/30 bg-[#0F1C2E] text-[#C5A572] focus:ring-[#C5A572] focus:ring-offset-0" />
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      I agree to the <a href="/terms" className="text-[#C5A572] hover:underline">Terms &amp; Conditions</a> and <a href="/privacy" className="text-[#C5A572] hover:underline">Privacy Policy</a>. *
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-1 w-5 h-5 rounded border-[#C5A572]/30 bg-[#0F1C2E] text-[#C5A572] focus:ring-[#C5A572] focus:ring-offset-0" />
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      I agree to receive SMS messages. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
                    </span>
                  </label>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#C5A572]/20 h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.6!2d-82.6367!3d27.8339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1234567890%3A0x1234567890abcdef!2s7901%204th%20St%20N%20%23300%2C%20St.%20Petersburg%2C%20FL%2033702!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Garrison Point Solutions Office Location"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-[#1B365D]/50 border border-[#C5A572]/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#0F1C2E]" />
                  </div>
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
                    { day: "Sunday", hours: "By Appointment" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-[#C5A572]/10 last:border-0">
                      <span className="text-white/80">{item.day}</span>
                      <span className="text-[#C5A572] font-semibold">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm mt-6">
                  We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-[#B8860B]/20 to-[#C5A572]/20 border border-[#C5A572]/30 rounded-2xl p-6 text-center">
                <p className="text-lg font-semibold text-white mb-2">Fast Response Guarantee</p>
                <p className="text-white/70">We respond to all property inquiries within 24 hours with a no-obligation cash offer.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Get Your <span className="text-[#C5A572]">Cash Offer?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/70 mb-8">
              Skip the form and talk to us directly. We're ready to make you a fair, no-obligation offer.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="tel:2392913444"
              className="inline-flex items-center bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-xl font-bold text-xl hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-lg shadow-[#B8860B]/20"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call (239) 291-3444
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
