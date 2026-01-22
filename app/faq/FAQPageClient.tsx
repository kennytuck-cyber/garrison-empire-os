'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone, HelpCircle, DollarSign, Clock, Home, FileText, Shield, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// FAQ Data organized by category
const faqCategories = [
  {
    name: "The Offer Process",
    icon: DollarSign,
    faqs: [
      { question: "How do you determine your offer price?", answer: "We evaluate several factors: the property's current condition, needed repairs, recent comparable sales in your area, and current market conditions. Our offers typically range from 70-85% of the after-repair value, minus estimated repair costs. We use a transparent formula so you understand exactly how we arrived at our number." },
      { question: "Do I have to accept your offer?", answer: "Absolutely not. Our offers are completely no-obligation. You are free to accept, counter, or decline. There is no pressure and no cost to you for receiving an offer. Many sellers use our offer as a comparison point when deciding how to sell their home." },
      { question: "Will I have to pay any fees or commissions?", answer: "No. There are no real estate agent commissions (typically 6%), no closing costs for you to pay, and no hidden fees. The price we offer is the amount you receive at closing. We cover all standard closing costs, title fees, and transfer taxes." },
      { question: "How is this different from listing with a realtor?", answer: "When you list with a realtor, you pay 6% commission, closing costs, and often have to make repairs. It takes 3-6 months on average, with no guarantee of a sale. When you sell to us, there are zero fees, zero repairs needed, and we close in days, not months. You have certainty instead of hoping the right buyer comes along." }
    ]
  },
  {
    name: "Timeline & Closing",
    icon: Clock,
    faqs: [
      { question: "How fast can you close?", answer: "We can close in as little as 7 days if needed, though 10-14 days is more typical to allow time for title work. If you need more time—perhaps to find a new place or coordinate a move—we are flexible and can work around your schedule. You pick the closing date." },
      { question: "What happens at closing?", answer: "Closing is simple. You'll meet with a title company representative (or we can arrange a mobile notary to come to you). You'll sign a few documents, hand over the keys, and receive your payment—typically via wire transfer or cashier's check, whichever you prefer." },
      { question: "Can I stay in the house after closing?", answer: "Yes, we can often arrange a rent-back or delayed move-out if you need extra time. We understand that moving takes coordination. Let us know your situation and we'll work with you." }
    ]
  },
  {
    name: "Property Conditions",
    icon: Home,
    faqs: [
      { question: "Do I need to make any repairs before selling?", answer: "No. We buy houses in as-is condition, regardless of needed repairs. Broken HVAC, roof issues, water damage, fire damage, foundation problems, outdated everything—we handle it all. Don't spend money fixing things; let us buy it as-is." },
      { question: "What types of houses do you buy?", answer: "We buy single-family homes, condos, townhouses, duplexes, and small multi-family properties throughout Southwest and Central Florida. Any condition, any situation—from move-in ready to major fixer-uppers, from inherited properties to investor liquidations." },
      { question: "Do you buy houses with tenants?", answer: "Yes. We purchase tenant-occupied properties. You don't need to evict anyone or wait for leases to expire. We handle the tenant situation after closing and assume all landlord responsibilities." },
      { question: "What if my house has code violations or liens?", answer: "We buy properties with code violations, liens, and other title issues. In many cases, we can negotiate with code enforcement to reduce fines. Our title company handles lien resolution at closing. These issues don't scare us—we deal with them regularly." }
    ]
  },
  {
    name: "Special Situations",
    icon: FileText,
    faqs: [
      { question: "What if I still have a mortgage on the property?", answer: "That is fine—most sellers do. At closing, the proceeds from the sale first pay off your existing mortgage (including any second mortgages or HELOCs), and you keep the remainder. Our title company handles all the payoff coordination." },
      { question: "Can I sell if I'm in pre-foreclosure?", answer: "Yes, and time is critical. Selling before foreclosure completes can protect your credit and preserve any equity you have in the property. We can often close fast enough to stop the foreclosure process entirely. The sooner you reach out, the more options we have." },
      { question: "Can I sell an inherited property?", answer: "Yes, we work with many families settling estates. If you've inherited a property through probate, we can help navigate the timeline and requirements. We buy inherited homes in any condition, even if they've been sitting vacant." },
      { question: "What about selling during a divorce?", answer: "We help couples in divorce sell their shared property quickly and fairly. A fast cash sale can simplify asset division and help both parties move forward without months of listing and showing the home." }
    ]
  },
  {
    name: "Trust & Credibility",
    icon: Shield,
    faqs: [
      { question: "Why should I trust you?", answer: "Garrison Point Solutions is a veteran-owned company built on 23 years of Coast Guard service. We bring military integrity, discipline, and transparency to every transaction. We're not a faceless national company—we're local Floridians who stake our reputation on every deal." },
      { question: "Are you legitimate home buyers?", answer: "Yes. We are a Florida LLC operating legally as a real estate investment company. We buy properties for our own portfolio and to renovate. We're not wholesalers who assign contracts—when we make an offer, we have the funds to close." },
      { question: "What if I change my mind after accepting?", answer: "We include a due diligence period in our contracts during which you can cancel for any reason. Once we're past that period, both parties are committed, but we'll never pressure you. Selling your home is a big decision, and we want you to be comfortable with it." }
    ]
  }
]

