'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, ArrowRight, Clock, Calendar, Zap, AlertTriangle, DollarSign, Shield, FileText, Home, Timer, Rocket, Building, XCircle, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function SellHouseFast7DaysPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-hidden">
      {/* Hero Section with Zoom Animation */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg"
            alt="Sell house fast in 7 days Florida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/90 via-[#0F1C2E]/80 to-[#0F1C2E]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
          >
            <Zap className="w-5 h-5 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572] tracking-wider">FASTEST CLOSINGS IN FLORIDA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Sell Your House in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">7 Days</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
          >
            When every day counts, we deliver. Get a cash offer within 24 hours and close in as little as one week. No agents, no delays, no stress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-xl shadow-[#B8860B]/20 group"
            >
              Get My Fast Cash Offer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C5A572]" />
              <span className="text-sm">Veteran Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A572]" />
              <span className="text-sm">No Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-[#C5A572]" />
              <span className="text-sm">Close in 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#C5A572]" />
              <span className="text-sm">Cash Offers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Timeline Visual */}
      <section className="py-20 bg-[#1B365D]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your 7-Day Timeline to Freedom
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto">
              From first contact to cash in your hand in just one week
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"
          >
            {[
              { day: "Day 1", action: "Contact Us", icon: Phone },
              { day: "Day 1-2", action: "Get Offer", icon: FileText },
              { day: "Day 2-3", action: "Accept", icon: CheckCircle2 },
              { day: "Day 3-4", action: "Title Work", icon: Shield },
              { day: "Day 5-6", action: "Final Docs", icon: FileText },
              { day: "Day 7", action: "CLOSING", icon: Home },
              { day: "", action: "Get Paid!", icon: DollarSign }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${i === 6 ? 'bg-gradient-to-br from-[#B8860B]/30 to-[#C5A572]/20 border-[#C5A572]/30' : 'bg-[#0F1C2E]/50 border-[#C5A572]/10'} p-4 rounded-xl border cursor-pointer transition-all`}
              >
                <item.icon className={`w-6 h-6 mx-auto mb-2 ${i === 6 ? 'text-[#C5A572]' : 'text-[#C5A572]/70'}`} />
                <p className="text-[#C5A572] text-xs font-bold">{item.day}</p>
                <p className={`text-sm mt-1 ${i === 6 ? 'text-[#C5A572] font-bold' : 'text-white/70'}`}>{item.action}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner Section */}
      <section
        className="relative py-32 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-estate-investment-cash-buyer-buy-sell-florida.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "7", label: "Days Average Close" },
              { number: "24", label: "Hour Offers" },
              { number: "$0", label: "Agent Fees" },
              { number: "100%", label: "Cash Purchases" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="text-5xl md:text-6xl font-bold text-[#C5A572] mb-2">{stat.number}</div>
                <div className="text-white/70 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Speed Matters - Expanded */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Time-Sensitive Situations</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                When You Need to Sell <span className="text-[#C5A572]">Now</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                Sometimes life doesn't give you the luxury of a traditional 3-6 month home sale. Whether you're facing a deadline, dealing with a crisis, or simply ready to move on immediately, we understand that speed is everything.
              </p>
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                Our streamlined process eliminates every unnecessary step that slows down traditional sales. No waiting for buyer financing, no inspection delays, no last-minute renegotiations. Just a straight path from offer to closing.
              </p>

              <div className="bg-[#1B365D]/50 rounded-2xl p-6 border border-[#C5A572]/10">
                <h3 className="text-xl font-bold text-white mb-4">The Traditional Timeline Problem</h3>
                <p className="text-white/60 mb-4">
                  A typical home sale involves finding an agent, listing, showings, negotiations, buyer financing approval, inspections, appraisals, and more. Each step adds weeks or months.
                </p>
                <p className="text-[#C5A572] font-semibold">
                  We compress all of this into just 7 days.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { icon: AlertTriangle, title: "Foreclosure Deadline", desc: "Stop foreclosure before it damages your credit. We can close before your auction date.", color: "from-red-500/20 to-red-500/5" },
                { icon: Rocket, title: "Job Relocation", desc: "PCS orders or new job starting? Don't manage a distant property while building a new life.", color: "from-blue-500/20 to-blue-500/5" },
                { icon: DollarSign, title: "Financial Emergency", desc: "Medical bills, debt, or unexpected expenses? Get cash fast when you need it most.", color: "from-green-500/20 to-green-500/5" },
                { icon: Building, title: "Estate Settlement", desc: "Close the estate and distribute assets quickly. No months of property maintenance.", color: "from-purple-500/20 to-purple-500/5" },
                { icon: Users, title: "Divorce Proceedings", desc: "Divide assets fairly and move forward. No lengthy disputes over the property.", color: "from-orange-500/20 to-orange-500/5" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`bg-gradient-to-r ${item.color} backdrop-blur-sm p-5 rounded-xl border border-[#C5A572]/10 flex items-start space-x-4 cursor-pointer transition-all`}
                >
                  <div className="w-12 h-12 bg-[#C5A572]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Close So Fast - Expanded */}
      <section className="py-24 bg-gradient-to-b from-[#1B365D]/50 to-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              How We Close in 7 Days
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 max-w-3xl mx-auto text-lg">
              Traditional sales take months because of financing, inspections, and contingencies. We eliminate all of that while still ensuring a professional, secure transaction.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: DollarSign,
                title: "100% Cash Purchase",
                desc: "No waiting for bank approval or mortgage underwriting. We have the funds ready and verified before we even make an offer.",
                detail: "Our capital partners ensure immediate liquidity"
              },
              {
                icon: XCircle,
                title: "No Inspections Required",
                desc: "We buy as-is. No inspection contingencies means no delays, no repair negotiations, no deal falling through.",
                detail: "We assess value based on our expertise"
              },
              {
                icon: FileText,
                title: "Title Company Ready",
                desc: "We work with title companies experienced in fast closings. They prioritize our deals because they know we close.",
                detail: "Pre-established relationships matter"
              },
              {
                icon: Shield,
                title: "Zero Contingencies",
                desc: "Our offers are clean with no financing, appraisal, or sale contingencies. When we say we'll close, we close.",
                detail: "A handshake deal you can trust"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/10 group hover:border-[#C5A572]/30 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#0F1C2E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 mb-4">{item.desc}</p>
                <p className="text-[#C5A572] text-sm font-medium">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speed Comparison - Enhanced */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Time Comparison</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                See the Difference
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                While others keep you waiting, we get you moving
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { method: "Traditional Sale with Agent", time: "90-180 days", color: "red", width: "100%" },
                { method: "FSBO (For Sale By Owner)", time: "60-120 days", color: "orange", width: "75%" },
                { method: "iBuyer (Opendoor, etc.)", time: "30-60 days", color: "yellow", width: "40%" },
                { method: "Sell to Garrison Point", time: "7-14 days", color: "green", width: "10%" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1B365D]/50 p-5 rounded-xl overflow-hidden relative group"
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-white font-medium text-lg">{item.method}</span>
                    <span className={`font-bold text-xl ${
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'yellow' ? 'text-yellow-400' :
                      item.color === 'orange' ? 'text-orange-400' :
                      'text-red-400'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`absolute bottom-0 left-0 h-1 ${
                      item.color === 'green' ? 'bg-green-400' :
                      item.color === 'yellow' ? 'bg-yellow-400' :
                      item.color === 'orange' ? 'bg-orange-400' :
                      'bg-red-400'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 bg-green-400/10 border border-green-400/20 rounded-2xl p-6 text-center">
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">10x Faster Than Traditional Sales</h3>
              <p className="text-white/60">That's not marketing speak – it's math. 7 days vs 90+ days.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Need - Enhanced */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span variants={fadeInUp} className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">
              Simple Requirements
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              What You Need for a 7-Day Close
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 mb-12 max-w-2xl mx-auto text-lg">
              We've simplified the process to just the essentials
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 text-left mb-12">
              {[
                { item: "Proof of ownership (deed or mortgage statement)", icon: FileText },
                { item: "Government-issued ID", icon: Shield },
                { item: "Property access for brief walkthrough", icon: Home },
                { item: "Willingness to sign closing documents", icon: CheckCircle2 }
              ].map((req, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 bg-[#0F1C2E] p-5 rounded-xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all"
                >
                  <div className="w-12 h-12 bg-[#C5A572]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <span className="text-white text-lg">{req.item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0F1C2E] rounded-2xl p-8 border border-[#C5A572]/10">
              <h3 className="text-2xl font-bold text-white mb-4">What You DON'T Need</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {["Repairs", "Staging", "Showings", "Cleaning", "Landscaping", "Photography"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-white/60">
                    <XCircle className="w-5 h-5 text-red-400/60" />
                    <span>No {item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Florida-Specific Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: "Fort Myers", time: "7 Days" },
                  { city: "Cape Coral", time: "7 Days" },
                  { city: "Naples", time: "7 Days" },
                  { city: "Orlando", time: "10 Days" },
                  { city: "Lakeland", time: "10 Days" },
                  { city: "South Florida", time: "10-14 Days" }
                ].map((area, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1B365D]/50 p-4 rounded-xl border border-[#C5A572]/10 text-center"
                  >
                    <h4 className="text-white font-bold">{area.city}</h4>
                    <p className="text-[#C5A572] text-sm">{area.time}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Coverage Area</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                Fast Closings Across <span className="text-[#C5A572]">Florida</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                We specialize in Southwest Florida where we can close the fastest, but we buy houses throughout the state. Our established relationships with title companies and local expertise means faster closings no matter where your property is located.
              </p>
              <p className="text-white/70 leading-relaxed">
                Whether you're in Fort Myers, Cape Coral, Naples, Orlando, Lakeland, or anywhere in South Florida, we can help you close quickly and get cash in your hands.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 to-[#C5A572]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A572]/5 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div variants={fadeInUp}>
            <Clock className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Close in 7 Days?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Don't wait months to sell your house. Contact us today and you could have cash in hand within a week. Time is money – let us save you both.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-xl shadow-[#B8860B]/20 group"
            >
              Start My 7-Day Sale
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-12 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-white/50 text-sm">
            Available 7 days a week • Same-day property evaluations • Flexible closing dates
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}
