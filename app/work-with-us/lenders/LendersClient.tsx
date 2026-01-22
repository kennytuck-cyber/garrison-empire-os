'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Landmark,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Building2,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  ChevronLeft,
  BarChart3,
  Percent,
  Calendar,
  Target
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

const lenderTypes = [
  {
    icon: Landmark,
    title: "Hard Money Lenders",
    description: "Short-term bridge loans for acquisitions and renovations",
    details: [
      "Fix & flip financing",
      "Bridge loans for quick closings",
      "Renovation/rehab funding",
      "Short-term (6-18 month) loans",
      "Asset-based lending"
    ],
    idealFor: "Quick acquisitions requiring fast funding and flexible terms"
  },
  {
    icon: Building2,
    title: "Private Equity Partners",
    description: "Equity investment for larger projects and portfolios",
    details: [
      "Joint venture partnerships",
      "Equity investment in deals",
      "Portfolio acquisitions",
      "Development projects",
      "Long-term hold financing"
    ],
    idealFor: "Larger deals requiring substantial capital investment"
  },
  {
    icon: TrendingUp,
    title: "DSCR Lenders",
    description: "Long-term rental property financing based on cash flow",
    details: [
      "Debt Service Coverage Ratio loans",
      "No personal income verification",
      "Based on property cash flow",
      "Long-term (30-year) options",
      "Portfolio lending available"
    ],
    idealFor: "Rental property acquisitions and refinancing"
  },
  {
    icon: DollarSign,
    title: "Private Money Lenders",
    description: "Individual investors seeking secured real estate returns",
    details: [
      "First position deed of trust",
      "Competitive interest rates",
      "Secured by real property",
      "Monthly interest payments",
      "Flexible terms negotiable"
    ],
    idealFor: "Investors seeking passive income secured by real estate"
  }
]

const whyPartnerWithUs = [
  {
    icon: Target,
    title: "Experienced Operators",
    description: "Proven track record in Florida real estate acquisitions, renovations, and dispositions"
  },
  {
    icon: Shield,
    title: "Conservative Underwriting",
    description: "We maintain healthy LTV ratios and realistic ARV projections to protect lender capital"
  },
  {
    icon: Clock,
    title: "Reliable Timelines",
    description: "Professional project management ensures on-time completions and loan payoffs"
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Regular updates, clear reporting, and open lines of communication throughout every project"
  },
  {
    icon: BarChart3,
    title: "Strong Deal Flow",
    description: "Consistent pipeline of quality deals requiring various funding structures"
  },
  {
    icon: Percent,
    title: "Competitive Returns",
    description: "Attractive risk-adjusted returns for lenders and equity partners"
  }
]

const dealCriteria = [
  { label: "Property Types", value: "Single-family, multi-family, small commercial" },
  { label: "Markets", value: "Florida - Tampa Bay, Orlando, Jacksonville, and surrounding areas" },
  { label: "Acquisition Range", value: "$75,000 - $500,000" },
  { label: "Typical LTV", value: "65-75% of ARV" },
  { label: "Hold Periods", value: "Fix & Flip: 3-9 months | Rentals: Long-term" },
  { label: "Monthly Volume", value: "Multiple acquisitions per month" }
]

export default function LendersClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/work-with-us"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partner Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Landmark className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-100 font-medium">Lending Partners</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fund Florida Real Estate
              <span className="block text-emerald-300">With Confidence</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-emerald-100 max-w-3xl mx-auto mb-10">
              Partner with experienced operators for hard money loans, private lending,
              and equity investments. Secure, reliable returns backed by Florida real estate.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
              >
                Discuss Lending Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+18138370548"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-emerald-400/30 hover:bg-emerald-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (813) 837-0548
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lender Types Section */}
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
              Types of Lenders We Work With
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you provide short-term bridge loans or long-term financing,
              we have opportunities that match your investment criteria.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {lenderTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <type.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                    <p className="text-slate-600">{type.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {type.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm text-slate-500 font-medium">IDEAL FOR</p>
                  <p className="text-slate-700">{type.idealFor}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
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
              Why Lenders Choose Us
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand that protecting your capital is paramount. Here's how we ensure
              your investment is secure and your returns are reliable.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyPartnerWithUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
              >
                <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deal Criteria Section */}
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
                  Our Typical Deal Profile
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Understanding our investment criteria helps you determine if we're a good fit
                  for your lending program. Here's what our typical deals look like.
                </p>

                <div className="space-y-4">
                  {dealCriteria.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                        <p className="text-slate-900 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
                <Calendar className="w-12 h-12 text-emerald-300 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Current Funding Needs</h3>
                <p className="text-emerald-100 mb-6">
                  We're actively seeking lending partners for our growing acquisition pipeline.
                  Whether you're an individual investor or institutional lender, let's discuss
                  how we can work together.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Multiple deals closing monthly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Various loan sizes available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>First position security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Consistent repayment history</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all"
                >
                  Submit Lending Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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
              Ready to Earn Secured Returns?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-slate-400 mb-10">
              Let's discuss how your capital can work harder with reliable,
              real estate-backed investments in Florida's growing markets.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all"
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
