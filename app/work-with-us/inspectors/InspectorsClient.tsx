'use client'
import Link from 'next/link'
import { Phone, Search, CheckCircle2, ArrowRight, Home, Droplets, Zap, Bug, Wind, Ruler, Clock, FileText, Camera, AlertTriangle, Thermometer, Shield, ClipboardCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const inspectionServices = [
  {
    icon: Home,
    title: "General Home Inspections",
    description: "Comprehensive property inspections for acquisitions",
    details: ["Full property assessment", "Structural evaluation", "Systems review", "Photo documentation"]
  },
  {
    icon: Droplets,
    title: "Plumbing Inspections",
    description: "Water systems, sewage, and drainage assessment",
    details: ["Supply line evaluation", "Drain & sewer scoping", "Water heater inspection", "Fixture assessment"]
  },
  {
    icon: Zap,
    title: "Electrical Inspections",
    description: "Electrical system safety and code compliance",
    details: ["Panel inspection", "Wiring assessment", "Outlet/switch testing", "Code compliance review"]
  },
  {
    icon: Wind,
    title: "HVAC Inspections",
    description: "Heating and cooling system evaluation",
    details: ["AC efficiency testing", "Ductwork inspection", "Age & condition report", "Repair cost estimates"]
  },
  {
    icon: Thermometer,
    title: "Roof Inspections",
    description: "Roofing system condition and lifespan assessment",
    details: ["Shingle/tile condition", "Leak detection", "Flashing inspection", "Remaining life estimate"]
  },
  {
    icon: Bug,
    title: "Pest & Termite Inspections",
    description: "Wood-destroying organism and pest detection",
    details: ["WDO inspection", "Termite detection", "Pest identification", "Treatment recommendations"]
  }
]

const additionalServices = [
  { icon: Ruler, title: "Property Appraisals", description: "Licensed appraisals for lending, ARV analysis, and market value assessments" },
  { icon: Camera, title: "Property Condition Reports", description: "Quick walk-through assessments with photo documentation for remote evaluation" },
  { icon: AlertTriangle, title: "Mold Inspections", description: "Mold detection, testing, and remediation scope assessment" },
  { icon: Shield, title: "4-Point Inspections", description: "Insurance-required inspections covering roof, electrical, plumbing, and HVAC" },
  { icon: FileText, title: "Wind Mitigation", description: "Wind mitigation reports for insurance credit eligibility" },
  { icon: Search, title: "Septic Inspections", description: "Septic system evaluation, pumping verification, and capacity assessment" }
]

const whatWeLookFor = [
  "Licensed and insured professionals",
  "Fast scheduling and turnaround times",
  "Detailed reports with photos and cost estimates",
  "Investor-friendly pricing for volume business",
  "Experience with distressed and vacant properties",
  "Coverage in Tampa Bay, Orlando, or Jacksonville areas",
  "Digital report delivery (PDF format)",
  "Ability to assess repair costs and scope"
]

export default function InspectorsClient() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section */}
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
            <motion.div variants={fadeInUp}>
              <Link href="/work-with-us" className="inline-flex items-center text-[#C5A572] hover:text-[#D4B896] mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Partner Opportunities
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Search className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">INSPECTORS & APPRAISERS</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Help Us Make <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Informed Decisions</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We need reliable inspectors and appraisers who can deliver thorough assessments quickly. Your expertise helps us evaluate properties and plan renovations accurately.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Join Our Network <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inspection Services */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Inspection Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">We Need</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From pre-acquisition due diligence to post-renovation verification, we need comprehensive inspection services throughout our process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspectionServices.map((service, i) => (
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
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
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

      {/* Additional Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Additional Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Assessments</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Beyond standard inspections, we also work with appraisers and specialists for various property evaluation needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#1B365D]/50 p-6 rounded-xl border border-[#C5A572]/10 flex items-start gap-4"
              >
                <div className="p-3 bg-[#0F1C2E] rounded-lg flex-shrink-0">
                  <service.icon className="w-5 h-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-white/60">{service.description}</p>
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
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Great Partners</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What Makes a Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Inspector Partner</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We value reliability, thoroughness, and speed. Our ideal inspection partners understand investor needs and deliver actionable reports that help us make smart decisions quickly.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: Clock, text: "Quick turnaround - inspections within 24-48 hours" },
                  { icon: FileText, text: "Detailed reports with photos and cost estimates" },
                  { icon: CheckCircle2, text: "Consistent volume across multiple markets monthly" },
                  { icon: ClipboardCheck, text: "Direct communication with our acquisitions team" }
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
              <h3 className="text-2xl font-serif font-bold text-white mb-8">What We Look For</h3>
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
          <Search className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Join Our Network of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Trusted Inspectors</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're a licensed inspector or appraiser looking for consistent work with professional real estate investors, let's connect.
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
