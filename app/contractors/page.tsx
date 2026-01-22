import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Hammer, CheckCircle2, ArrowRight, Shield, Calendar, DollarSign, ClipboardList, Wrench, HardHat, PaintBucket, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractors & Trades | Work With Garrison Point | Florida Renovation Projects',
  description: 'Licensed contractors and skilled trades: partner with a growing real estate investment company for consistent renovation work throughout Florida. Fair pay, clear scopes, ongoing projects.',
  keywords: 'contractor work Florida, renovation projects Florida, general contractor partnership, subcontractor opportunities, real estate investor contractor',
  openGraph: {
    title: 'Contractors & Trades | Garrison Point Solutions',
    description: 'Consistent renovation work for licensed contractors and trades throughout Florida.',
    type: 'website',
  },
}

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-6">
            <Hammer className="w-4 h-4 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572]">CONTRACTORS & TRADES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Build With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We're launching a real estate investment operation in Florida and building our network of reliable contractors. If you're a skilled tradesperson looking for a professional partner, we'd like to connect.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We're Looking For</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're building our contractor network as we grow. We want reliable partners who share our commitment to quality work and professional relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Long-Term Mindset", desc: "Looking for ongoing relationships, not one-off jobs" },
              { icon: DollarSign, title: "Fair Payment", desc: "Competitive rates and clear payment terms" },
              { icon: ClipboardList, title: "Clear Scopes", desc: "Detailed SOWs and organized project management" },
              { icon: Shield, title: "Professional Partner", desc: "Military discipline, clear communication, no games" }
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#0F1C2E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades We Need */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trades We Work With</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're always looking to expand our network of reliable contractors across all trades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HardHat, title: "General Contractors", desc: "Licensed GCs for full renovation management" },
              { icon: Wrench, title: "Plumbing", desc: "Rough-in, repipes, fixture installation" },
              { icon: Zap, title: "Electrical", desc: "Panel upgrades, rewiring, fixture work" },
              { icon: PaintBucket, title: "Painting", desc: "Interior and exterior, prep to finish" },
              { icon: Hammer, title: "Carpentry", desc: "Framing, trim, cabinetry, decks" },
              { icon: ClipboardList, title: "HVAC", desc: "System replacement, ductwork, repairs" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1B365D]/50 p-6 rounded-xl border border-[#C5A572]/10 flex items-start space-x-4">
                <item.icon className="w-8 h-8 text-[#C5A572] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 mt-8">
            Also: Roofing, flooring, drywall, concrete, landscaping, pool service, and more.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Look For</h2>
            <p className="text-white/60">
              We want partners who share our commitment to quality, reliability, and professionalism.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Licensed and insured in Florida",
              "Reliable communication and responsiveness",
              "Quality workmanship and attention to detail",
              "Ability to provide written estimates",
              "Willingness to work within project timelines",
              "References or portfolio of past work"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-[#0F1C2E] p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Service Areas</h2>
          <p className="text-white/60 mb-8">
            We operate throughout Florida with primary focus on these regions:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { region: "Southwest Florida", counties: "Lee, Collier, Charlotte Counties" },
              { region: "Central Florida", counties: "Polk, Orange, Osceola Counties" },
              { region: "South Florida", counties: "Palm Beach, Broward Counties" }
            ].map((area, i) => (
              <div key={i} className="bg-[#1B365D]/50 p-6 rounded-xl border border-[#C5A572]/10">
                <h3 className="text-lg font-bold text-white mb-2">{area.region}</h3>
                <p className="text-white/60 text-sm">{area.counties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Get in Touch", desc: "Contact us with your trade specialty, service area, and portfolio or references." },
              { step: "2", title: "Introduction Call", desc: "We'll discuss your capabilities, pricing, and how we might work together." },
              { step: "3", title: "Start Small", desc: "Begin with a single project to establish the working relationship." },
              { step: "4", title: "Grow Together", desc: "As trust builds, we'll bring you more projects and larger scopes." }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[#0F1C2E]">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Hammer className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            If you're a licensed contractor or skilled tradesperson looking for consistent renovation work with a professional partner, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
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
