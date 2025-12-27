'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import Link from 'next/link'

// FAQ Data from your content pack 
const faqs = [
  { question: "How do you determine your offer price?", answer: "We evaluate several factors: the property's current condition, needed repairs, recent comparable sales in your area, and current market conditions. Our offers typically range from 70-85% of the after-repair value, minus estimated repair costs." },
  { question: "Do I have to accept your offer?", answer: "Absolutely not. Our offers are completely no-obligation. You are free to accept, counter, or decline. There is no pressure and no cost to you for receiving an offer." },
  { question: "Do I need to make any repairs before selling?", answer: "No. We buy houses in as-is condition, regardless of needed repairs. Broken HVAC, roof issues, water damage, outdated everything—we handle it all." },
  { question: "How fast can you close?", answer: "We can close in as little as 7 days if needed, though 10-14 days is more typical to allow time for title work. If you need more time, we are flexible and can work around your schedule." },
  { question: "Will I have to pay any fees or commissions?", answer: "No. There are no real estate agent commissions, no closing costs for you to pay, and no hidden fees. The price we offer is the amount you receive at closing." },
  { question: "What if I still have a mortgage on the property?", answer: "That is fine—most sellers do. At closing, the proceeds from the sale first pay off your existing mortgage, and you keep the remainder." },
  { question: "What types of houses do you buy?", answer: "We buy single-family homes, condos, townhouses, duplexes, and small multi-family properties throughout Southwest and Central Florida. Any condition, any situation." },
  { question: "Do you buy houses with tenants?", answer: "Yes. We purchase tenant-occupied properties regularly. You don't need to evict anyone or wait for leases to expire. We handle the tenant situation after closing." },
  { question: "What if my house has code violations or liens?", answer: "We buy properties with code violations, liens, and other title issues regularly. In many cases, we can negotiate with code enforcement to reduce fines." },
  { question: "Can I sell if I'm in pre-foreclosure?", answer: "Yes, and time is critical. Selling before foreclosure completes can protect your credit and preserve any equity. We can often close fast enough to stop the foreclosure process." },
  { question: "How is this different from listing with a realtor?", answer: "When you list with a realtor, you pay 6% commission, closing costs, and often have to make repairs. It takes 3-6 months. When you sell to us, there are zero fees, zero repairs, and we close in days, not months." },
  { question: "Why should I trust you?", answer: "Garrison Point Solutions is a veteran-owned company built on 23 years of Coast Guard service. We bring military integrity, discipline, and transparency to every transaction." }
]

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Header */}
      <div className="py-20 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Common Questions</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get answers to the most common questions about selling your house for cash in Florida.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#1B365D] border border-[#C5A572]/20 rounded-xl overflow-hidden transition-all hover:border-[#C5A572]/50"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-bold text-white pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#C5A572] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-white/80 leading-relaxed border-t border-[#C5A572]/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#1B365D] rounded-2xl p-10 border border-[#C5A572]/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us today for a free, no-obligation consultation about your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded-lg font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-colors">
              Get My Cash Offer
            </Link>
            <a href="tel:2392913444" className="bg-transparent border border-[#C5A572] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#C5A572]/10 transition-colors flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> Call (239) 291-3444
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
