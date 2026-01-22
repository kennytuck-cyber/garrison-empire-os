'use client'
import Link from 'next/link'
import { Phone, Briefcase, Shield, MapPin, Truck, Camera, Leaf, Droplets, Flame, Trash2, Lock, CheckCircle2, ArrowRight, FileText, Gavel, Calculator, Home, Paintbrush, Car } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const serviceCategories = [
  {
    icon: Shield,
    title: "Insurance Agents",
    description: "Property insurance specialists for investment properties",
    services: ["Landlord/rental property insurance", "Vacant property coverage", "Builder's risk insurance", "Flood insurance", "Umbrella policies"]
  },
  {
    icon: MapPin,
    title: "Land Surveyors",
    description: "Property boundary and topographic surveys",
    services: ["Boundary surveys", "ALTA/NSPS surveys", "Topographic surveys", "Elevation certificates", "Subdivision platting"]
  },
  {
    icon: Gavel,
    title: "Real Estate Attorneys",
    description: "Legal support for transactions and disputes",
    services: ["Contract review", "Title disputes", "Eviction proceedings", "Entity formation", "Partnership agreements"]
  },
  {
    icon: Calculator,
    title: "Accountants & CPAs",
    description: "Tax planning and bookkeeping for real estate",
    services: ["Real estate tax planning", "Cost segregation studies", "1031 exchange guidance", "Bookkeeping services", "Entity structuring"]
  }
]

const additionalServices = [
  { icon: Camera, title: "Real Estate Photographers", description: "Professional photography and virtual tours for listings" },
  { icon: Truck, title: "Moving & Junk Removal", description: "Property cleanouts, debris removal, and moving services" },
  { icon: Lock, title: "Locksmiths", description: "Lock changes, rekeying, and security system installation" },
  { icon: Droplets, title: "Pool Service", description: "Pool maintenance, repairs, and equipment services" },
  { icon: Leaf, title: "Landscaping", description: "Lawn care, tree service, and landscape maintenance" },
  { icon: Flame, title: "Water & Fire Restoration", description: "Emergency restoration services for damaged properties" },
  { icon: Trash2, title: "Dumpster Rental", description: "Roll-off containers for renovation debris" },
  { icon: Paintbrush, title: "Cleaning Services", description: "Deep cleaning, turnover cleaning, and regular maintenance" },
  { icon: Car, title: "Towing Services", description: "Abandoned vehicle removal from acquired properties" },
  { icon: Home, title: "Staging Companies", description: "Home staging for retail listings and model homes" },
  { icon: FileText, title: "Notary Services", description: "Mobile notary for real estate document signing" },
  { icon: Shield, title: "Security Services", description: "Property security during renovation and vacancy" }
]

const whyPartnerWithUs = [
  "Consistent, repeat business opportunities",
  "Professional, organized operations",
  "Clear communication and expectations",
  "Timely payment for services rendered",
  "Long-term partnership approach",
  "Growing portfolio across Florida"
]

export default function ServicesClient() {
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
              <Briefcase className="w-4 h-4 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wide">SERVICE PROVIDERS</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Support Our <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Operations</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              From insurance to legal services, we need reliable professionals who understand real estate investing and can support our growing operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                Become a Partner <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-3 w-5 h-5" />(239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Professional Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">We Need</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              These specialized professionals are essential to our investment operations. We're always looking to build relationships with quality providers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, i) => (
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
                <div className="relative bg-[#0F1C2E] rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all overflow-hidden h-full">
                  <div className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        <p className="text-white/80">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                          <span className="text-white/70">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Additional Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">More Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">We Need</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We also work with a variety of other service providers to keep our properties maintained and our operations running smoothly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-[#1B365D]/50 p-5 rounded-xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0F1C2E] rounded-lg flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-white/60">{service.description}</p>
                  </div>
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
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Why Partner</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Garrison Point?</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We believe in building strong, long-term relationships with our service providers. When you deliver quality work, we keep coming back.
              </p>

              <ul className="space-y-4">
                {whyPartnerWithUs.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0" />
                    <span className="text-lg text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl p-8 text-[#0F1C2E]"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-[#0F1C2E]/80 mb-6">
                If you provide any of the services listed on this page and want to work with professional real estate investors, we'd love to hear from you. Tell us about your services and coverage area.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-4 bg-[#0F1C2E] text-[#C5A572] font-semibold rounded-xl hover:bg-[#1B365D] transition-all"
                >
                  Submit Your Information <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:2392913444"
                  className="flex items-center justify-center w-full px-6 py-4 bg-white/20 text-[#0F1C2E] font-semibold rounded-xl border border-[#0F1C2E]/20 hover:bg-white/30 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (239) 291-3444
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Partner Pages */}
      <section className="py-16 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Looking for Other Partnership Opportunities?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/work-with-us/lenders" className="px-6 py-3 bg-[#1B365D] text-white rounded-lg hover:bg-[#1B365D]/70 transition-colors border border-[#C5A572]/20">
              Lenders
            </Link>
            <Link href="/work-with-us/title-closing" className="px-6 py-3 bg-[#1B365D] text-white rounded-lg hover:bg-[#1B365D]/70 transition-colors border border-[#C5A572]/20">
              Title Companies
            </Link>
            <Link href="/work-with-us/inspectors" className="px-6 py-3 bg-[#1B365D] text-white rounded-lg hover:bg-[#1B365D]/70 transition-colors border border-[#C5A572]/20">
              Inspectors
            </Link>
            <Link href="/contractors" className="px-6 py-3 bg-[#1B365D] text-white rounded-lg hover:bg-[#1B365D]/70 transition-colors border border-[#C5A572]/20">
              Contractors
            </Link>
            <Link href="/work-with-us/property-management" className="px-6 py-3 bg-[#1B365D] text-white rounded-lg hover:bg-[#1B365D]/70 transition-colors border border-[#C5A572]/20">
              Property Managers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
