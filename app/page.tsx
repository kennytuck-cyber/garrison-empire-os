import Link from 'next/link'
import { ArrowRight, Shield, Clock, Users, Target, Anchor } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-brand-navy/95 backdrop-blur-sm z-50 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Anchor className="w-8 h-8 text-brand-gold" />
              <span className="font-heading text-2xl font-bold text-white">
                GARRISON POINT SOLUTIONS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#sellers" className="text-white hover:text-brand-gold transition-colors">
                For Sellers
              </Link>
              <Link href="#investors" className="text-white hover:text-brand-gold transition-colors">
                For Investors
              </Link>
              <Link href="#mission" className="text-white hover:text-brand-gold transition-colors">
                Our Mission
              </Link>
              <Link href="#contact" className="bg-brand-gold text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                Get My Fair Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 garrison-gradient lighthouse-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-gold/10 backdrop-blur-sm px-4 py-2 rounded-full text-brand-gold mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Veteran Owned & Operated</span>
              </div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">
                Real Estate Solutions with <span className="text-brand-gold">Military Precision</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Honest, transparent solutions for property owners and vetted off-market opportunities for investors. 
                23 years of USCG discipline applied to real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact" 
                  className="bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center justify-center group"
                >
                  Get My Fair Cash Offer
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#investors" 
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
                >
                  For Investors
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-gold/20">
                {/* Placeholder for lighthouse/coastal imagery */}
                <div className="w-full h-full flex items-center justify-center">
                  <Anchor className="w-32 h-32 text-brand-gold/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garrison Difference */}
      <section className="py-20 bg-neutral-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-brand-navy mb-4">
              The Garrison Difference
            </h2>
            <p className="text-xl text-neutral-ink/70 max-w-2xl mx-auto">
              Three pillars of excellence that set us apart
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy/10 hover:border-brand-gold transition-all">
              <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
                Lighthouse Standard
              </h3>
              <p className="text-neutral-ink/70 leading-relaxed">
                Unwavering integrity in every transaction. You'll always know exactly where you stand, 
                with transparent pricing and honest assessments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy/10 hover:border-brand-gold transition-all">
              <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
                Surgical Execution
              </h3>
              <p className="text-neutral-ink/70 leading-relaxed">
                23 years of U.S. Coast Guard precision applied to real estate. Every detail matters, 
                every commitment honored.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy/10 hover:border-brand-gold transition-all">
              <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
                Concierge Service
              </h3>
              <p className="text-neutral-ink/70 leading-relaxed">
                White-glove treatment from first contact to closing. We handle the complexity so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-brand-navy mb-4">
              Markets We Serve
            </h2>
            <p className="text-xl text-neutral-ink/70">
              Focused. Vetted. Off-Market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-brand-navy p-8 rounded-xl text-center">
              <h3 className="font-heading text-3xl font-bold text-brand-gold mb-2">Lee County</h3>
              <p className="text-white/80">Florida</p>
            </div>
            <div className="bg-brand-navy p-8 rounded-xl text-center">
              <h3 className="font-heading text-3xl font-bold text-brand-gold mb-2">Polk County</h3>
              <p className="text-white/80">Florida</p>
            </div>
            <div className="bg-brand-navy p-8 rounded-xl text-center">
              <h3 className="font-heading text-3xl font-bold text-brand-gold mb-2">Mobile</h3>
              <p className="text-white/80">Alabama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-neutral-cloud border-y border-neutral-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-brand-navy mx-auto mb-2" />
              <p className="font-semibold text-brand-navy">Veteran Owned</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-brand-navy mx-auto mb-2" />
              <p className="font-semibold text-brand-navy">BBB Accredited</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-brand-navy mx-auto mb-2" />
              <p className="font-semibold text-brand-navy">Chamber Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 garrison-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Execute?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your fair cash offer in 24-48 hours. No obligation.
          </p>
          <div className="bg-white rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 border-2 border-neutral-line rounded-lg focus:border-brand-gold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 border-2 border-neutral-line rounded-lg focus:border-brand-gold focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border-2 border-neutral-line rounded-lg focus:border-brand-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="Property Address"
                className="w-full px-4 py-3 border-2 border-neutral-line rounded-lg focus:border-brand-gold focus:outline-none"
              />
              <select className="w-full px-4 py-3 border-2 border-neutral-line rounded-lg focus:border-brand-gold focus:outline-none">
                <option>When do you need to sell?</option>
                <option>0-30 days</option>
                <option>30-90 days</option>
                <option>90+ days</option>
              </select>
              <button
                type="submit"
                className="w-full bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
              >
                Get My Fair Cash Offer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Anchor className="w-6 h-6 text-brand-gold" />
                <span className="font-heading font-bold">GARRISON POINT</span>
              </div>
              <p className="text-white/70 text-sm">
                Real estate solutions with military precision.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Contact</h4>
              <p className="text-white/70 text-sm mb-2">7901 4th Street N, Suite 300</p>
              <p className="text-white/70 text-sm mb-2">St. Petersburg, FL 33702</p>
              <p className="text-white/70 text-sm">(239) 738-3444</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#sellers" className="text-white/70 hover:text-brand-gold">For Sellers</Link></li>
                <li><Link href="#investors" className="text-white/70 hover:text-brand-gold">For Investors</Link></li>
                <li><Link href="#mission" className="text-white/70 hover:text-brand-gold">Our Mission</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-white/70 hover:text-brand-gold">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-brand-gold">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2025 Garrison Point Solutions, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Dashboard Link (Hidden - for owner access) */}
      <Link 
        href="/dashboard" 
        className="fixed bottom-4 right-4 bg-brand-navy text-brand-gold p-4 rounded-full shadow-lg hover:bg-brand-gold hover:text-brand-navy transition-all"
      >
        <Shield className="w-6 h-6" />
      </Link>
    </div>
  )
}