// Flatten FAQs for schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs)

export default function FAQPageClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenFaq(openFaq === key ? null : key)
  }

  return (
    <>
      {/* FAQ Schema Markup for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0F1C2E] text-white overflow-hidden">
        {/* Hero Section with Zoom Animation */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="/images/frequently-asked-questions-cash-home-buyer.jpg"
              alt="Frequently asked questions about cash home buyers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/90 via-[#0F1C2E]/80 to-[#0F1C2E]" />
          </motion.div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
            >
              <HelpCircle className="w-5 h-5 text-[#C5A572]" />
              <span className="text-sm font-bold text-[#C5A572] tracking-wider">COMMON QUESTIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
            >
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
            >
              Get answers to the most common questions about selling your house for cash in Florida. We believe in transparency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#faqs" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center group">
                Browse Questions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:2392913444"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ask Us Directly
              </a>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-[#1B365D]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "15+", label: "Questions Answered" },
                { number: "5", label: "Topic Categories" },
                { number: "24/7", label: "Phone Support" },
                { number: "100%", label: "Transparency" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <div className="text-4xl md:text-5xl font-bold text-[#C5A572] mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12 bg-[#0F1C2E] sticky top-24 z-40 border-b border-[#C5A572]/10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {faqCategories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveCategory(activeCategory === category.name ? null : category.name)
                    document.getElementById(`category-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                    activeCategory === category.name
                      ? 'bg-[#C5A572] border-[#C5A572] text-[#0F1C2E]'
                      : 'bg-[#1B365D]/50 border-[#C5A572]/20 text-white/80 hover:border-[#C5A572]/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section id="faqs" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                id={`category-${categoryIndex}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="mb-16 scroll-mt-48"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[#0F1C2E]" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{category.name}</h2>
                    <p className="text-white/50 text-sm">{category.faqs.length} questions</p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openFaq === `${categoryIndex}-${faqIndex}`
                    return (
                      <motion.div
                        key={faqIndex}
                        variants={fadeInUp}
                        className={`bg-[#1B365D]/50 border rounded-xl overflow-hidden transition-all ${
                          isOpen ? 'border-[#C5A572]/50' : 'border-[#C5A572]/10 hover:border-[#C5A572]/30'
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                        >
                          <h3 className="text-lg font-bold text-white pr-8 group-hover:text-[#C5A572] transition-colors">
                            {faq.question}
                          </h3>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            isOpen ? 'bg-[#C5A572] rotate-180' : 'bg-[#C5A572]/20'
                          }`}>
                            <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#0F1C2E]' : 'text-[#C5A572]'}`} />
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-6 pb-6 text-white/80 leading-relaxed border-t border-[#C5A572]/10 pt-4">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Parallax Banner */}
        <section
          className="relative py-32 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/florida-home-real-estate-investment-sell.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#0F1C2E]/85" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <MessageCircle className="w-16 h-16 text-[#C5A572] mx-auto mb-6" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Don't See Your Question?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Every situation is unique. We're happy to answer any specific questions you have about your property or circumstances.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group"
                >
                  Send Us a Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:2392913444"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (239) 291-3444
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Our Promise</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Transparency Is Our Foundation
                </h2>
                <p className="text-white/60 max-w-3xl mx-auto text-lg">
                  We believe you deserve to understand every aspect of selling your home. No hidden fees, no surprises, no pressure.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: CheckCircle2,
                    title: "No Obligation Offers",
                    desc: "Get a cash offer with zero commitment. Take your time to decide—we never pressure you."
                  },
                  {
                    icon: Shield,
                    title: "Veteran-Owned Integrity",
                    desc: "23 years of military service taught us that trust is earned through actions, not words."
                  },
                  {
                    icon: DollarSign,
                    title: "Transparent Pricing",
                    desc: "We explain exactly how we calculate our offer. No mystery formulas or hidden deductions."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/10 text-center group hover:border-[#C5A572]/30 transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-[#0F1C2E]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
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
              <HelpCircle className="w-16 h-16 text-[#C5A572] mx-auto mb-8" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Get Started?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Now that your questions are answered, take the next step. Get a free, no-obligation cash offer for your Florida property today.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-xl shadow-[#B8860B]/20 group"
              >
                Get My Cash Offer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2392913444"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-12 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (239) 291-3444
              </a>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-white/50 text-sm">
              No commitment required • Same-day response • 100% free consultation
            </motion.p>
          </motion.div>
        </section>
      </div>
    </>
  )
}
