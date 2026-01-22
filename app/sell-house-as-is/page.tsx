import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, XCircle, ArrowRight, Shield, DollarSign, Clock, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sell Your House As-Is in Florida | No Repairs Needed | Cash Offer',
  description: 'Sell your Florida house as-is without making any repairs. We buy houses in any condition - damaged, outdated, or ugly. Get a fair cash offer within 24 hours.',
  keywords: 'sell house as-is, sell house without repairs, we buy ugly houses, sell damaged house, sell house any condition Florida',
  openGraph: {
    title: 'Sell Your House As-Is | No Repairs, No Cleaning, No Hassle',
    description: 'We buy houses in any condition throughout Florida. Get a cash offer in 24 hours.',
    type: 'website',
  },
}

export default function SellHouseAsIsPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-cash-sell-offer-buy-real-estate-florida-property.webp"
            alt="Sell house as-is for cash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">No Repairs Required</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Sell Your House <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">As-Is</span> in Florida
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Don't spend another dollar on repairs. We buy houses in any condition - damaged, outdated, or just plain ugly. Get a fair cash offer within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get My As-Is Offer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </div>
        </div>
      </section>

      {/* What As-Is Means */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                What Does "As-Is" Really Mean?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                When we say we buy houses as-is, we mean exactly that. You don't need to fix anything, clean anything, or even empty the house. We purchase properties in their current condition - no matter how bad that condition might be.
              </p>
              <p className="text-white/70 leading-relaxed">
                Many homeowners feel trapped because they can't afford repairs, don't have time for renovations, or simply don't want the hassle. We remove that barrier completely. Your house, your timeline, your terms.
              </p>
            </div>
            <div className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20">
              <h3 className="text-xl font-bold text-white mb-6">We Buy Houses With:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Roof damage",
                  "Foundation issues",
                  "Mold problems",
                  "Fire damage",
                  "Water damage",
                  "Outdated systems",
                  "Code violations",
                  "Pest infestations",
                  "Missing appliances",
                  "Overgrown yards",
                  "Structural problems",
                  "Any condition"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572] mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Selling As-Is vs. Making Repairs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Making Repairs */}
            <div className="bg-[#1B365D]/30 p-8 rounded-2xl border border-red-500/20">
              <div className="flex items-center mb-6">
                <Wrench className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-400">Making Repairs First</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Spend thousands on repairs upfront",
                  "Wait weeks or months for contractors",
                  "Deal with permits and inspections",
                  "Risk repairs not increasing value",
                  "Still compete with updated homes",
                  "Pay 6% agent commission",
                  "Wait 3-6 months to sell"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/60">
                    <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Selling As-Is */}
            <div className="bg-[#1B365D]/30 p-8 rounded-2xl border border-[#C5A572]/30">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-[#C5A572] mr-3" />
                <h3 className="text-xl font-bold text-[#C5A572]">Selling As-Is to Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Spend $0 on repairs",
                  "Get cash offer in 24 hours",
                  "No permits, inspections, or delays",
                  "Know exactly what you'll receive",
                  "No competition with other homes",
                  "Zero fees or commissions",
                  "Close in as little as 7 days"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Homeowners Sell As-Is
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            You're not alone. Here are the most common reasons Florida homeowners choose to sell their house as-is.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Can't Afford Repairs",
                desc: "Major repairs can cost tens of thousands. Why spend money you don't have on a house you want to sell?"
              },
              {
                title: "Inherited Property",
                desc: "Inherited a house in poor condition? We handle the cleanout and repairs so you can focus on what matters."
              },
              {
                title: "Facing Foreclosure",
                desc: "When time is critical, making repairs isn't an option. We can close fast enough to stop foreclosure."
              },
              {
                title: "Relocating Quickly",
                desc: "Job transfer or life change? Sell fast without the hassle of prepping a house from across the country."
              },
              {
                title: "Tired Landlord",
                desc: "Done dealing with a problem rental? We buy tenant-occupied properties without requiring eviction first."
              },
              {
                title: "Simply Want Out",
                desc: "Sometimes you just want to move on without the stress. We make that possible."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1C2E] p-6 rounded-xl border border-[#C5A572]/10">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            How to Sell Your House As-Is
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, step: "1", title: "Contact Us", desc: "Tell us about your property. Any condition, any situation." },
              { icon: DollarSign, step: "2", title: "Get Your Offer", desc: "Receive a fair cash offer within 24 hours. No obligation." },
              { icon: Clock, step: "3", title: "Close & Get Paid", desc: "Pick your closing date. Walk away with cash." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#0F1C2E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B365D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Sell Your House As-Is?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop stressing about repairs. Get a fair cash offer for your house in its current condition - no cleaning, no fixing, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get My As-Is Cash Offer
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
