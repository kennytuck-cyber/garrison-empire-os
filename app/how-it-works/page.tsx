import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, FileText, Calendar, DollarSign, CheckCircle2, Clock, Shield, ArrowRight, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works - Sell Your House for Cash | Garrison Point Solutions',
  description: 'Learn our simple 3-step process for selling your Florida house for cash. Get an offer in 24 hours, close in as little as 7 days. No repairs, no fees, no hassle.',
  keywords: 'how to sell house for cash, cash home buying process, sell house fast process, how cash home buyers work, Florida house selling process',
  openGraph: {
    title: 'How It Works | Sell Your House for Cash in Florida',
    description: 'Our simple 3-step process: Contact us, get your offer, close and get paid.',
    type: 'website',
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Works</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Selling your house for cash is simple. No agents, no showings, no repairs, no waiting. Just three easy steps to get cash in hand.
          </p>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-12 bg-[#1B365D]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0F1C2E]/50 p-6 rounded-xl border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 mb-4">Traditional Sale (3-6 Months)</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Find and hire a real estate agent</li>
                <li>Make repairs and stage the home</li>
                <li>List, market, and show to buyers</li>
                <li>Wait for offers and negotiate</li>
                <li>Buyer inspection and financing</li>
                <li>Pray the deal doesn't fall through</li>
                <li>Pay 6% commission + closing costs</li>
              </ul>
            </div>
            <div className="bg-[#0F1C2E]/50 p-6 rounded-xl border border-[#C5A572]/30">
              <h3 className="text-lg font-bold text-[#C5A572] mb-4">Sell to Us (7-14 Days)</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> Contact us (5 minutes)</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> Get cash offer (24 hours)</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> Accept and close (7-14 days)</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> No repairs needed</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> No showings</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> No financing contingencies</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2" /> Zero fees or commissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Three Simple Steps
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              We've eliminated the complexity of selling a house. Here's exactly what happens when you work with us.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#0F1C2E]">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                    <p className="text-[#C5A572]">Takes about 5 minutes</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Fill out our simple online form or give us a call. Tell us about your property - the address, condition, and your situation. Don't worry about the condition - we buy houses as-is, no matter what shape they're in.
                </p>
                <ul className="space-y-3">
                  {[
                    "No obligation to accept any offer",
                    "Your information is kept confidential",
                    "We'll respond within 24 hours"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/10">
                <FileText className="w-16 h-16 text-[#C5A572] mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">What We'll Ask</h4>
                <ul className="space-y-2 text-white/60">
                  <li>Property address</li>
                  <li>General condition</li>
                  <li>Your timeline for selling</li>
                  <li>Any special circumstances</li>
                  <li>Best way to reach you</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/10">
                <DollarSign className="w-16 h-16 text-[#C5A572] mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">How We Calculate Your Offer</h4>
                <ul className="space-y-2 text-white/60">
                  <li>Current market value analysis</li>
                  <li>Recent comparable sales</li>
                  <li>Property condition assessment</li>
                  <li>Estimated repair costs</li>
                  <li>Local market conditions</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#0F1C2E]">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Get Your Cash Offer</h3>
                    <p className="text-[#C5A572]">Within 24 hours</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours. Our offers are based on current market conditions and comparable sales - no lowball games.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fair market-based offer",
                    "No hidden fees or deductions",
                    "The offer you see is what you get",
                    "No pressure to accept"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#0F1C2E]">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Close & Get Paid</h3>
                    <p className="text-[#C5A572]">As fast as 7 days</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Accept our offer and pick your closing date. We work with a reputable local title company to handle all the paperwork. On closing day, you sign the documents and receive your cash. It's that simple.
                </p>
                <ul className="space-y-3">
                  {[
                    "You choose the closing date",
                    "We pay all closing costs",
                    "Professional title company handles paperwork",
                    "Get paid the same day"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/10">
                <Calendar className="w-16 h-16 text-[#C5A572] mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">Closing Timeline Options</h4>
                <ul className="space-y-3 text-white/60">
                  <li className="flex justify-between">
                    <span>Rush Closing:</span>
                    <span className="text-[#C5A572] font-bold">7 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Standard Closing:</span>
                    <span className="text-[#C5A572] font-bold">14-21 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Flexible Closing:</span>
                    <span className="text-[#C5A572] font-bold">Your timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to make any repairs?",
                a: "No. We buy houses in as-is condition. Broken HVAC, roof issues, water damage, outdated everything - we handle it all after closing."
              },
              {
                q: "What fees will I pay?",
                a: "None. There are no real estate commissions, no closing costs for you, and no hidden fees. The offer we make is the amount you receive."
              },
              {
                q: "What if I have a mortgage?",
                a: "No problem. At closing, proceeds first pay off your existing mortgage, and you keep the remainder."
              },
              {
                q: "How do you determine the offer price?",
                a: "We analyze comparable sales, property condition, needed repairs, and current market conditions. Our offers typically range from 70-85% of after-repair value."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <HelpCircle className="w-5 h-5 text-[#C5A572] mr-3" />
                  {item.q}
                </h3>
                <p className="text-white/60 mt-2 ml-8">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#C5A572] hover:text-[#D4B896] inline-flex items-center">
              View All FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Take the first step toward a stress-free sale. Get your free, no-obligation cash offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get My Cash Offer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
