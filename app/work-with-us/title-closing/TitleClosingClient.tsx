'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FileText,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  Building2,
  Scale,
  Users,
  Briefcase,
  MapPin,
  Zap,
  FileCheck,
  BadgeCheck
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

const whyPartnerWithUs = [
  {
    icon: Zap,
    title: "High Transaction Volume",
    description: "Consistent monthly closings across Tampa Bay, Orlando, Jacksonville, and surrounding markets"
  },
  {
    icon: Clock,
    title: "Fast Turnaround Needs",
    description: "We often work on tight timelines - partners who can expedite are invaluable"
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "We prefer building ongoing partnerships rather than one-off transactions"
  },
  {
    icon: BadgeCheck,
    title: "Professional Operations",
    description: "Clean deals with proper documentation, clear communication, and reliable funding"
  }
]

const marketAreas = [
  {
    region: "Tampa Bay Area",
    counties: ["Hillsborough", "Pinellas", "Pasco", "Polk", "Manatee", "Sarasota"]
  },
  {
    region: "Orlando Metro",
    counties: ["Orange", "Seminole", "Osceola", "Lake", "Volusia"]
  },
  {
    region: "Jacksonville Area",
    counties: ["Duval", "Clay", "St. Johns", "Nassau", "Baker"]
  },
  {
    region: "Central Florida",
    counties: ["Brevard", "Indian River", "Marion", "Sumter"]
  }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work-with-us"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partner Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 font-medium">Title & Closing Partners</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Close Deals With
              <span className="block text-blue-300">Confidence & Speed</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              We're seeking title companies and closing attorneys across Florida
              who can handle high-volume investor transactions with speed and precision.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Become a Title Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Needed Section */}
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
              Services We Need
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our active acquisition and disposition schedule requires comprehensive
              title and closing services throughout Florida.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesNeeded.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Markets We Operate In
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
                We acquire properties throughout Florida. Title partners in these
                areas are especially valuable to our operations.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {marketAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-slate-900">{area.region}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.counties.map((county, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                      >
                        {county}
                      </span>
                    ))}
                  </div>
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
                  What We Bring to the Partnership
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  We're not just looking for vendors - we want long-term partners
                  who grow with us. Here's what you can expect from working with
                  Garrison Point Solutions.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyPartnerWithUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Look For in Title Partners</h3>
                <ul className="space-y-4">
                  {whatWeLookFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100">{item}</span>
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
              Let's Close Deals Together
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10">
              If you're a title company or closing attorney looking for consistent
              investor business in Florida, we'd love to hear from you.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
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
