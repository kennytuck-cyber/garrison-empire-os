import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, ArrowRight, Clock, Calendar, Zap, AlertTriangle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sell Your House in 7 Days | Fast Cash Sale Florida | Close This Week',
  description: 'Need to sell your Florida house in 7 days? We buy houses fast for cash. No repairs, no agents, no waiting. Get your cash offer in 24 hours and close this week.',
  keywords: 'sell house in 7 days, sell house fast, quick house sale, fast cash for house, close on house quickly Florida',
  openGraph: {
    title: 'Sell Your House in 7 Days | Fast Cash Closing',
    description: 'Close on your house sale in as little as 7 days. Cash in hand, no hassle.',
    type: 'website',
  },
}

export default function SellHouseFast7DaysPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg"
            alt="Sell house fast in 7 days"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572]">FASTEST CLOSINGS IN FLORIDA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Sell Your House in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">7 Days</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            When every day counts, we deliver. Get a cash offer within 24 hours and close in as little as one week. No agents, no delays, no stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get My Fast Cash Offer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 bg-[#1B365D]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Your 7-Day Timeline</h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {[
              { day: "Day 1", action: "Contact Us" },
              { day: "Day 1-2", action: "Get Offer" },
              { day: "Day 2-3", action: "Accept" },
              { day: "Day 3-4", action: "Title Work" },
              { day: "Day 5-6", action: "Final Docs" },
              { day: "Day 7", action: "CLOSING" },
              { day: "", action: "Get Paid!" }
            ].map((item, i) => (
              <div key={i} className={`${i === 6 ? 'bg-[#C5A572]/20' : 'bg-[#0F1C2E]/50'} p-3 rounded-lg`}>
                <p className="text-[#C5A572] text-xs font-bold">{item.day}</p>
                <p className={`text-sm mt-1 ${i === 6 ? 'text-[#C5A572] font-bold' : 'text-white/70'}`}>{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Speed Matters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                When You Need to Sell <span className="text-[#C5A572]">Now</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Sometimes life doesn't give you the luxury of a traditional 3-6 month home sale. Whether you're facing a deadline, dealing with a crisis, or simply ready to move on immediately, we understand that speed is everything.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our streamlined process eliminates every unnecessary step that slows down traditional sales. No waiting for buyer financing, no inspection delays, no last-minute renegotiations. Just a straight path from offer to closing.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: AlertTriangle, title: "Foreclosure Deadline", desc: "Stop foreclosure before it damages your credit" },
                { icon: Calendar, title: "Job Relocation", desc: "Start your new job without a house hanging over you" },
                { icon: DollarSign, title: "Financial Emergency", desc: "Get cash fast when you need it most" },
                { icon: Clock, title: "Estate Settlement", desc: "Close the estate and distribute assets quickly" }
              ].map((item, i) => (
                <div key={i} className="bg-[#1B365D]/50 p-4 rounded-xl border border-[#C5A572]/10 flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Close So Fast */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How We Close in 7 Days
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Traditional sales take months because of financing, inspections, and contingencies. We eliminate all of that.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cash Purchase",
                desc: "No waiting for bank approval or mortgage underwriting. We have the funds ready."
              },
              {
                title: "No Inspections",
                desc: "We buy as-is. No inspection contingencies means no delays or renegotiations."
              },
              {
                title: "Title Company Ready",
                desc: "We work with title companies experienced in fast closings."
              },
              {
                title: "No Contingencies",
                desc: "Our offers are clean with no financing, appraisal, or sale contingencies."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0F1C2E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Speed Comparison
          </h2>
          <div className="space-y-4">
            {[
              { method: "Traditional Sale with Agent", time: "90-180 days", color: "red" },
              { method: "FSBO (For Sale By Owner)", time: "60-120 days", color: "orange" },
              { method: "iBuyer (Opendoor, etc.)", time: "30-60 days", color: "yellow" },
              { method: "Sell to Garrison Point", time: "7-14 days", color: "green" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1B365D]/50 p-4 rounded-xl flex items-center justify-between">
                <span className="text-white font-medium">{item.method}</span>
                <span className={`font-bold ${
                  item.color === 'green' ? 'text-green-400' :
                  item.color === 'yellow' ? 'text-yellow-400' :
                  item.color === 'orange' ? 'text-orange-400' :
                  'text-red-400'
                }`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            What You Need for a 7-Day Close
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Proof of ownership (deed or mortgage statement)",
              "Government-issued ID",
              "Property access for brief walkthrough",
              "Willingness to sign closing documents"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-[#0F1C2E] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-8 text-sm">
            That's it. No repairs, no staging, no showings, no cleaning.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Clock className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Close in 7 Days?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Don't wait months to sell your house. Contact us today and you could have cash in hand within a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Start My 7-Day Sale
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
