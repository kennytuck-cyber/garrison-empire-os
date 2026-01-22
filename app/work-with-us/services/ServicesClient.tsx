'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Briefcase,
  Shield,
  MapPin,
  Truck,
  Camera,
  Leaf,
  Droplets,
  Flame,
  Trash2,
  Lock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  FileText,
  Gavel,
  Calculator,
  Home,
  Paintbrush,
  Car
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const serviceCategories = [
  {
    icon: Shield,
    title: "Insurance Agents",
    description: "Property insurance specialists for investment properties",
    services: [
      "Landlord/rental property insurance",
      "Vacant property coverage",
      "Builder's risk insurance",
      "Flood insurance",
      "Umbrella policies"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    icon: MapPin,
    title: "Land Surveyors",
    description: "Property boundary and topographic surveys",
    services: [
      "Boundary surveys",
      "ALTA/NSPS surveys",
      "Topographic surveys",
      "Elevation certificates",
      "Subdivision platting"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Gavel,
    title: "Real Estate Attorneys",
    description: "Legal support for transactions and disputes",
    services: [
      "Contract review",
      "Title disputes",
      "Eviction proceedings",
      "Entity formation",
      "Partnership agreements"
    ],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Calculator,
    title: "Accountants & CPAs",
    description: "Tax planning and bookkeeping for real estate",
    services: [
      "Real estate tax planning",
      "Cost segregation studies",
      "1031 exchange guidance",
      "Bookkeeping services",
      "Entity structuring"
    ],
    color: "from-cyan-500 to-cyan-600"
  }
]

const additionalServices = [
  {
    icon: Camera,
    title: "Real Estate Photographers",
    description: "Professional photography and virtual tours for listings"
  },
  {
    icon: Truck,
    title: "Moving & Junk Removal",
    description: "Property cleanouts, debris removal, and moving services"
  },
  {
    icon: Lock,
    title: "Locksmiths",
    description: "Lock changes, rekeying, and security system installation"
  },
  {
    icon: Droplets,
    title: "Pool Service",
    description: "Pool maintenance, repairs, and equipment services"
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description: "Lawn care, tree service, and landscape maintenance"
  },
  {
    icon: Flame,
    title: "Water & Fire Restoration",
    description: "Emergency restoration services for damaged properties"
  },
  {
    icon: Trash2,
    title: "Dumpster Rental",
    description: "Roll-off containers for renovation debris"
  },
  {
    icon: Paintbrush,
    title: "Cleaning Services",
    description: "Deep cleaning, turnover cleaning, and regular maintenance"
  },
  {
    icon: Car,
    title: "Towing Services",
    description: "Abandoned vehicle removal from acquired properties"
  },
  {
    icon: Home,
    title: "Staging Companies",
    description: "Home staging for retail listings and model homes"
  },
  {
    icon: FileText,
    title: "Notary Services",
    description: "Mobile notary for real estate document signing"
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Property security during renovation and vacancy"
  }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work-with-us"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partner Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-5 h-5 text-rose-200" />
              <span className="text-rose-100 font-medium">Additional Service Providers</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Support Our
              <span className="block text-rose-200">Real Estate Operations</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-rose-100 max-w-3xl mx-auto mb-10">
              From insurance to legal services, we need reliable professionals
              who understand real estate investing and can support our growing operations.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-700 font-semibold rounded-xl hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl"
              >
                Become a Service Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose-500/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-rose-400/30 hover:bg-rose-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Services We Need
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              These specialized professionals are essential to our investment operations.
              We're always looking to build relationships with quality providers.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
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
                        <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We also work with a variety of other service providers to keep
              our properties maintained and our operations running smoothly.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-100 rounded-lg flex-shrink-0">
                    <service.icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why Partner With Garrison Point Solutions?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  We believe in building strong, long-term relationships with our
                  service providers. When you deliver quality work, we keep coming back.
                </p>

                <ul className="space-y-4">
                  {whyPartnerWithUs.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-rose-100 mb-6">
                  If you provide any of the services listed on this page and want
                  to work with professional real estate investors, we'd love to
                  hear from you. Tell us about your services and coverage area.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-6 py-4 bg-white text-rose-700 font-semibold rounded-xl hover:bg-rose-50 transition-all"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Submit Your Information
                  </Link>
                  <a
                    href="tel:+18138370548"
                    className="flex items-center justify-center w-full px-6 py-4 bg-rose-400/20 text-white font-semibold rounded-xl border border-rose-300/30 hover:bg-rose-400/30 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (813) 837-0548
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Partner Pages */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-white mb-8">
              Looking for Other Partnership Opportunities?
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/work-with-us/lenders"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Lenders
              </Link>
              <Link
                href="/work-with-us/title-closing"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Title Companies
              </Link>
              <Link
                href="/work-with-us/inspectors"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Inspectors
              </Link>
              <Link
                href="/contractors"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Contractors
              </Link>
              <Link
                href="/work-with-us/property-management"
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Property Managers
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
