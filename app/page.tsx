'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, DollarSign, Clock, Shield, MapPin, Star, Heart } from 'lucide-react'
import LeadConcierge from '@/components/LeadConcierge'

export default function Home() {
  return (
    <main className="bg-[#F5F7FA]">
      
      {/* --------------------------------------------------------------------------------
         1. HERO SECTION
         -------------------------------------------------------------------------------- */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/florida-home-cash-real-estate-sell-buy-fas-2.jpg" 
            alt="Sell Your Florida House Fast for Cash" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C2E]/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#C5A572]/20 border border-[#C5A572] backdrop-blur-sm animate-fade-in-up">
            <span className="text-[#C5A572] font-semibold tracking-wide uppercase text-xs">Veteran Owned & Operated</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Sell Your Florida House <br/>
            <span className="text-[#C5A572]">Fast & For Cash</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The reliable, military-grade way to sell your home. No fees. No repairs. No nonsense.
            <br/><span className="font-semibold text-[#C5A572]">Fair cash offers in 24 hours.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LeadConcierge />
            <a href="tel:2392913444" className="text-white font-semibold hover:text-[#C5A572] transition-colors flex items-center gap-2">
              <span className="bg-[#C5A572]/20 p-2 rounded-full border border-[#C5A572]/50">
                <Shield className="w-5 h-5 text-[#C5A572]" />
              </span>
              Speak to a Veteran Now
            </a>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BAR */}
      <div className="bg-[#0F1C2E] py-8 border-b border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="p-3 rounded-full bg-[#C5A572]/10 mb-3 group-hover:bg-[#C5A572]/20 transition-colors">
                <DollarSign className="text-[#C5A572] w-6 h-6" />
              </div>
              <span className="text-white font-medium">Cash Offer in 24h</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 rounded-full bg-[#C5A572]/10 mb-3 group-hover:bg-[#C5A572]/20 transition-colors">
                <Clock className="text-[#C5A572] w-6 h-6" />
              </div>
              <span className="text-white font-medium">Close in 7 Days</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 rounded-full bg-[#C5A572]/10 mb-3 group-hover:bg-[#C5A572]/20 transition-colors">
                <Shield className="text-[#C5A572] w-6 h-6" />
              </div>
              <span className="text-white font-medium">Veteran Owned</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 rounded-full bg-[#C5A572]/10 mb-3 group-hover:bg-[#C5A572]/20 transition-colors">
                <CheckCircle2 className="text-[#C5A572] w-6 h-6" />
              </div>
              <span className="text-white font-medium">No Repairs Needed</span>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------
         2. ABOUT SECTION
         -------------------------------------------------------------------------------- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C5A572] rounded-lg transform -rotate-2 opacity-20"></div>
              <img 
                src="/images/military-veteran-real-estate-florida-cash-buy-sell-pride-patriot-honest-trust.jpg" 
                alt="Retired Coast Guard Veteran - Garrison Point Solutions" 
                className="relative rounded-lg shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white"
              />
            </div>
            <div>
              <h2 className="text-[#C5A572] font-bold tracking-wide uppercase text-sm mb-2">About Garrison Point Solutions</h2>
              <h3 className="text-4xl font-bold text-[#0F1C2E] mb-6">Service. Integrity. Speed.</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                I'm Kenneth Tucker, a retired Coast Guard veteran with 23 years of service. I founded Garrison Point Solutions on the same core values that guided my military career: <span className="font-bold text-[#0F1C2E]">Honor, Respect, and Devotion to Duty.</span>
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We are not a faceless national chain. We are a local, veteran-owned business committed to helping Florida homeowners navigate difficult transitions—whether it's foreclosure, probate, or simply a need for speed—with dignity and transparency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F5F7FA] p-4 rounded-lg border-l-4 border-[#C5A572]">
                  <p className="font-bold text-[#0F1C2E] text-lg">100% Free</p>
                  <p className="text-sm text-gray-500">No commissions or hidden fees.</p>
                </div>
                <div className="bg-[#F5F7FA] p-4 rounded-lg border-l-4 border-[#C5A572]">
                  <p className="font-bold text-[#0F1C2E] text-lg">As-Is Buying</p>
                  <p className="text-sm text-gray-500">Leave the junk, we handle it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------
         3. CORE VALUES (NEW PLACEMENT)
         -------------------------------------------------------------------------------- */}
      <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A572]/5 skew-x-12 transform origin-top-right" />
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#C5A572] font-bold tracking-wide uppercase text-sm mb-2">The Garrison Standard</h2>
              <h3 className="text-4xl font-bold text-white mb-6">We Don't Just Buy Houses. We Solve Problems.</h3>
              <p className="text-gray-300 mb-6 text-lg">
                In the Coast Guard, there are no excuses—only results. We bring that same level of discipline to real estate. When we make an offer, it’s rock solid. When we say we’ll close, we close.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="text-[#C5A572] w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Transparent Communication</strong>
                    <span className="text-gray-400">You will never be left in the dark. We explain every step clearly.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="text-[#C5A572] w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">People Over Profit</strong>
                    <span className="text-gray-400">If selling to us isn't your best option, we will honestly tell you so.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
               {/* NEW IMAGE PLACEMENT: Medals/Shadowbox */}
              <img 
                src="/images/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg" 
                alt="Military Service Medals and Values" 
                className="rounded-lg shadow-2xl border border-[#C5A572]/30 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------
         4. MARKETS SECTION
         -------------------------------------------------------------------------------- */}
      <section id="markets" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F1C2E] mb-4">Prime Markets We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From the Gulf Coast to the Atlantic, we buy properties across Florida's key regions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Market 1: Central Florida */}
            <Link href="/sell-house-fast-orlando" className="group relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer block">
              <div className="absolute inset-0">
                <img 
                  src="/images/orlando-central-flroida-real-estate-cash-sell-buy.jpg" 
                  alt="Sell House Fast Orlando" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-[#C5A572] w-5 h-5" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#C5A572] transition-colors">Central Florida</h3>
                </div>
                <p className="text-white/80 mb-4 font-light">Orlando, Lakeland, Kissimmee & Winter Park</p>
                <span className="inline-flex items-center text-[#C5A572] font-semibold text-sm uppercase tracking-wider">
                  View Market <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Market 2: Southwest Florida */}
            <Link href="/sell-house-fast-fort-myers" className="group relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer block">
              <div className="absolute inset-0">
                <img 
                  src="/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg" 
                  alt="Sell House Fast Fort Myers" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-[#C5A572] w-5 h-5" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#C5A572] transition-colors">Southwest Florida</h3>
                </div>
                <p className="text-white/80 mb-4 font-light">Fort Myers, Cape Coral, Naples & Sarasota</p>
                <span className="inline-flex items-center text-[#C5A572] font-semibold text-sm uppercase tracking-wider">
                  View Market <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Market 3: South Florida */}
            <Link href="/sell-house-fast-miami" className="group relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer block">
              <div className="absolute inset-0">
                <img 
                  src="/images/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg" 
                  alt="Sell House Fast Miami" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-[#C5A572] w-5 h-5" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#C5A572] transition-colors">South Florida</h3>
                </div>
                <p className="text-white/80 mb-4 font-light">Miami, Fort Lauderdale, West Palm & Keys</p>
                <span className="inline-flex items-center text-[#C5A572] font-semibold text-sm uppercase tracking-wider">
                  View Market <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------
         5. MISSION BANNER (NEW PLACEMENT)
         -------------------------------------------------------------------------------- */}
      <div className="relative py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/military-vetean-pride-real-estate-florida-trsut-patriotJPG.JPG')" }}>
        <div className="absolute inset-0 bg-[#0F1C2E]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-[#C5A572] mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 italic font-serif">"Semper Paratus"</h3>
          <p className="text-xl text-white/90">Always Ready to serve our community with the same dedication we served our country.</p>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------
         6. SITUATION CARDS SECTION
         -------------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F1C2E] mb-4">We Help With Any Situation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Life happens. When it does, we provide a fast, respectful, and reliable exit strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Pre-Foreclosure */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/deal-forclosure-cash-closing-title-florida--2.webp" 
                  alt="Stop Foreclosure Florida" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">Facing Foreclosure?</h3>
                <p className="text-gray-600 mb-4">Don't let the bank take your future. Sell fast to pay off debts and protect your credit score.</p>
                <Link href="/foreclosure-help" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: HOA/Code Violations */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/code-violations-home-sell-cash-offer-florida-hoa.jpg" 
                  alt="Sell House with Code Violations" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">HOA Liens or Code Violations</h3>
                <p className="text-gray-600 mb-4">Fines piling up? We buy properties with liens, open permits, and violations—so you don't have to pay them.</p>
                <Link href="/code-violations" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Military PCS */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg" 
                  alt="Military PCS Home Sale" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">Military PCS Orders</h3>
                <p className="text-gray-600 mb-4">Receiving orders to move? We understand the timeline. Sell your house before you deploy or transfer.</p>
                <Link href="/military-relocation" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 4: Inherited Property */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/inheritance-estate-family-inherited-probate-cash-offer.jpg" 
                  alt="Sell Inherited House Florida" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">Inherited Property / Probate</h3>
                <p className="text-gray-600 mb-4">Navigating probate is hard enough. We buy inherited homes "as-is" so you can focus on family.</p>
                <Link href="/probate-help" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 5: Divorce */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg" 
                  alt="Sell House During Divorce" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">Divorce Settlements</h3>
                <p className="text-gray-600 mb-4">Liquidate assets quickly and fairly. We provide a neutral third-party purchase to help you move on.</p>
                <Link href="/divorce-sale" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 6: Hurricane/Damage */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG" 
                  alt="Sell Damaged House Florida" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F1C2E] mb-2">Hurricane or Flood Damage</h3>
                <p className="text-gray-600 mb-4">Insurance nightmare? Wrecked property? We buy damaged homes for cash—no repairs required.</p>
                <Link href="/sell-damaged-house" className="text-[#C5A572] font-semibold hover:text-[#0F1C2E] flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------
         7. RESOURCES / BLOG GRID
         -------------------------------------------------------------------------------- */}
      <section className="py-24 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Resources for Homeowners</h2>
              <p className="text-gray-400 text-lg">Expert advice to help you make the right decision.</p>
            </div>
            <Link href="/blog" className="hidden sm:flex text-[#C5A572] hover:text-white transition-colors items-center font-semibold">
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <Link href="/blog/sell-inherited-house-florida" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/home-inheritance-inherited-estate-probate-family.jpg" alt="Inherited House Guide" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">How to Sell an Inherited House in Florida: A Complete Guide</h3>
              </div>
            </Link>

            {/* Post 2 */}
            <Link href="/blog/pre-foreclosure-options" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/deal-forclosure-cash-closing-title-florida--2.webp" alt="Pre-Foreclosure Options" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">Selling a House in Pre-Foreclosure: 5 Critical Options</h3>
              </div>
            </Link>

            {/* Post 3 */}
            <Link href="/blog/divorce-home-sale" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg" alt="Divorce Home Sale" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">Selling a House During Divorce in Florida</h3>
              </div>
            </Link>
            
            {/* Link to show more if needed, or fill with remaining items */}
             <Link href="/blog/pre-foreclosure-vs-foreclosure" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp" alt="Pre-Foreclosure vs Foreclosure" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">Pre-Foreclosure vs Foreclosure: Know the Difference</h3>
              </div>
            </Link>

            <Link href="/blog/cash-buyers-vs-agents" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/cash-offer-home-selling-buying-real-estate-florida.jpg" alt="Cash Buyers vs Agents" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">Cash Home Buyers vs Real Estate Agents</h3>
              </div>
            </Link>

            <Link href="/blog/hidden-costs-realtor" className="group block bg-[#1a2b42] rounded-lg overflow-hidden hover:bg-[#233550] transition-colors">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/home-cash-offer-real-estate-florida-buy-sell-property.webp" alt="Hidden Costs Realtor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5A572]">The Hidden Costs of Selling Through a Realtor</h3>
              </div>
            </Link>

          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex text-[#C5A572] hover:text-white transition-colors items-center font-semibold">
              View All 11 Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------
         8. FINAL CTA SECTION (NEW PLACEMENT)
         -------------------------------------------------------------------------------- */}
      <section className="relative py-24 flex items-center justify-center">
        {/* Background Image: Tree-lined Street */}
        <div className="absolute inset-0">
          <img 
            src="/images/central-florida-home-sell-buy-cash-offer.jpg" 
            alt="Central Florida Neighborhood" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#C5A572]/90 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Your Fair Cash Offer?</h2>
          <p className="text-white/90 text-xl mb-10 font-medium">No obligation. No fees. Just a straightforward conversation with a veteran who cares.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0F1C2E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a2b42] transition-colors shadow-2xl border border-white/20">
              Get My Cash Offer
            </button>
            <a href="tel:2392913444" className="bg-white text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-2xl flex items-center justify-center">
              Call Now: (239) 291-3444
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
