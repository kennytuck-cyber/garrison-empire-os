'use client'
import Link from 'next/link'
import { Phone, FileText, Calendar, DollarSign, CheckCircle2, Clock, ArrowRight, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HowItWorksClient() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  }

  const steps = [
    {
      num: 1,
      title: "Contact Us",
      time: "Takes about 5 minutes",
      desc: "Fill out our simple online form or give us a call. Tell us about your property - the address, condition, and your situation. Don't worry about the condition - we buy houses as-is, no matter what shape they're in.",
      points: ["No obligation to accept any offer", "Your information is kept confidential", "We'll respond within 24 hours"],
      icon: FileText,
      boxTitle: "What We'll Ask",
      boxItems: ["Property address", "General condition", "Your timeline for selling", "Any special circumstances", "Best way to reach you"]
    },
    {
      num: 2,
      title: "Get Your Cash Offer",
      time: "Within 24 hours",
      desc: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours. Our offers are based on current market conditions and comparable sales - no lowball games.",
      points: ["Fair market-based offer", "No hidden fees or deductions", "The offer you see is what you get", "No pressure to accept"],
      icon: DollarSign,
      boxTitle: "How We Calculate Your Offer",
      boxItems: ["Current market value analysis", "Recent comparable sales", "Property condition assessment", "Estimated repair costs", "Local market conditions"]
    },
    {
      num: 3,
      title: "Close & Get Paid",
      time: "As fast as 7 days",
      desc: "Accept our offer and pick your closing date. We work with a reputable local title company to handle all the paperwork. On closing day, you sign the documents and receive your cash. It's that simple.",
      points: ["You choose the closing date", "We pay all closing costs", "Professional title company handles paperwork", "Get paid the same day"],
      icon: Calendar,
      boxTitle: "Closing Timeline Options",
      boxItems: [
        { label: "Rush Closing:", value: "7 days" },
        { label: "Standard Closing:", value: "14-21 days" },
        { label: "Flexible Closing:", value: "Your timeline" }
      ]
    }
  ]

  const faqs = [
    { q: "Do I need to make any repairs?", a: "No. We buy houses in as-is condition. Broken HVAC, roof issues, water damage, outdated everything - we handle it all after closing." },
    { q: "What fees will I pay?", a: "None. There are no real estate commissions, no closing costs for you, and no hidden fees. The offer we make is the amount you receive." },
    { q: "What if I have a mortgage?", a: "No problem. At closing, proceeds first pay off your existing mortgage, and you keep the remainder." },
    { q: "How do you determine the offer price?", a: "We analyze comparable sales, property condition, needed repairs, and current market conditions. Our offers typically range from 70-85% of after-repair value." }
  ]

  return (
    <div className="bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home-cash-offer-real-estate-florida-buy-sell-property.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/80 via-[#0F1C2E]/70 to-[#0F1C2E]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24"
        >
          <motion.span variants={fadeInUp} className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            Our Process
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Works</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Selling your house for cash is simple. No agents, no showings, no repairs, no waiting. Just three easy steps to get cash in hand.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-20 bg-[#1B365D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The <span className="text-[#C5A572]">Difference</span> Is Clear
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/70 max-w-2xl mx-auto">
              Compare months of uncertainty with a straightforward cash sale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-[#0F1C2E]/50 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-red-400">Traditional Sale</h3>
              </div>
              <p className="text-red-400/80 text-sm font-semibold mb-4">3-6 MONTHS (OR LONGER)</p>
              <ul className="space-y-3 text-white/60">
                {[
                  "Find and hire a real estate agent",
                  "Make repairs and stage the home",
                  "List, market, and show to buyers",
                  "Wait for offers and negotiate",
                  "Buyer inspection and financing contingencies",
                  "Pray the deal doesn't fall through",
                  "Pay 6% commission + closing costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-[#0F1C2E]/50 p-8 rounded-2xl border border-[#C5A572]/30 hover:border-[#C5A572] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C5A572] to-[#B8860B] text-[#0F1C2E] px-4 py-1 text-xs font-bold uppercase rounded-bl-lg">
                Our Way
              </div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#C5A572]" />
                <h3 className="text-xl font-bold text-[#C5A572]">Sell to Us</h3>
              </div>
              <p className="text-[#C5A572] text-sm font-semibold mb-4">7-14 DAYS</p>
              <ul className="space-y-3 text-white/80">
                {[
                  "Contact us (5 minutes)",
                  "Get cash offer (24 hours)",
                  "Accept and close (7-14 days)",
                  "No repairs needed",
                  "No showings or open houses",
                  "No financing contingencies",
                  "Zero fees or commissions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/real-estate-cash-buy-sell-offer-florida-home.webp')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Three Simple Steps</h2>
            <p className="text-xl text-white/70">We've eliminated the complexity of selling a house.</p>
          </motion.div>
        </div>
      </div>

      {/* 3 Steps Detail */}
      <section className="py-24 bg-[#0F1C2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div variants={fadeInUp} className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center shadow-lg shadow-[#B8860B]/20"
                    >
                      <span className="text-4xl font-bold text-[#0F1C2E]">{step.num}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                      <p className="text-[#C5A572] font-semibold">{step.time}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6 text-lg">
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.points.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInUp}
                        className="flex items-center text-white/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className={`bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <step.icon className="w-16 h-16 text-[#C5A572] mb-6" />
                  <h4 className="text-xl font-bold text-white mb-4">{step.boxTitle}</h4>
                  {step.num === 3 ? (
                    <ul className="space-y-3 text-white/70">
                      {(step.boxItems as { label: string; value: string }[]).map((item, i) => (
                        <li key={i} className="flex justify-between items-center py-2 border-b border-[#C5A572]/10 last:border-0">
                          <span>{item.label}</span>
                          <span className="text-[#C5A572] font-bold">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2 text-white/70">
                      {(step.boxItems as string[]).map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#C5A572] rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Common <span className="text-[#C5A572]">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white flex items-center">
                  <HelpCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0" />
                  {item.q}
                </h3>
                <p className="text-white/60 mt-2 ml-8">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/faq" className="text-[#C5A572] hover:text-[#D4B896] inline-flex items-center font-semibold">
              View All FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A572] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1B365D] rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Get <span className="text-[#C5A572]">Started?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Take the first step toward a stress-free sale. Get your free, no-obligation cash offer today.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-lg shadow-[#B8860B]/20"
            >
              Get My Cash Offer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
