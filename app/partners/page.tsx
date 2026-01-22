'use client'
import Link from 'next/link'
import { Phone, Briefcase, TrendingUp, Shield, HeartHandshake, Building2, DollarSign, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/real-estate-cash-buy-sell-offer-florida-home.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <HeartHandshake className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">STRATEGIC PARTNERSHIPS</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Partner With <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're building a real estate investment operation in Florida. Whether you're a private lender, JV partner, or industry professional — we're interested in building relationships.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Start the Conversation <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Our Focus</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Building</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Developing a real estate investment operation focused on acquisitions, renovations, and building a portfolio of income-producing properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Acquisitions", desc: "Off-market distressed properties throughout Florida" },
              { icon: Briefcase, title: "Renovations", desc: "Strategic rehab and value-add projects" },
              { icon: TrendingUp, title: "Portfolio", desc: "Building toward long-term cash flow" },
              { icon: DollarSign, title: "Capital", desc: "Seeking lending and funding relationships" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <div className="relative bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#B8860B]/20">
                    <item.icon className="w-8 h-8 text-[#0F1C2E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Opportunities</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Multiple ways to work together based on your capital, expertise, and involvement level.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Private Lenders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Private Lenders</h3>
                  </div>
                  <p className="text-lg text-white/70 mb-6">
                    Fund our acquisitions and renovations with secured, collateralized loans. Your capital is protected by the real estate asset itself.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "First-position liens on real property",
                      "Consistent deal flow for deployment",
                      "Professional documentation and communication",
                      "Veteran-owned operation with military discipline"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-80 bg-[#0F1C2E]/50 p-6 rounded-xl">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-3">Ideal For</p>
                  <p className="text-white/80">Self-directed IRA holders, accredited investors, and individuals seeking passive income secured by real estate.</p>
                </div>
              </div>
            </motion.div>

            {/* JV Partners */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">JV Partners</h3>
                  </div>
                  <p className="text-lg text-white/70 mb-6">
                    Partner on specific deals or ongoing acquisitions. Bring capital, we bring the deal flow, systems, and execution.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Deal-by-deal or ongoing partnership structures",
                      "Transparent underwriting and due diligence",
                      "Profit splits aligned with contribution",
                      "Clear operating agreements and exit strategies"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-80 bg-[#0F1C2E]/50 p-6 rounded-xl">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-3">Ideal For</p>
                  <p className="text-white/80">Investors who want exposure to Florida real estate without managing operations themselves.</p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Partners */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Strategic Partners</h3>
                  </div>
                  <p className="text-lg text-white/70 mb-6">
                    Title companies, attorneys, wholesalers, and other professionals who want a reliable partner for consistent deal flow.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Consistent transaction volume",
                      "Professional, organized operations",
                      "Long-term relationship focus",
                      "Referral partnerships available"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-80 bg-[#0F1C2E]/50 p-6 rounded-xl">
                  <p className="text-[#C5A572] font-bold text-sm uppercase tracking-wide mb-3">Ideal For</p>
                  <p className="text-white/80">Title companies, RE attorneys, wholesalers, and industry professionals seeking a reliable transaction partner.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-vetean-pride-real-estate-florida-trsut-patriotJPG.JPG')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Built on Trust</h3>
          <p className="text-xl text-white/90">We believe the best partnerships are built on transparency, reliability, and shared success.</p>
        </div>
      </div>

      {/* Why Partner With Us */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're at the beginning of building something significant, and we're looking for partners who want to grow with us. Integrity, clear communication, and follow-through on every commitment.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Integrity First", desc: "We do what we say. Transparent communication and honest dealings." },
                  { icon: Building2, title: "Building for Scale", desc: "Developing systems for acquisitions, renovations, and portfolio growth" },
                  { icon: TrendingUp, title: "Ground Floor", desc: "Opportunity to build relationships as we grow" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                      <item.icon className="w-7 h-7 text-[#C5A572]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F1C2E] p-10 rounded-2xl border border-[#C5A572]/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Our Focus Markets</h3>
              <div className="space-y-6">
                {[
                  { region: "Southwest Florida", counties: "Lee, Collier, Charlotte" },
                  { region: "Central Florida", counties: "Polk, Orange, Osceola" },
                  { region: "South Florida", counties: "Palm Beach, Broward, Miami-Dade" }
                ].map((market, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-[#C5A572]/10 last:border-0">
                    <span className="text-lg text-white font-medium">{market.region}</span>
                    <span className="text-white/50">{market.counties}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-8">
                Primary focus on single-family, small multifamily, and land across Florida's high-growth markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <HeartHandshake className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Together</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have capital to deploy, expertise to contribute, or deals to bring — we're interested in exploring how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1"
            >
              Start the Conversation <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-12 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-3" />
              (239) 291-3444
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
