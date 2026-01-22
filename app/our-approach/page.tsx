'use client'
import Link from 'next/link'
import { Phone, Target, Shield, TrendingUp, Building2, ArrowRight, CheckCircle2, Compass, Anchor, Lightbulb, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/military-veteran-real-estate-florida-cash-buy-sell-pride-patriot-honest-trust.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Compass className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">OUR APPROACH</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Building Real Estate <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">The Right Way</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              23 years of Coast Guard service taught us that success comes from discipline, preparation, and execution. We apply those same principles to real estate investment.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Get in Touch <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">The Garrison <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Standard</span></h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Success in real estate comes from preparation, precision, and the integrity to do things right even when no one is watching. That's the standard we hold ourselves to.
              </p>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Every acquisition is underwritten with discipline. Every renovation is managed with precision. Every relationship is built on transparency and integrity.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                This isn't about getting rich quick. It's about building something that lasts — a real estate operation with institutional-grade systems, ethical practices, and long-term vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Shield, title: "Integrity First", desc: "We do what we say. No hidden agendas, no games, no pressure tactics." },
                { icon: Target, title: "Precision Execution", desc: "Meticulous attention to detail in every transaction and project." },
                { icon: Anchor, title: "Long-Term Focus", desc: "Building wealth through assets, not just transactions." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all flex items-start space-x-5"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#B8860B]/20">
                    <item.icon className="w-7 h-7 text-[#0F1C2E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-vetean-pride-real-estate-florida-trsut-patriotJPG.JPG')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Our Commitment</h3>
          <p className="text-xl text-white/90">Always ready to serve, execute with precision, and do what's right.</p>
        </div>
      </div>

      {/* Investment Strategy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Where We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Headed</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're building a real estate investment operation designed for scale and long-term wealth creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: "Strategic Acquisitions",
                desc: "We focus on off-market, distressed, and value-add properties in Florida's high-growth markets. Every deal is underwritten to strict criteria.",
                items: ["Southwest Florida (Lee, Collier, Charlotte)", "Central Florida (Polk, Orange, Osceola)", "Expanding throughout Florida"]
              },
              {
                icon: TrendingUp,
                title: "Value Creation",
                desc: "Our goal is to create value through strategic renovation, repositioning, and building a portfolio of income-producing assets.",
                items: ["Strategic renovation projects", "Building contractor relationships", "Long-term portfolio development"]
              },
              {
                icon: Lightbulb,
                title: "Building for Scale",
                desc: "We're developing the systems and relationships needed to grow — from acquisitions to construction to property management.",
                items: ["Professional systems and processes", "Building a network of contractors", "Developing management capabilities"]
              },
              {
                icon: Anchor,
                title: "Capital Partnerships",
                desc: "We're open to working with private lenders and JV partners who want to participate in Florida real estate deals.",
                items: ["Private lending opportunities", "JV partnerships on select deals", "Transparent communication"]
              }
            ].map((card, i) => (
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
                <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#B8860B]/20">
                    <card.icon className="w-7 h-7 text-[#0F1C2E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/70 mb-6">{card.desc}</p>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-center text-white/60">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Criteria */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Criteria</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Look For</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Every acquisition must meet our underwriting criteria. We're disciplined about what we buy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F1C2E] p-10 rounded-2xl border border-[#C5A572]/20"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6">Property Types</h3>
                <ul className="space-y-4">
                  {[
                    "Single-family homes",
                    "Small multifamily (2-4 units)",
                    "Townhouses and condos",
                    "Vacant land (select opportunities)"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-white/70 text-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C5A572] mb-6">Situations We Buy</h3>
                <ul className="space-y-4">
                  {[
                    "Distressed and as-is properties",
                    "Foreclosures and pre-foreclosures",
                    "Inherited and probate properties",
                    "Landlord exits and tired rentals"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-white/70 text-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
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
          <Target className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Connect?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have a property to sell, capital to deploy, or services to offer — we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1"
            >
              Get in Touch <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
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
