'use client'
import Link from 'next/link'
import { Phone, CheckCircle2, XCircle, ArrowRight, Shield, DollarSign, Clock, Wrench, Home, AlertTriangle, FileText, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SellHouseAsIsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  }

  const conditions = [
    "Roof damage or leaks",
    "Foundation issues",
    "Mold or water damage",
    "Fire or smoke damage",
    "Outdated electrical/plumbing",
    "HVAC not working",
    "Code violations",
    "Pest infestations",
    "Missing appliances",
    "Overgrown landscaping",
    "Structural problems",
    "Hoarder situations"
  ]

  const situations = [
    { title: "Can't Afford Repairs", desc: "Major repairs can cost $10,000-$50,000 or more. Why spend money you don't have on a house you want to sell? We factor repairs into our offer so you don't pay out of pocket.", icon: DollarSign },
    { title: "Inherited Property", desc: "Inherited a house in poor condition from a loved one? We handle the entire process - cleanout, repairs, everything - so you can focus on what matters during a difficult time.", icon: Home },
    { title: "Facing Foreclosure", desc: "When time is critical, making repairs isn't an option. We can close fast enough to stop foreclosure proceedings and protect your credit score.", icon: AlertTriangle },
    { title: "Relocating for Work", desc: "Job transfer or military PCS? Sell fast without the hassle of managing repairs from across the country. We handle everything locally.", icon: Users },
    { title: "Tired Landlord", desc: "Done dealing with a problem rental property? We buy tenant-occupied properties without requiring eviction first. No more landlord headaches.", icon: FileText },
    { title: "Health or Life Changes", desc: "Sometimes life circumstances mean you need to move quickly. Divorce, health issues, or family changes - we make selling simple during difficult transitions.", icon: Shield }
  ]

  return (
    <div className="bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/80 via-[#0F1C2E]/70 to-[#0F1C2E]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24"
        >
          <motion.span variants={fadeInUp} className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            No Repairs Required
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Sell Your House <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">As-Is</span> in Florida
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
            Don't spend another dollar on repairs. We buy houses in any condition - damaged, outdated, or ugly. Get a fair cash offer within 24 hours.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-lg shadow-[#B8860B]/20"
            >
              Get My As-Is Offer <ArrowRight className="w-5 h-5 ml-2" />
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

      {/* What As-Is Means */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                What Does <span className="text-[#C5A572]">"As-Is"</span> Really Mean?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                When we say we buy houses as-is, we mean exactly that. You don't need to fix anything, clean anything, or even empty the house. We purchase properties in their current condition - no matter how bad that condition might be.
              </p>
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                Many homeowners feel trapped because they can't afford repairs, don't have time for renovations, or simply don't want the hassle. We remove that barrier completely.
              </p>
              <div className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/20">
                <p className="text-[#C5A572] font-semibold mb-2">The Bottom Line:</p>
                <p className="text-white/80">Your house. Your timeline. Your terms. We buy it exactly as it stands today.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-[#C5A572] mr-3" />
                We Buy Houses With:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {conditions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center text-white/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/home-cash-sell-offer-buy-real-estate-florida-property.webp')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Skip the Stress of Repairs</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">The average home seller spends $15,000+ on repairs before listing. With us, you spend $0.</p>
          </motion.div>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Selling As-Is vs. <span className="text-[#C5A572]">Making Repairs</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/70 max-w-2xl mx-auto">
              See why smart Florida homeowners choose to sell as-is rather than sinking money into repairs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Making Repairs */}
            <motion.div variants={fadeInUp} className="bg-[#1B365D]/30 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Wrench className="w-10 h-10 text-red-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-red-400">Making Repairs First</h3>
                  <p className="text-red-400/70 text-sm">The Traditional Headache</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Spend $10,000-$50,000+ on repairs upfront",
                  "Wait 4-8 weeks for contractors",
                  "Deal with permits and inspections",
                  "Risk repairs not increasing home value",
                  "Still compete with move-in ready homes",
                  "Pay 6% agent commission on top of repairs",
                  "Wait 3-6 months to actually sell"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/60">
                    <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Selling As-Is */}
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-[#1B365D]/30 p-8 rounded-2xl border border-[#C5A572]/30 hover:border-[#C5A572] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C5A572] to-[#B8860B] text-[#0F1C2E] px-4 py-1 text-xs font-bold uppercase rounded-bl-lg">
                Better Choice
              </div>
              <div className="flex items-center mb-6">
                <DollarSign className="w-10 h-10 text-[#C5A572] mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-[#C5A572]">Selling As-Is to Us</h3>
                  <p className="text-[#C5A572]/70 text-sm">The Stress-Free Solution</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Spend $0 on repairs - we buy as-is",
                  "Get cash offer in 24 hours",
                  "No permits, inspections, or delays",
                  "Know exactly what you'll receive upfront",
                  "No competition - we're a guaranteed buyer",
                  "Zero fees or commissions ever",
                  "Close in as little as 7 days"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Why Homeowners <span className="text-[#C5A572]">Sell As-Is</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto">
              You're not alone. Here are the most common reasons Florida homeowners choose to sell their house as-is.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {situations.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0F1C2E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How to Sell Your House <span className="text-[#C5A572]">As-Is</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/70">
              Three simple steps to a stress-free sale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Phone, step: "1", title: "Contact Us", desc: "Tell us about your property. Any condition, any situation. We'll ask a few questions and schedule a quick visit." },
              { icon: DollarSign, step: "2", title: "Get Your Offer", desc: "Receive a fair, no-obligation cash offer within 24 hours. No hidden fees, no surprises - the offer is what you get." },
              { icon: Clock, step: "3", title: "Close & Get Paid", desc: "Pick your closing date. We handle all paperwork with a local title company. Walk away with cash in as little as 7 days." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#B8860B]/20"
                >
                  <span className="text-3xl font-bold text-[#0F1C2E]">{item.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1B365D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A572] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F1C2E] rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div variants={fadeInUp}>
            <Shield className="w-16 h-16 text-[#C5A572] mx-auto mb-6" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Sell Your House <span className="text-[#C5A572]">As-Is?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop stressing about repairs. Get a fair cash offer for your house in its current condition - no cleaning, no fixing, no hassle.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-lg shadow-[#B8860B]/20"
            >
              Get My As-Is Cash Offer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
