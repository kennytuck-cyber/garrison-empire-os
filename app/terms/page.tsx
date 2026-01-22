'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Scale, Users, AlertTriangle, Phone, Mail, MapPin, ArrowRight, Shield, CheckCircle2, XCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#C5A572] rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1B365D] rounded-full blur-3xl" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
          >
            <Scale className="w-5 h-5 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572] tracking-wider">LEGAL AGREEMENT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Terms &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services. By using our website, you agree to be bound by these terms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 mt-6"
          >
            Last Updated: December 2025
          </motion.p>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Users, title: "For Personal Use", desc: "Services intended for U.S. residents 18+ for personal, non-commercial use" },
              { icon: Shield, title: "We Buy Houses", desc: "We are home buyers, not agents, brokers, or lenders" },
              { icon: Scale, title: "Florida Law Governs", desc: "These terms are governed by Florida state law" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 text-center"
              >
                <div className="w-12 h-12 bg-[#C5A572]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#C5A572]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#1B365D]/30 rounded-xl p-8 border border-[#C5A572]/10"
          >
            <p className="text-white/80 leading-relaxed">
              Welcome to Garrison Point Solutions, LLC ("GPS", "we", "us" or "our"). These Terms of Service ("Terms") govern your use of our websites (including garrisonpointsolutions.com), applications and services (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms and by our{' '}
              <Link href="/privacy" className="text-[#C5A572] hover:underline">Privacy Policy</Link>, which is incorporated into these Terms. If you do not agree with any part of the Terms, please do not use our Services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-12"
          >
            {/* Section 1 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-white">Using Our Services</h2>
              </div>
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Eligibility and Personal Use</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our Services are intended for personal, non-commercial use by U.S. residents who are at least 18 years old. By using our Services you represent that you meet these criteria and agree to abide by all applicable local, state and federal laws. We buy residential real estate in Florida; we do not offer brokerage services, mortgage loans or real-estate agency representation. Nothing on our site constitutes an offer to buy or sell securities or real estate outside Florida.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Accounts</h3>
                  <p className="text-white/70 leading-relaxed">
                    You may be required to provide personal information to request an offer or schedule a consultation. You agree to provide accurate, current and complete information and to update it as needed. You are responsible for maintaining the confidentiality of any login credentials and for all activity under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Limited License</h3>
                  <p className="text-white/70 leading-relaxed">
                    We grant you a limited, revocable, non-exclusive license to access and use our Services for your personal use. You may not copy, reproduce, distribute, republish, transmit, modify, sell or exploit any part of our Services or content without our prior written permission. All text, images, audio, video, data and code on our site are our property or licensed to us and are protected by intellectual-property laws.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 - Prohibited Activities */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-white">Prohibited Activities</h2>
              </div>
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 ml-14">
                <p className="text-white/70 mb-4">You agree NOT to engage in the following activities:</p>
                <ul className="space-y-3">
                  {[
                    "Impersonating any person or misrepresenting your affiliation",
                    "Harvesting email addresses or personal data",
                    "Sending unsolicited marketing messages (spam)",
                    "Attempting to reverse-engineer, decompile or disable any software or security features",
                    "Using our Services in violation of any law or regulation",
                    "Damaging or interfering with the proper functioning of our Services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-white">Submissions and Communications</h2>
              </div>
              <div className="space-y-4 pl-14">
                <p className="text-white/70 leading-relaxed">
                  If you submit testimonials, reviews or other content through our Services ("Submissions"), you grant GPS a perpetual, worldwide, royalty-free license to use, reproduce and display that content for marketing or other lawful purposes. Do not provide confidential or proprietary information in a Submission; we do not treat Submissions as confidential.
                </p>
                <div className="bg-[#1B365D]/30 rounded-xl p-6 border border-[#C5A572]/10">
                  <p className="text-white/80">
                    <strong className="text-[#C5A572]">Communication Consent:</strong> By providing your phone number and email address, you consent to receive calls, emails and text messages from us regarding your inquiry and our services. Message and data rates may apply. You may opt out of SMS at any time by replying "STOP". See our{' '}
                    <Link href="/privacy" className="text-[#C5A572] hover:underline">Privacy Policy</Link> for information on how we use and protect your data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 4 - Disclaimers */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-white">Disclaimers and Limitation of Liability</h2>
              </div>
              <div className="space-y-6 pl-14">
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 mb-2">No Legal or Professional Advice</h3>
                      <p className="text-white/70">
                        We are professional homebuyers, not attorneys, accountants or licensed real-estate agents. The information on our site is for general informational purposes and should not be considered legal, tax or financial advice. You should consult appropriate professionals before making any decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">As-Is and Assumption of Risk</h3>
                  <p className="text-white/70 leading-relaxed">
                    Our Services and all content are provided "as is" and "as available" without warranties of any kind, either express or implied. To the fullest extent permitted by law, we and our suppliers expressly disclaim all warranties including warranties of merchantability, fitness for a particular purpose, title and non-infringement. You use our Services at your own risk. We do not guarantee that our Services will be uninterrupted, secure or error free.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Limitation of Liability</h3>
                  <p className="text-white/70 leading-relaxed">
                    To the maximum extent permitted by law, GPS will not be liable for any indirect, incidental, consequential, special or punitive damages arising out of or in connection with your use of the Services. Our total liability to you for any claim shall not exceed the amount you paid (if any) to use our Services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections 5-7 */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {[
                { num: 5, title: "Indemnification", content: "You agree to defend, indemnify and hold harmless GPS and its officers, directors, employees and agents from and against any claims, damages, obligations, losses, liabilities and expenses arising out of your use or misuse of the Services or your violation of these Terms." },
                { num: 6, title: "Governing Law and Dispute Resolution", content: "These Terms and any disputes shall be governed by the laws of the State of Florida, without regard to its conflict-of-law principles. Any dispute arising under these Terms that cannot be resolved informally will be resolved in binding arbitration on an individual basis in accordance with the Federal Arbitration Act. You waive the right to bring or participate in a class action. Consult an attorney to ensure this arbitration clause is enforceable in your jurisdiction." },
                { num: 7, title: "Modifications", content: "We may update these Terms from time to time. We will post the updated Terms on our website with a new 'last updated' date. By continuing to use the Services after any changes become effective, you agree to the revised Terms." }
              ].map((section) => (
                <div key={section.num}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                      {section.num}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed pl-14">{section.content}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  8
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="bg-[#1B365D] rounded-xl p-8 border border-[#C5A572]/20 ml-14">
                <div className="space-y-4">
                  <p className="text-white font-bold text-xl">Garrison Point Solutions, LLC</p>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-5 h-5 text-[#C5A572] mt-0.5" />
                    <span>7901 4th Street N, Suite 300<br />St Petersburg, FL 33702</span>
                  </div>
                  <a href="mailto:info@garrisonpointsolutions.com" className="flex items-center gap-3 text-white/70 hover:text-[#C5A572] transition-colors">
                    <Mail className="w-5 h-5 text-[#C5A572]" />
                    info@garrisonpointsolutions.com
                  </a>
                  <a href="tel:2392913444" className="flex items-center gap-3 text-white/70 hover:text-[#C5A572] transition-colors">
                    <Phone className="w-5 h-5 text-[#C5A572]" />
                    (239) 291-3444
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">
              Ready to Get Your Cash Offer?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-2xl mx-auto">
              Now that you understand our terms, take the next step. Get a free, no-obligation cash offer for your Florida property.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group"
              >
                Get My Cash Offer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/privacy"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
              >
                View Privacy Policy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
