'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Search,
  ClipboardCheck,
  Home,
  Droplets,
  Zap,
  Bug,
  Wind,
  Ruler,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  Clock,
  FileText,
  Camera,
  AlertTriangle,
  Thermometer,
  Shield
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
  {
    icon: Ruler,
    title: "Property Appraisals",
    description: "Licensed appraisals for lending, ARV analysis, and market value assessments"
  },
  {
    icon: Camera,
    title: "Property Condition Reports",
    description: "Quick walk-through assessments with photo documentation for remote evaluation"
  },
  {
    icon: AlertTriangle,
    title: "Mold Inspections",
    description: "Mold detection, testing, and remediation scope assessment"
  },
  {
    icon: Shield,
    title: "4-Point Inspections",
    description: "Insurance-required inspections covering roof, electrical, plumbing, and HVAC"
  },
  {
    icon: FileText,
    title: "Wind Mitigation",
    description: "Wind mitigation reports for insurance credit eligibility"
  },
  {
    icon: Search,
    title: "Septic Inspections",
    description: "Septic system evaluation, pumping verification, and capacity assessment"
  }
]

const whyPartnerWithUs = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We often need inspections completed within 24-48 hours of scheduling"
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description: "We value thorough documentation with photos and cost estimates"
  },
  {
    icon: CheckCircle,
    title: "Consistent Volume",
    description: "Regular inspection needs across multiple markets monthly"
  },
  {
    icon: ClipboardCheck,
    title: "Clear Communication",
    description: "Direct access to our acquisitions team for questions and coordination"
  }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work-with-us"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partner Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Search className="w-5 h-5 text-amber-200" />
              <span className="text-amber-100 font-medium">Inspectors & Appraisers</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Help Us Make
              <span className="block text-amber-200">Informed Decisions</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-amber-100 max-w-3xl mx-auto mb-10">
              We need reliable inspectors and appraisers who can deliver thorough
              assessments quickly. Your expertise helps us evaluate properties
              and plan renovations accurately.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
              >
                Join Our Inspector Network
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-amber-400/30 hover:bg-amber-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inspection Services Section */}
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
              Inspection Services We Need
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              From pre-acquisition due diligence to post-renovation verification,
              we need comprehensive inspection services throughout our process.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {inspectionServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
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
              Beyond standard inspections, we also work with appraisers and
              specialists for various property evaluation needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 flex items-start gap-4"
              >
                <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                  <service.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
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
                  What Makes a Great Inspector Partner
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  We value reliability, thoroughness, and speed. Our ideal inspection
                  partners understand investor needs and deliver actionable reports
                  that help us make smart decisions quickly.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyPartnerWithUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Look For</h3>
                <ul className="space-y-4">
                  {whatWeLookFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-200 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-50">{item}</span>
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
              Join Our Network of Trusted Inspectors
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10">
              If you're a licensed inspector or appraiser looking for consistent
              work with professional real estate investors, let's connect.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all"
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
