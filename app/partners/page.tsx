import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Briefcase, TrendingUp, Shield, Handshake, Building2, DollarSign, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner With Us | Private Lenders, JV Partners & Investors | Garrison Point',
  description: 'Partner with a veteran-owned real estate investment company. Opportunities for private lenders, JV partners, and passive investors. Consistent deal flow throughout Florida.',
  keywords: 'private lending Florida, real estate JV partner, passive real estate investment, hard money lending, real estate investment partner',
  openGraph: {
    title: 'Partner With Garrison Point Solutions',
    description: 'Private lending, JV partnerships, and passive investment opportunities with a veteran-owned RE investment company.',
    type: 'website',
  },
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572]">STRATEGIC PARTNERSHIPS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We're launching a real estate investment operation in Florida. Whether you're a private lender, JV partner, or industry professional — we're interested in building relationships.
          </p>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We're Building</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're developing a real estate investment operation focused on acquisitions, renovations, and building a portfolio of income-producing properties in Florida.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Acquisitions", desc: "Off-market distressed properties in Florida" },
              { icon: Briefcase, title: "Renovations", desc: "Strategic rehab and value-add projects" },
              { icon: TrendingUp, title: "Portfolio", desc: "Building toward long-term cash flow" },
              { icon: DollarSign, title: "Capital", desc: "Seeking lending and funding relationships" }
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

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Opportunities</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Multiple ways to work together based on your capital, expertise, and involvement level.
            </p>
          </div>

          <div className="space-y-8">
            {/* Private Lenders */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-8 h-8 text-[#C5A572]" />
                    <h3 className="text-2xl font-bold text-white">Private Lenders</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Fund our acquisitions and renovations with secured, collateralized loans. Your capital is protected by the real estate asset itself.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "First-position liens on real property",
                      "Consistent deal flow for deployment",
                      "Professional documentation and communication",
                      "Veteran-owned operation with military discipline"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-white/60 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-2">Ideal For</p>
                  <p className="text-white/80">Self-directed IRA holders, accredited investors, and individuals seeking passive income secured by real estate.</p>
                </div>
              </div>
            </div>

            {/* JV Partners */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-8 h-8 text-[#C5A572]" />
                    <h3 className="text-2xl font-bold text-white">JV Partners</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Partner on specific deals or ongoing acquisitions. Bring capital, we bring the deal flow, systems, and execution.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Deal-by-deal or ongoing partnership structures",
                      "Transparent underwriting and due diligence",
                      "Profit splits aligned with contribution",
                      "Clear operating agreements and exit strategies"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-white/60 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-2">Ideal For</p>
                  <p className="text-white/80">Investors who want exposure to Florida real estate without managing operations themselves.</p>
                </div>
              </div>
            </div>

            {/* Strategic Partners */}
            <div className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="w-8 h-8 text-[#C5A572]" />
                    <h3 className="text-2xl font-bold text-white">Strategic Partners</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Title companies, attorneys, wholesalers, and other professionals who want a reliable partner for consistent deal flow.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Consistent transaction volume",
                      "Professional, organized operations",
                      "Long-term relationship focus",
                      "Referral partnerships available"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-white/60 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-2">Ideal For</p>
                  <p className="text-white/80">Title companies, RE attorneys, wholesalers, and industry professionals seeking a reliable transaction partner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Garrison Point</h2>
              <p className="text-white/70 mb-8">
                We bring 23 years of military discipline to real estate. We're at the beginning of building something significant, and we're looking for partners who want to grow with us.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Military Discipline", desc: "23 years of Coast Guard service translated into operational excellence" },
                  { icon: Building2, title: "Building for Scale", desc: "Developing systems for acquisitions, renovations, and portfolio growth" },
                  { icon: TrendingUp, title: "Ground Floor", desc: "Opportunity to build relationships as we grow" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
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
            <div className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20">
              <h3 className="text-xl font-bold text-white mb-6">Our Focus Markets</h3>
              <div className="space-y-4">
                {[
                  { region: "Southwest Florida", counties: "Lee, Collier, Charlotte" },
                  { region: "Central Florida", counties: "Polk, Orange, Osceola" },
                  { region: "South Florida", counties: "Palm Beach, Broward, Miami-Dade" }
                ].map((market, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#C5A572]/10 last:border-0">
                    <span className="text-white font-medium">{market.region}</span>
                    <span className="text-white/50 text-sm">{market.counties}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-6">
                Primary focus on single-family, small multifamily, and land across Florida's high-growth markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Handshake className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you have capital to deploy, expertise to contribute, or deals to bring — we're interested in exploring how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Start the Conversation <ArrowRight className="w-5 h-5 ml-2" />
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
