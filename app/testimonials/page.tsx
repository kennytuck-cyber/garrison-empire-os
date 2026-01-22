import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, Phone, MapPin, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials - What Sellers Say | Garrison Point Solutions',
  description: 'Read real stories from Florida homeowners who sold their houses for cash to Garrison Point Solutions. Fast closings, fair offers, and stress-free experiences.',
  keywords: 'cash home buyer reviews, sell house fast testimonials, Florida home seller reviews, Garrison Point Solutions reviews',
  openGraph: {
    title: 'Seller Testimonials | Garrison Point Solutions',
    description: 'Real stories from Florida homeowners who sold their houses for cash.',
    type: 'website',
  },
}

const testimonials = [
  {
    quote: "I inherited my mother's house and had no idea what to do with it. The house needed major repairs and I live out of state. They made me a fair offer within a day and closed in two weeks. No repairs, no cleaning out the house myself. They handled everything.",
    name: "Sarah M.",
    location: "Fort Myers, FL",
    situation: "Inherited Property",
    rating: 5
  },
  {
    quote: "We were facing foreclosure and running out of time. They moved fast, made us a cash offer that paid off our mortgage with money left over, and closed before the bank deadline. Saved our credit and our sanity.",
    name: "Michael & Jennifer R.",
    location: "Cape Coral, FL",
    situation: "Pre-Foreclosure",
    rating: 5
  },
  {
    quote: "Going through a divorce is hard enough without dealing with selling a house. They bought our property quickly so we could both move on. No showings, no strangers walking through our home. Just a clean, fast sale.",
    name: "David K.",
    location: "Orlando, FL",
    situation: "Divorce Sale",
    rating: 5
  },
  {
    quote: "My rental property had code violations I couldn't afford to fix. Traditional buyers ran away when they saw the violations. These folks made an offer knowing exactly what they were buying. Closed in 10 days.",
    name: "Patricia L.",
    location: "Lakeland, FL",
    situation: "Code Violations",
    rating: 5
  },
  {
    quote: "I'm a tired landlord who was done dealing with problem tenants. They bought the house with the tenants still in it. I didn't have to evict anyone or wait for leases to end. Best decision I made.",
    name: "Robert T.",
    location: "Naples, FL",
    situation: "Tired Landlord",
    rating: 5
  },
  {
    quote: "Hurricane damage left my house in rough shape. Insurance was a nightmare. They made a cash offer as-is and I didn't have to deal with contractors or repairs. Finally got closure after a really tough year.",
    name: "Maria G.",
    location: "Fort Myers Beach, FL",
    situation: "Storm Damage",
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1C2E]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Success Stories</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Sellers Say</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real stories from Florida homeowners who chose a faster, simpler way to sell their properties.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[#1B365D]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "100+", label: "Homes Purchased" },
              { stat: "7-14", label: "Days Average Close" },
              { stat: "$0", label: "Fees & Commissions" },
              { stat: "5.0", label: "Star Rating" }
            ].map((item, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-[#C5A572]">{item.stat}</p>
                <p className="text-white/60 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1B365D]/50 p-8 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all flex flex-col"
              >
                <Quote className="w-10 h-10 text-[#C5A572]/30 mb-4" />
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A572] text-[#C5A572]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#C5A572]/10 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-white/50 text-sm flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </span>
                    <span className="text-[#C5A572] text-xs bg-[#C5A572]/10 px-2 py-1 rounded-full">
                      {testimonial.situation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sellers Choose Us */}
      <section className="py-20 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Why Sellers Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Cash offers within 24 hours",
              "Close in as little as 7 days",
              "No repairs or cleaning required",
              "Zero fees or commissions",
              "We buy houses in any condition",
              "Flexible closing dates",
              "No showings or open houses",
              "Transparent, honest process",
              "Local Florida experts"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0" />
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of Florida homeowners who chose a faster, simpler way to sell. Get your free cash offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center"
            >
              Get My Cash Offer
            </Link>
            <a
              href="tel:2392913444"
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (239) 291-3444
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
