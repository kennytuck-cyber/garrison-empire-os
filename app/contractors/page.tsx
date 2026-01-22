'use client'
import Link from 'next/link'
import { Phone, Hammer, CheckCircle2, ArrowRight, Shield, Calendar, DollarSign, ClipboardList, Wrench, HardHat, PaintBucket, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/home-cash-offer-real-estate-florida-buy-sell-property.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Hammer className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">CONTRACTORS & TRADES</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Build With <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're launching a real estate investment operation in Florida and building our network of reliable contractors. If you're a skilled tradesperson looking for a professional partner, we'd like to connect.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Join Our Network <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Looking For</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're building our contractor network as we grow. We want reliable partners who share our commitment to quality work and professional relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Long-Term Mindset", desc: "Looking for ongoing relationships, not one-off jobs" },
              { icon: DollarSign, title: "Fair Payment", desc: "Competitive rates and clear payment terms" },
              { icon: ClipboardList, title: "Clear Scopes", desc: "Detailed SOWs and organized project management" },
              { icon: Shield, title: "Professional Partner", desc: "Clear communication, fair dealings, no games" }
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

      {/* Trades We Need */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Specialties</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Trades We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Work With</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're always looking to expand our network of reliable contractors across all trades.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: HardHat, title: "General Contractors", desc: "Licensed GCs for full renovation management" },
              { icon: Wrench, title: "Plumbing", desc: "Rough-in, repipes, fixture installation" },
              { icon: Zap, title: "Electrical", desc: "Panel upgrades, rewiring, fixture work" },
              { icon: PaintBucket, title: "Painting", desc: "Interior and exterior, prep to finish" },
              { icon: Hammer, title: "Carpentry", desc: "Framing, trim, cabinetry, decks" },
              { icon: ClipboardList, title: "HVAC", desc: "System replacement, ductwork, repairs" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1B365D]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all flex items-start space-x-5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-[#0F1C2E]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 mt-12 text-lg"
          >
            Also: Roofing, flooring, drywall, concrete, landscaping, pool service, and more.
          </motion.p>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">The Garrison Standard</h3>
          <p className="text-xl text-white/90">We treat our contractors the way we'd want to be treated - with respect, clear expectations, and fair compensation.</p>
        </div>
      </div>

      {/* Requirements */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Requirements</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Look For</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We want partners who share our commitment to quality, reliability, and professionalism.
              </p>
              <div className="grid gap-4">
                {[
                  "Licensed and insured in Florida",
                  "Reliable communication and responsiveness",
                  "Quality workmanship and attention to detail",
                  "Ability to provide written estimates",
                  "Willingness to work within project timelines",
                  "References or portfolio of past work"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 bg-[#0F1C2E] p-5 rounded-xl border border-[#C5A572]/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0" />
                    <span className="text-white/80 text-lg">{item}</span>
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
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Service Areas</h3>
              <p className="text-white/60 mb-8">
                We operate throughout Florida with primary focus on these regions:
              </p>
              <div className="space-y-6">
                {[
                  { region: "Southwest Florida", counties: "Lee, Collier, Charlotte Counties" },
                  { region: "Central Florida", counties: "Polk, Orange, Osceola Counties" },
                  { region: "South Florida", counties: "Palm Beach, Broward Counties" }
                ].map((area, i) => (
                  <div key={i} className="bg-[#1B365D]/50 p-5 rounded-xl border border-[#C5A572]/10">
                    <h4 className="text-lg font-bold text-white mb-1">{area.region}</h4>
                    <p className="text-white/60">{area.counties}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Works</span></h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "1", title: "Get in Touch", desc: "Contact us with your trade specialty, service area, and portfolio or references." },
              { step: "2", title: "Introduction Call", desc: "We'll discuss your capabilities, pricing, and how we might work together." },
              { step: "3", title: "Start Small", desc: "Begin with a single project to establish the working relationship." },
              { step: "4", title: "Grow Together", desc: "As trust builds, we'll bring you more projects and larger scopes." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#B8860B]/20">
                  <span className="text-2xl font-bold text-[#0F1C2E]">{item.step}</span>
                </div>
                <div className="bg-[#1B365D]/30 p-6 rounded-xl border border-[#C5A572]/10 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
          <Hammer className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Work Together?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're a licensed contractor or skilled tradesperson looking for consistent renovation work with a professional partner, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
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
