'use client'
import Link from 'next/link'
import { Phone, ArrowRight, Shield, Landmark, Search, Wrench, Building, Briefcase, CheckCircle2, Star, Scale, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const partnerCategories = [
  {
    icon: Landmark,
    title: "Lenders",
    subtitle: "Hard Money & Private Equity",
    description: "Fund our acquisitions and renovations. We're seeking relationships with hard money lenders, private equity firms, and private capital sources.",
    features: [
      "Consistent deal flow for capital deployment",
      "Secured first-position liens",
      "Professional documentation",
      "Clear communication on project status"
    ],
    link: "/work-with-us/lenders"
  },
  {
    icon: Scale,
    title: "Title & Closing",
    subtitle: "Title Companies & Attorneys",
    description: "Partner with us on closings throughout Florida. We need reliable title companies and real estate attorneys who can handle investor transactions efficiently.",
    features: [
      "Consistent transaction volume",
      "Cash closings (no financing delays)",
      "Professional, organized buyers",
      "Long-term partnership focus"
    ],
    link: "/work-with-us/title-closing"
  },
  {
    icon: Search,
    title: "Inspectors & Appraisers",
    subtitle: "Due Diligence Partners",
    description: "Help us make informed acquisition decisions. We need thorough inspectors and accurate appraisers who understand investor needs.",
    features: [
      "Fast turnaround times",
      "Detailed reports with photos",
      "Investor-friendly pricing",
      "Coverage across Florida markets"
    ],
    link: "/work-with-us/inspectors"
  },
  {
    icon: Wrench,
    title: "Contractors & Trades",
    subtitle: "Renovation Partners",
    description: "Build with us. We're looking for licensed contractors and skilled tradespeople for our renovation projects across Florida.",
    features: [
      "Consistent project pipeline",
      "Clear scopes of work",
      "Fair and timely payment",
      "Long-term relationships"
    ],
    link: "/contractors"
  },
  {
    icon: Building,
    title: "Property Management",
    subtitle: "Rental Portfolio Partners",
    description: "Manage our growing rental portfolio. We need professional property managers who can handle tenant placement and ongoing management.",
    features: [
      "Growing portfolio of rentals",
      "Quality renovated properties",
      "Professional ownership",
      "Clear communication expectations"
    ],
    link: "/work-with-us/property-management"
  },
  {
    icon: Briefcase,
    title: "Other Services",
    subtitle: "Insurance, Legal & More",
    description: "Support our operations. We work with insurance agents, attorneys, accountants, photographers, and other service providers.",
    features: [
      "Ongoing service needs",
      "Multiple property types",
      "Professional relationships",
      "Fair compensation"
    ],
    link: "/work-with-us/services"
  }
]

export default function WorkWithUsClient() {
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
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">PARTNERSHIP OPPORTUNITIES</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Work With <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're building a real estate investment operation in Florida and looking for partners who share our commitment to excellence. Lenders, contractors, and service providers welcome.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Partner With Us <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Categories</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're building long-term relationships with professionals across every aspect of real estate investing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, i) => (
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
                <div className="relative bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B8860B]/20">
                    <category.icon className="w-8 h-8 text-[#0F1C2E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-[#C5A572] text-sm font-medium mb-4">{category.subtitle}</p>
                  <p className="text-white/60 mb-6 flex-grow">{category.description}</p>

                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={category.link}
                    className="inline-flex items-center text-[#C5A572] font-semibold hover:text-[#D4B896] transition-colors group-hover:translate-x-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">The Garrison Standard</h3>
          <p className="text-xl text-white/90">We treat our partners the way we'd want to be treated - with respect, clear expectations, and fair dealings.</p>
        </div>
      </div>

      {/* Why Partner With Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point?</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're not just another investor - we're building something for the long term. Our partners get professional treatment, clear communication, and fair compensation.
              </p>
              <div className="grid gap-4">
                {[
                  "Veteran-owned with military integrity",
                  "Growing operation with consistent deal flow",
                  "Professional, organized transactions",
                  "Clear communication and expectations",
                  "Long-term relationship focus",
                  "Fair and timely compensation"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 bg-[#1B365D]/50 p-5 rounded-xl border border-[#C5A572]/10"
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
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url('/images/military-veteran-real-estate-florida-cash-buy-sell-pride-patriot-honest-trust.jpg')` }} />
              <div className="absolute -bottom-6 -left-6 bg-[#0F1C2E] p-4 rounded-2xl border border-[#C5A572]/20 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <Shield className="w-10 h-10 text-[#C5A572]" />
                  <div>
                    <div className="text-xl font-bold text-white">23+ Years</div>
                    <div className="text-white/60 text-sm">Coast Guard Service</div>
                  </div>
                </div>
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
          <Heart className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Work Together?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're a lender, contractor, or service provider, we'd love to discuss how we can build a mutually beneficial partnership.
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
