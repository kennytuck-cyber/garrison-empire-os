'use client'
import Link from 'next/link'
import { Phone, Landmark, CheckCircle2, ArrowRight, Shield, DollarSign, TrendingUp, Clock, Building2, Star, Target, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const lenderTypes = [
  {
    icon: Landmark,
    title: "Hard Money Lenders",
    description: "Short-term bridge loans for acquisitions and renovations",
    details: ["Fix & flip financing", "Bridge loans for quick closings", "Renovation/rehab funding", "Asset-based lending"]
  },
  {
    icon: Building2,
    title: "Private Equity Partners",
    description: "Equity investment for larger projects and portfolios",
    details: ["Joint venture partnerships", "Equity investment in deals", "Portfolio acquisitions", "Development projects"]
  },
  {
    icon: TrendingUp,
    title: "DSCR Lenders",
    description: "Long-term rental property financing based on cash flow",
    details: ["Debt Service Coverage Ratio loans", "No personal income verification", "Based on property cash flow", "Long-term options"]
  },
  {
    icon: DollarSign,
    title: "Private Money Lenders",
    description: "Individual investors seeking secured real estate returns",
    details: ["First position deed of trust", "Competitive interest rates", "Secured by real property", "Flexible terms negotiable"]
  }
]

export default function LendersClient() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/cash-offer-home-selling-buying-real-estate-florida.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp}>
              <Link href="/work-with-us" className="inline-flex items-center text-[#C5A572] hover:text-[#D4B896] mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Partner Opportunities
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Landmark className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">LENDING PARTNERS</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Fund Florida <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Real Estate</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              Partner with experienced operators for hard money loans, private lending, and equity investments. Secure, reliable returns backed by Florida real estate.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Discuss Lending <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lender Types */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Lender Types</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Types of Lenders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">We Work With</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Whether you provide short-term bridge loans or long-term financing, we have opportunities that match your investment criteria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {lenderTypes.map((type, i) => (
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
                <div className="relative bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                      <p className="text-white/60">{type.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {type.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-white/70">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Protected Capital</h3>
          <p className="text-xl text-white/90">Your investment is secured by real property with conservative LTV ratios and professional documentation.</p>
        </div>
      </div>

      {/* Why Lenders Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Lenders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Choose Us</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We understand that protecting your capital is paramount. Here's how we ensure your investment is secure and your returns are reliable.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: Target, text: "Experienced operators with proven track record" },
                  { icon: Shield, text: "Conservative underwriting and realistic ARV projections" },
                  { icon: Clock, text: "Reliable timelines and on-time loan payoffs" },
                  { icon: BarChart3, text: "Consistent deal flow for capital deployment" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 bg-[#1B365D]/50 p-5 rounded-xl border border-[#C5A572]/10"
                  >
                    <item.icon className="w-6 h-6 text-[#C5A572] flex-shrink-0" />
                    <span className="text-white/80 text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B365D]/50 p-10 rounded-2xl border border-[#C5A572]/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Typical Deal Profile</h3>
              <div className="space-y-6">
                {[
                  { label: "Property Types", value: "Single-family, multi-family, small commercial" },
                  { label: "Markets", value: "Tampa Bay, Orlando, Jacksonville, SWFL" },
                  { label: "Acquisition Range", value: "$75,000 - $500,000" },
                  { label: "Typical LTV", value: "65-75% of ARV" },
                  { label: "Hold Periods", value: "Fix & Flip: 3-9 months | Rentals: Long-term" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#0F1C2E] p-4 rounded-xl border border-[#C5A572]/10">
                    <p className="text-[#C5A572] text-sm font-bold uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                ))}
              </div>
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
          <Landmark className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Secured Returns?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how your capital can work harder with reliable, real estate-backed investments in Florida's growing markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
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
