import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Target, Shield, TrendingUp, Building2, ArrowRight, CheckCircle2, Compass, Anchor, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Approach | Investment Philosophy | Garrison Point Solutions',
  description: 'Learn how Garrison Point Solutions approaches real estate investment. Veteran discipline, strategic acquisition, vertical integration, and long-term wealth building.',
  keywords: 'real estate investment strategy, Florida real estate investor, veteran real estate company, buy hold strategy Florida',
  openGraph: {
    title: 'Our Approach | Garrison Point Solutions',
    description: 'How we approach real estate investment with military discipline and strategic vision.',
    type: 'website',
  },
}

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-6">
            <Compass className="w-4 h-4 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572]">OUR APPROACH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Building Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">The Right Way</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            23 years of Coast Guard service taught us that success comes from discipline, preparation, and execution. We apply those same principles to real estate investment.
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Garrison Standard</h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                In the Coast Guard, "Semper Paratus" — Always Ready — isn't just a motto. It's a way of operating. Every mission required preparation, precision, and the integrity to do things right even when no one was watching.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                We bring that same standard to real estate. Every acquisition is underwritten with discipline. Every renovation is managed with precision. Every relationship is built on transparency and integrity.
              </p>
              <p className="text-white/70 leading-relaxed">
                This isn't about getting rich quick. It's about building something that lasts — a real estate operation with institutional-grade systems, ethical practices, and long-term vision.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Shield, title: "Integrity First", desc: "We do what we say. No hidden agendas, no games, no pressure tactics." },
                { icon: Target, title: "Precision Execution", desc: "Military-trained attention to detail in every transaction and project." },
                { icon: Anchor, title: "Long-Term Focus", desc: "Building wealth through assets, not just transactions." }
              ].map((item, i) => (
                <div key={i} className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <item.icon className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're building a real estate investment operation designed for scale and long-term wealth creation. Here's where we're headed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Acquisition Strategy */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <Building2 className="w-10 h-10 text-[#C5A572] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Strategic Acquisitions</h3>
              <p className="text-white/70 mb-4">
                We focus on off-market, distressed, and value-add properties in Florida's high-growth markets. Every deal is underwritten to strict criteria.
              </p>
              <ul className="space-y-2">
                {[
                  "Southwest Florida (Lee, Collier, Charlotte)",
                  "Central Florida (Polk, Orange, Osceola)",
                  "Expanding throughout Florida"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Value Creation */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <TrendingUp className="w-10 h-10 text-[#C5A572] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Value Creation</h3>
              <p className="text-white/70 mb-4">
                Our goal is to create value through strategic renovation, repositioning, and building a portfolio of income-producing assets.
              </p>
              <ul className="space-y-2">
                {[
                  "Strategic renovation projects",
                  "Building contractor relationships",
                  "Long-term portfolio development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Path */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <Lightbulb className="w-10 h-10 text-[#C5A572] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Building for Scale</h3>
              <p className="text-white/70 mb-4">
                We're developing the systems and relationships needed to grow — from acquisitions to construction to property management.
              </p>
              <ul className="space-y-2">
                {[
                  "Professional systems and processes",
                  "Building a network of contractors",
                  "Developing management capabilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Capital Strategy */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <Anchor className="w-10 h-10 text-[#C5A572] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Capital Partnerships</h3>
              <p className="text-white/70 mb-4">
                We're open to working with private lenders and JV partners who want to participate in Florida real estate deals.
              </p>
              <ul className="space-y-2">
                {[
                  "Private lending opportunities",
                  "JV partnerships on select deals",
                  "Transparent communication"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Criteria */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Look For</h2>
            <p className="text-white/60">
              Every acquisition must meet our underwriting criteria. We're disciplined about what we buy.
            </p>
          </div>
          <div className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#C5A572] mb-4">Property Types</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Single-family homes</li>
                  <li>Small multifamily (2-4 units)</li>
                  <li>Townhouses and condos</li>
                  <li>Vacant land (select opportunities)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#C5A572] mb-4">Situations We Buy</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Distressed and as-is properties</li>
                  <li>Foreclosures and pre-foreclosures</li>
                  <li>Inherited and probate properties</li>
                  <li>Landlord exits and tired rentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Target className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you have a property to sell, capital to deploy, or services to offer — we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
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
