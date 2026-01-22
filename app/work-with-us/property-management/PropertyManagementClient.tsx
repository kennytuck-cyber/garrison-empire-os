'use client'
import Link from 'next/link'
import { Phone, Building, Home, Users, Wrench, CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, Key, ClipboardList, Banknote, Heart, AlertCircle, BarChart, FileText, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const managementServices = [
  {
    icon: Users,
    title: "Tenant Placement",
    description: "Marketing, screening, and placing quality tenants",
    features: ["Market rent analysis", "Property marketing", "Tenant screening", "Lease execution"]
  },
  {
    icon: Banknote,
    title: "Rent Collection",
    description: "Efficient rent collection and accounting",
    features: ["Online payment systems", "Late fee enforcement", "Monthly reporting", "Owner disbursements"]
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "Managing repairs and property upkeep",
    features: ["24/7 maintenance line", "Vendor coordination", "Preventive maintenance", "Cost management"]
  },
  {
    icon: FileText,
    title: "Lease Administration",
    description: "Managing lease terms and renewals",
    features: ["Lease renewals", "Rent increases", "Compliance monitoring", "Move-in/out inspections"]
  },
  {
    icon: ClipboardList,
    title: "Property Inspections",
    description: "Regular property condition assessments",
    features: ["Quarterly inspections", "Photo documentation", "Condition reports", "Maintenance recommendations"]
  },
  {
    icon: AlertCircle,
    title: "Eviction Management",
    description: "Handling difficult tenant situations",
    features: ["Notice preparation", "Legal coordination", "Court representation", "Property turnover"]
  }
]

const propertyTypes = [
  { icon: Home, title: "Single-Family Homes", description: "Individual rental homes across Florida markets" },
  { icon: Building, title: "Multi-Family Properties", description: "Duplexes, triplexes, and small apartment buildings" },
  { icon: Key, title: "Section 8 Housing", description: "Properties accepting housing voucher tenants" }
]

const markets = [
  { name: "Tampa Bay", counties: "Hillsborough, Pinellas, Pasco" },
  { name: "Orlando", counties: "Orange, Seminole, Osceola" },
  { name: "Jacksonville", counties: "Duval, Clay, St. Johns" },
  { name: "Central Florida", counties: "Polk, Lake, Volusia" }
]

const whatWeLookFor = [
  "Licensed property management company in Florida",
  "Experience managing investor-owned rentals",
  "Strong tenant screening processes",
  "Transparent fee structures",
  "Online owner portals for reporting",
  "24/7 maintenance coordination",
  "Knowledge of landlord-tenant law",
  "Coverage in Tampa Bay, Orlando, or Jacksonville",
  "Proven track record with references"
]

export default function PropertyManagementClient() {
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
              <Building className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">PROPERTY MANAGEMENT</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Manage Our <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Growing Portfolio</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              We're seeking professional property management companies to partner with as we expand our buy-and-hold rental portfolio across Florida.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Discuss Partnership <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-[#1B365D]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-[#0F1C2E] rounded-xl border border-[#C5A572]/10"
              >
                <div className="p-3 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg">
                  <type.icon className="w-8 h-8 text-[#0F1C2E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{type.title}</h3>
                  <p className="text-white/60">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Services We Need</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Full-Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Management</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're looking for full-service property management that handles all aspects of rental operations professionally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, i) => (
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
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Banner */}
      <div className="relative py-16 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 font-serif">Markets Where We Need Property Managers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1B365D]/50 backdrop-blur-sm rounded-xl p-6 border border-[#C5A572]/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#C5A572]" />
                  <h4 className="text-xl font-bold text-white">{market.name}</h4>
                </div>
                <p className="text-white/60 text-sm">{market.counties}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Property Managers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Choose Us</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We're not just adding a few rentals - we're building a substantial portfolio. This means consistent, long-term business for the right property management partners.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: TrendingUp, text: "Growing portfolio providing consistent management opportunities" },
                  { icon: Shield, text: "Quality renovated properties mean fewer maintenance issues" },
                  { icon: Heart, text: "Long-term partnership approach - we value ongoing relationships" },
                  { icon: BarChart, text: "Clear communication with regular reporting expectations" }
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
              <h3 className="text-2xl font-serif font-bold text-white mb-8">What We Look For in Property Managers</h3>
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
          <Building className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Grow With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Our Portfolio</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're a licensed property management company looking to add quality investor-owned rentals to your portfolio, let's talk.
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
