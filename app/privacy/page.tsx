'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Phone, Mail, MapPin, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function PrivacyPage() {
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#C5A572] rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1B365D] rounded-full blur-3xl" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
          >
            <Shield className="w-5 h-5 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572] tracking-wider">YOUR DATA MATTERS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            We're committed to protecting your personal information and being transparent about how we use it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 mt-6"
          >
            Last Updated: January 2026
          </motion.p>
        </div>
      </section>

      {/* Quick Summary Cards */}
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
              { icon: Lock, title: "Your Data is Secure", desc: "SSL encryption and secure storage protect your information" },
              { icon: Eye, title: "We Don't Sell Data", desc: "Your personal information is never sold to third parties" },
              { icon: CheckCircle2, title: "Easy Opt-Out", desc: "Text STOP anytime to stop receiving messages" }
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

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-16"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp} className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed">
                Garrison Point Solutions, LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website garrisonpointsolutions.com or interact with our services.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="bg-[#1B365D]/30 rounded-xl p-6 border border-[#C5A572]/10 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Personal Information You Provide</h3>
                  <p className="text-white/70 mb-4">When you fill out our contact form, request a cash offer, or communicate with us, we may collect:</p>
                  <ul className="space-y-2">
                    {["Name (first and last)", "Phone number", "Email address", "Property address and details", "Reason for selling", "Timeline preferences", "Any other information you voluntarily provide"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#C5A572] mb-3">Automatically Collected Information</h3>
                  <p className="text-white/70 mb-4">When you visit our website, we may automatically collect:</p>
                  <ul className="space-y-2">
                    {["IP address and location data", "Browser type and version", "Device information", "Pages visited and time spent", "Referring website", "Cookies and similar tracking technologies"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="bg-[#1B365D]/30 rounded-xl p-6 border border-[#C5A572]/10">
                <p className="text-white/70 mb-4">We use the information we collect to:</p>
                <ul className="space-y-2">
                  {[
                    "Evaluate your property for a potential cash offer",
                    "Communicate with you about your property inquiry",
                    "Send SMS messages, calls, and emails related to our services (with your consent)",
                    "Improve our website and services",
                    "Comply with legal obligations",
                    "Prevent fraud and ensure security"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 3 - SMS Consent (Important) */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-white">SMS & Communication Consent</h2>
              </div>
              <div className="bg-gradient-to-r from-[#B8860B]/10 to-[#C5A572]/10 rounded-xl p-6 border border-[#C5A572]/30">
                <p className="text-white/80 mb-6">
                  By submitting your phone number through our website forms, you expressly consent to receive SMS text messages, phone calls, and emails from Garrison Point Solutions, LLC regarding your property inquiry and our services.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Message Frequency", value: "Varies based on your inquiry" },
                    { label: "Opt-Out", value: "Reply STOP to any message" },
                    { label: "Help", value: "Text HELP for assistance" },
                    { label: "Costs", value: "Message and data rates may apply" }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0F1C2E]/50 p-4 rounded-lg">
                      <p className="text-[#C5A572] text-sm font-semibold mb-1">{item.label}</p>
                      <p className="text-white/70">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm italic">
                  Your consent to receive SMS messages is not a condition of purchasing any property or service from us. Carriers are not liable for delayed or undelivered messages.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-lg flex items-center justify-center text-[#0F1C2E] font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-white">Information Sharing & Disclosure</h2>
              </div>
              <div className="bg-[#1B365D]/30 rounded-xl p-6 border border-[#C5A572]/10">
                <p className="text-white/80 mb-4">
                  <strong className="text-[#C5A572]">We do not sell your personal information to third-party marketing companies.</strong> We may share your information with:
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Service Providers", desc: "Third parties who help us operate our business (e.g., email services, CRM systems, analytics providers)" },
                    { title: "Title Companies & Closing Agents", desc: "When processing a real estate transaction" },
                    { title: "Legal Requirements", desc: "When required by law, subpoena, or to protect our rights" },
                    { title: "Business Transfers", desc: "In connection with a merger, acquisition, or sale of assets" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 bg-[#C5A572] rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 5-8 combined for brevity */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {[
                { num: 5, title: "Data Retention", content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Lead information may be retained for up to 7 years, transaction records as required by law, and communication records for compliance purposes. You may request deletion of your data by contacting us." },
                { num: 6, title: "Cookies & Tracking", content: "We use essential cookies for website functionality, analytics cookies (Google Analytics) to understand usage, and marketing cookies for relevant advertisements. You can control cookies through your browser settings, though disabling them may affect functionality." },
                { num: 7, title: "Your Privacy Rights", content: "All users have the right to request access to, correction of, or deletion of their personal information, and to opt out of marketing communications. California residents have additional rights under CCPA including the right to know, delete, opt-out, and non-discrimination." },
                { num: 8, title: "Data Security", content: "We implement SSL/TLS encryption, secure data storage with access controls, regular security assessments, and employee training on data protection. While we strive to protect your information, no method of transmission is 100% secure." }
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
                  9
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="bg-[#1B365D] rounded-xl p-8 border border-[#C5A572]/20">
                <p className="text-white/70 mb-6">If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to file a complaint, please contact us:</p>
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

            {/* Footer Note */}
            <motion.div variants={fadeInUp} className="border-t border-[#C5A572]/20 pt-8">
              <p className="text-sm text-white/50 text-center">
                This Privacy Policy is effective as of January 2026 and applies to all information collected through our website and services. We may update this policy from time to time—continued use constitutes acceptance.
              </p>
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
              Your information is safe with us. Get a free, no-obligation cash offer for your property today.
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
                href="/terms"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
              >
                View Terms
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
