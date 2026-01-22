'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Building,
  Home,
  Users,
  Wrench,
  DollarSign,
  FileText,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  Clock,
  Shield,
  TrendingUp,
  Key,
  ClipboardList,
  Banknote,
  Heart,
  AlertCircle,
  BarChart
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
  {
    icon: Home,
    title: "Single-Family Homes",
    description: "Individual rental homes across Florida markets"
  },
  {
    icon: Building,
    title: "Multi-Family Properties",
    description: "Duplexes, triplexes, and small apartment buildings"
  },
  {
    icon: Key,
    title: "Section 8 Housing",
    description: "Properties accepting housing voucher tenants"
  }
]

const whyPartnerWithUs = [
  {
    icon: TrendingUp,
    title: "Growing Portfolio",
    description: "Our rental portfolio is expanding across Florida, providing consistent management opportunities"
  },
  {
    icon: Shield,
    title: "Quality Properties",
    description: "We renovate to high standards, meaning fewer maintenance issues and happier tenants"
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    description: "We're building a portfolio for the long haul and value ongoing relationships"
  },
  {
    icon: BarChart,
    title: "Clear Communication",
    description: "We expect regular reporting and transparent communication about our properties"
  }
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

const markets = [
  { name: "Tampa Bay", counties: "Hillsborough, Pinellas, Pasco" },
  { name: "Orlando", counties: "Orange, Seminole, Osceola" },
  { name: "Jacksonville", counties: "Duval, Clay, St. Johns" },
  { name: "Central Florida", counties: "Polk, Lake, Volusia" }
]

export default function PropertyManagementClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work-with-us"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partner Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building className="w-5 h-5 text-purple-300" />
              <span className="text-purple-100 font-medium">Property Management Partners</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Manage Our Growing
              <span className="block text-purple-300">Rental Portfolio</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
              We're seeking professional property management companies to partner
              with as we expand our buy-and-hold rental portfolio across Florida.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Discuss Management Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-500/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-purple-400/30 hover:bg-purple-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {propertyTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <type.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{type.title}</h3>
                  <p className="text-slate-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Services Section */}
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
              Services We Need
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're looking for full-service property management that handles
              all aspects of rental operations professionally.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {managementServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Markets Where We Need Property Managers
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {markets.map((market, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{market.name}</h3>
                  <p className="text-purple-200 text-sm">{market.counties}</p>
                </motion.div>
              ))}
            </motion.div>
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
                  Why Property Managers Choose Us
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  We're not just adding a few rentals - we're building a substantial
                  portfolio. This means consistent, long-term business for the right
                  property management partners.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyPartnerWithUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Look For in Property Managers</h3>
                <ul className="space-y-4">
                  {whatWeLookFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Grow With Our Portfolio
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10">
              If you're a licensed property management company looking to add
              quality investor-owned rentals to your portfolio, let's talk.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
