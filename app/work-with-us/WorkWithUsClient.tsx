'use client'
import Link from 'next/link'
import {
  Phone, ArrowRight, Shield, Heart, Building2, DollarSign, Users,
  CheckCircle2, Star, Landmark, FileText, Search, Home, Wrench, ClipboardList,
  Scale, Briefcase, Key, HardHat, Calculator, MapPin, TrendingUp
} from 'lucide-react'
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
    idealFor: "Hard money lenders, private equity funds, family offices, and accredited investors seeking secured real estate exposure.",
    link: "/work-with-us/lenders",
    color: "from-emerald-500 to-emerald-600"
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
    idealFor: "Title companies, closing attorneys, and settlement agents serving Florida markets.",
    link: "/work-with-us/title-closing",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Search,
    title: "Inspectors & Appraisers",
    subtitle: "Due Diligence Professionals",
    description: "We need thorough inspectors and appraisers for our acquisition pipeline. Quality due diligence is critical to our operation.",
    features: [
      "Regular inspection volume",
      "Fast turnaround needed",
      "Detailed reports expected",
      "Various property types"
    ],
    idealFor: "Licensed home inspectors, commercial inspectors, appraisers, and specialty inspection services.",
    link: "/work-with-us/inspectors",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: HardHat,
    title: "Contractors & Trades",
    subtitle: "Renovation Partners",
    description: "We're building our network of reliable contractors for renovation projects. All trades needed - from GCs to specialty subs.",
    features: [
      "Ongoing project pipeline",
      "Fair payment terms",
      "Clear scopes of work",
      "Professional partnership"
    ],
    idealFor: "Licensed GCs, plumbers, electricians, HVAC, roofers, painters, and all construction trades.",
    link: "/contractors",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Key,
    title: "Property Management",
    subtitle: "Rental Operations",
    description: "As we build our rental portfolio, we need property management partners who can handle tenant placement, maintenance, and operations.",
    features: [
      "Growing rental portfolio",
      "Single-family and small multifamily",
      "Long-term partnership opportunity",
      "Professional operations expected"
    ],
    idealFor: "Property management companies serving Florida residential markets.",
    link: "/work-with-us/property-management",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: ClipboardList,
    title: "Other Services",
    subtitle: "Insurance, Surveying & More",
    description: "We need various professional services for our operation: insurance agents, surveyors, environmental consultants, and more.",
    features: [
      "Property insurance specialists",
      "Land surveyors",
      "Environmental assessments",
      "1031 exchange facilitators"
    ],
    idealFor: "Insurance agents, surveyors, environmental consultants, 1031 intermediaries, and other real estate service providers.",
    link: "/work-with-us/services",
    color: "from-cyan-500 to-cyan-600"
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
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">PARTNERSHIP NETWORK</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Work With <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're building a comprehensive real estate investment operation in Florida. We need reliable partners across every aspect of the business — from capital to closing, inspections to renovations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#partners" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Explore Opportunities <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Our Operation</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">What We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Building</span></h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A full-scale real estate investment operation focused on acquisitions, renovations, and building a portfolio of income-producing properties across Florida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Acquisitions", desc: "Off-market distressed properties throughout Florida", stat: "Monthly Deal Flow" },
              { icon: Wrench, title: "Renovations", desc: "Strategic rehab and value-add projects", stat: "Active Projects" },
              { icon: Home, title: "Rentals", desc: "Building long-term cash flow portfolio", stat: "Growing Portfolio" },
              { icon: TrendingUp, title: "Dispositions", desc: "Fix & flip and wholesale exits", stat: "Consistent Exits" }
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
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 mb-4">{item.desc}</p>
                  <span className="text-[#C5A572] text-sm font-semibold">{item.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section id="partners" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Partnership Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Who We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Looking For</span></h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We need reliable partners across every aspect of real estate investing. Find your category below.
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
                className="group"
              >
                <Link href={category.link} className="block h-full">
                  <div className="relative bg-[#1B365D]/50 backdrop-blur-sm rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/40 transition-all h-full overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />

                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-7 h-7 text-white" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#C5A572] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#C5A572] transition-colors">{category.title}</h3>
                      <p className="text-[#C5A572] text-sm font-semibold mb-4">{category.subtitle}</p>
                      <p className="text-white/60 mb-6 leading-relaxed">{category.description}</p>

                      <div className="space-y-2 mb-6">
                        {category.features.slice(0, 3).map((feature, j) => (
                          <div key={j} className="flex items-center text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#C5A572]/10">
                        <p className="text-xs text-white/50">
                          <span className="text-[#C5A572] font-semibold">Ideal for:</span> {category.idealFor.split(',')[0]}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Row */}
      <section className="py-12 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Investors & Lenders", href: "/partners", icon: DollarSign },
              { label: "Contractors", href: "/contractors", icon: HardHat },
              { label: "Title Companies", href: "/work-with-us/title-closing", icon: Scale },
              { label: "Inspectors", href: "/work-with-us/inspectors", icon: Search },
              { label: "Property Managers", href: "/work-with-us/property-management", icon: Key }
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 px-5 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg hover:border-[#C5A572]/50 hover:bg-[#1B365D]/50 transition-all text-white/80 hover:text-white"
              >
                <link.icon className="w-4 h-4 text-[#C5A572]" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-vetean-pride-real-estate-florida-trsut-patriotJPG.JPG')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Veteran-Owned. Integrity-Driven.</h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">23 years of Coast Guard service taught us that the best partnerships are built on trust, clear communication, and follow-through. That's how we operate.</p>
        </div>
      </div>

      {/* Why Partner With Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're building something significant and want partners who share our values. Integrity, clear communication, and follow-through on every commitment.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Professional Operations", desc: "Organized systems, clear documentation, and reliable communication." },
                  { icon: Calculator, title: "Fair & Transparent", desc: "Competitive terms, clear agreements, and no surprises." },
                  { icon: TrendingUp, title: "Growing Volume", desc: "Building deal flow that creates consistent opportunities for partners." },
                  { icon: Users, title: "Long-Term Focus", desc: "We want partners for the long haul, not one-off transactions." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                      <item.icon className="w-6 h-6 text-[#C5A572]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
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
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Our Service Areas</h3>
              <div className="space-y-6">
                {[
                  { region: "Southwest Florida", counties: "Lee, Collier, Charlotte", primary: true },
                  { region: "Central Florida", counties: "Polk, Orange, Osceola", primary: true },
                  { region: "South Florida", counties: "Palm Beach, Broward, Miami-Dade", primary: false },
                  { region: "Tampa Bay", counties: "Hillsborough, Pinellas, Pasco", primary: false }
                ].map((market, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-[#C5A572]/10 last:border-0">
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 ${market.primary ? 'text-[#C5A572]' : 'text-white/40'}`} />
                      <span className="text-lg text-white font-medium">{market.region}</span>
                    </div>
                    <span className="text-white/50 text-sm">{market.counties}</span>
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
          <Heart className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Together</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're a lender, title company, inspector, contractor, or service provider — we're interested in exploring how we can work together.
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
