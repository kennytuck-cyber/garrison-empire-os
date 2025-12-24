'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Clock, Users, Target, Phone, Mail, MapPin, CheckCircle2, Star, Home, Building, HeartHandshake, ChevronDown, Play } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    timeline: ''
  })

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0F1C2E]/95 backdrop-blur-md z-50 border-b border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Garrison Point Solutions" 
                className="h-20 w-auto"
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#how-it-works" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">
                How It Works
              </Link>
              <Link href="#about" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">
                About
              </Link>
              <Link href="#markets" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">
                Markets
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <a href="tel:2397383444" className="hidden md:flex items-center text-[#C5A572] hover:text-[#D4B896] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(239) 738-3444</span>
              </a>
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-6 py-3 rounded font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-lg shadow-[#B8860B]/20 text-sm tracking-wide uppercase"
              >
                Get Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-[#0F1C2E]/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#1B365D]/50 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-[#C5A572]" />
                <span className="text-sm font-semibold text-[#C5A572] tracking-wide">23-YEAR COAST GUARD VETERAN</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
                Sell Your Florida
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">
                  Property Fast
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Fair cash offers within 24 hours. No repairs. No fees. No commissions. 
                Close on <span className="text-white font-semibold">your</span> timeline.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  'Close in 7-14 Days',
                  'As-Is Condition',
                  'Zero Fees',
                  'Cash Guarantee'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#C5A572]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572]" />
                    </div>
                    <span className="text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact" 
                  className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30"
                >
                  Get My Cash Offer
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:2397383444" 
                  className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                  <Phone className="mr-3 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-[#1B365D]/30 backdrop-blur-md border border-[#C5A572]/20 rounded-2xl p-10 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Why Property Owners Choose Us</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">24-Hour Offers</h4>
                      <p className="text-white/60">Get a fair cash offer within one business day</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">Military Integrity</h4>
                      <p className="text-white/60">23 years of Coast Guard discipline in every deal</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="w-7 h-7 text-[#0F1C2E]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">No Hassle Closing</h4>
                      <p className="text-white/60">We handle everything - just show up and get paid</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-10 pt-8 border-t border-[#C5A572]/20">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C5A572] text-[#C5A572]" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-3">
                    "Professional from start to finish. They made selling my inherited property stress-free."
                  </p>
                  <p className="text-[#C5A572] font-semibold">— Recent Seller, Fort Myers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#C5A572]" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1B365D] py-6 border-y border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center space-x-2 text-white/60">
              <Shield className="w-5 h-5 text-[#C5A572]" />
              <span className="font-medium">Veteran Owned</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <CheckCircle2 className="w-5 h-5 text-[#C5A572]" />
              <span className="font-medium">BBB Accredited</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Star className="w-5 h-5 text-[#C5A572]" />
              <span className="font-medium">5-Star Reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Building className="w-5 h-5 text-[#C5A572]" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-[#0F1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Three Simple Steps to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Your Cash Offer</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We've eliminated the complexity. No agents, no showings, no repairs, no waiting.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">1</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Contact Us
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  Fill out our simple form or call us directly. Tell us about your property — 
                  any condition, any situation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">2</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Get Your Offer
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  Receive a fair, no-obligation cash offer within 24 hours. 
                  Transparent pricing with no hidden fees.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">3</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Close & Get Paid
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  Pick your closing date. We handle all the paperwork. 
                  Walk away with cash in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,
                }}
              />
              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20 shadow-2xl max-w-sm">
                <div className="text-5xl font-serif font-bold text-[#C5A572] mb-2">23+</div>
                <div className="text-xl font-semibold text-white mb-1">Years of Service</div>
                <p className="text-white/60">United States Coast Guard veteran bringing military precision to real estate.</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                The Garrison Point
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Difference</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Founded by a 23-year Coast Guard veteran, Garrison Point Solutions brings 
                military discipline, unwavering integrity, and strategic precision to every 
                real estate transaction. We're not just buying houses — we're solving problems 
                and creating opportunities.
              </p>

              {/* Values */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <Shield className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Lighthouse Standard</h3>
                    <p className="text-white/60">Unwavering integrity guides every decision. You'll always know exactly where you stand.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <Target className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Surgical Precision</h3>
                    <p className="text-white/60">Military-trained attention to detail ensures nothing falls through the cracks.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <Users className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Concierge Service</h3>
                    <p className="text-white/60">White-glove treatment from first contact to closing day. We handle everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-24 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Florida Markets We Serve
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Deep expertise in Florida's most dynamic real estate markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Central Florida */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Central Florida</h3>
                <p className="text-white/70 mb-4">Orlando • Lakeland • Polk County • Osceola • Winter Haven</p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Market</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Southwest Florida */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Southwest Florida</h3>
                <p className="text-white/70 mb-4">Fort Myers • Cape Coral • Naples • Lee County • Collier</p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Market</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* South Florida */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-3">South Florida</h3>
                <p className="text-white/70 mb-4">Miami • Fort Lauderdale • Palm Beach • Broward • Dade</p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Market</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situations We Help */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">We Can Help</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Every Situation Has a Solution
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Whatever circumstances you're facing, we provide fair, fast solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Inherited Property',
              'Pre-Foreclosure',
              'Divorce',
              'Tired Landlord',
              'Code Violations',
              'Vacant Property',
              'Behind on Payments',
              'Relocating',
              'Downsizing',
              'Major Repairs Needed',
              'Problem Tenants',
              'Any Situation'
            ].map((situation, index) => (
              <div 
                key={index}
                className="bg-[#0F1C2E] border border-[#C5A572]/10 hover:border-[#C5A572]/40 rounded-xl p-5 text-center hover:bg-[#1B365D]/50 transition-all cursor-pointer group"
              >
                <CheckCircle2 className="w-6 h-6 text-[#C5A572] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 font-medium">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-[#0F1C2E] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Get Started</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                Ready for Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Cash Offer?</span>
              </h2>
              <p className="text-lg text-white/60 mb-10">
                Take the first step toward a stress-free sale. Fill out the form and we'll 
                contact you within 24 hours with a fair, no-obligation cash offer.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <a href="tel:2397383444" className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Us Directly</p>
                    <p className="text-xl font-bold text-white">(239) 738-3444</p>
                  </div>
                </a>

                <a href="mailto:info@garrisonpointsolutions.com" className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <p className="text-xl font-bold text-white">info@garrisonpointsolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20">
                    <MapPin className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Office Location</p>
                    <p className="text-xl font-bold text-white">Fort Myers, Florida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-[#1B365D]/50 backdrop-blur-sm border border-[#C5A572]/20 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Get Your Cash Offer</h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-5 py-4 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone *</label>
                    <input
                      type="tel"
                      placeholder="(239) 555-0123"
                      className="w-full px-5 py-4 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      className="w-full px-5 py-4 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Property Address *</label>
                  <input
                    type="text"
                    placeholder="123 Main St, City, FL 33XXX"
                    className="w-full px-5 py-4 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-xl text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Timeline to Sell</label>
                  <select className="w-full px-5 py-4 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-xl text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all appearance-none">
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP - Within 2 weeks</option>
                    <option value="30">Within 30 days</option>
                    <option value="60">30-60 days</option>
                    <option value="flexible">Flexible / Exploring options</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-5 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-xl shadow-[#B8860B]/25 flex items-center justify-center mt-8"
                >
                  Get My Cash Offer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <p className="text-center text-white/40 text-sm pt-4">
                  100% confidential. No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1420] border-t border-[#C5A572]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <img 
                src="/logo.jpg" 
                alt="Garrison Point Solutions" 
                className="h-24 w-auto mb-6"
              />
              <p className="text-white/60 mb-6 max-w-md">
                Veteran-owned real estate solutions company. We buy houses in any condition, 
                providing fair cash offers and stress-free closings throughout Florida.
              </p>
              <div className="flex items-center space-x-2 text-[#C5A572]">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Veteran Owned & Operated</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#how-it-works" className="text-white/60 hover:text-[#C5A572] transition-colors">How It Works</Link></li>
                <li><Link href="#about" className="text-white/60 hover:text-[#C5A572] transition-colors">About Us</Link></li>
                <li><Link href="#markets" className="text-white/60 hover:text-[#C5A572] transition-colors">Markets</Link></li>
                <li><Link href="#contact" className="text-white/60 hover:text-[#C5A572] transition-colors">Get Cash Offer</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:2397383444" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    (239) 738-3444
                  </a>
                </li>
                <li>
                  <a href="mailto:info@garrisonpointsolutions.com" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    info@garrisonpointsolutions.com
                  </a>
                </li>
                <li>
                  <span className="text-white/60 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1" />
                    Fort Myers, Florida
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C5A572]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © 2025 Garrison Point Solutions, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="tel:2397383444"
          className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center shadow-2xl shadow-[#B8860B]/40"
        >
          <Phone className="w-7 h-7 text-[#0F1C2E]" />
        </a>
      </div>
    </div>
  )
}
