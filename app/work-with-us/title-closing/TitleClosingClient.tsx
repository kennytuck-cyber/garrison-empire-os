'use client'
import Link from 'next/link'
import { Phone, FileText, CheckCircle2, ArrowRight, Shield, Scale, Clock, Building2, Zap, BadgeCheck, Users, Briefcase, MapPin, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const servicesNeeded = [
  {
    icon: FileText,
    title: "Title Search & Examination",
    description: "Thorough title searches for clear ownership verification on all acquisitions"
  },
  {
    icon: Shield,
    title: "Title Insurance",
    description: "Owner's and lender's title insurance policies for every transaction"
  },
  {
    icon: Scale,
    title: "Closing Services",
    description: "Professional closing coordination, document preparation, and escrow management"
  },
  {
    icon: FileCheck,
    title: "Document Recording",
    description: "Proper recording of deeds, mortgages, and other real estate documents"
  },
  {
    icon: Building2,
    title: "Commercial Closings",
    description: "Complex commercial and multi-family property transaction support"
  },
  {
    icon: Briefcase,
    title: "1031 Exchange Support",
    description: "Coordination with qualified intermediaries for tax-deferred exchanges"
  }
]

const marketAreas = [
  { region: "Tampa Bay Area", counties: ["Hillsborough", "Pinellas", "Pasco", "Polk", "Manatee", "Sarasota"] },
  { region: "Orlando Metro", counties: ["Orange", "Seminole", "Osceola", "Lake", "Volusia"] },
  { region: "Jacksonville Area", counties: ["Duval", "Clay", "St. Johns", "Nassau", "Baker"] },
  { region: "Central Florida", counties: ["Brevard", "Indian River", "Marion", "Sumter"] }
]

const whatWeLookFor = [
  "Investor-friendly pricing and fee structures",
  "Experience with distressed properties and REO transactions",
  "Ability to handle quick closes (7-14 days when needed)",
  "Remote closing capabilities",
  "Clear communication and responsive service",
  "Familiarity with hard money lender requirements",
  "Competitive rates for volume business"
]

export default function TitleClosingClient() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section */}
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
            <motion.div variants={fadeInUp}>
              <Link href="/work-with-us" className="inline-flex items-center text-[#C5A572] hover:text-[#D4B896] mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Partner Opportunities
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">TITLE & CLOSING PARTNERS</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Close Deals With <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Confidence</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're seeking title companies and closing attorneys across Florida who can handle high-volume investor transactions with speed and precision.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Become a Title Partner <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Needed */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Services We Need</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Title Services</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our active acquisition and disposition schedule requires comprehensive title and closing services throughout Florida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesNeeded.map((service, i) => (
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
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#0F1C2E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Coverage Areas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Markets We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Operate In</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We acquire properties throughout Florida. Title partners in these areas are especially valuable to our operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1B365D]/50 p-6 rounded-xl border border-[#C5A572]/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#C5A572]" />
                  <h3 className="text-lg font-bold text-white">{area.region}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.counties.map((county, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0F1C2E] text-[#C5A572] text-sm rounded-full border border-[#C5A572]/20">
                      {county}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Partner With Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We Bring to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Partnership</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're not just looking for vendors - we want long-term partners who grow with us. Here's what you can expect from working with Garrison Point Solutions.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: Zap, text: "High transaction volume with consistent monthly closings" },
                  { icon: Clock, text: "Fast turnaround needs - partners who can expedite are invaluable" },
                  { icon: Users, text: "Long-term relationships over one-off transactions" },
                  { icon: BadgeCheck, text: "Clean deals with proper documentation and reliable funding" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 bg-[#0F1C2E] p-5 rounded-xl border border-[#C5A572]/10"
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
              className="bg-[#0F1C2E] p-10 rounded-2xl border border-[#C5A572]/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-8">What We Look For in Title Partners</h3>
              <ul className="space-y-4">
                {whatWeLookFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
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
          <FileText className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Let's Close <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Deals Together</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're a title company or closing attorney looking for consistent investor business in Florida, we'd love to hear from you.
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
