'use client'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, Users, Target, Phone, Mail, MapPin, CheckCircle2, Star, ChevronDown, HeartHandshake, X, Building, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    unit: '',
    city: '',
    state: 'FL',
    zip: '',
    county: '',
    isOwner: '',
    occupancy: '',
    reasonForSelling: '',
    otherReason: '',
    askingPrice: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const fullAddress = `${formData.address}${formData.unit ? ' ' + formData.unit : ''}, ${formData.city}, ${formData.state} ${formData.zip}`

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullAddress,
          name: `${formData.firstName} ${formData.lastName}`,
          reason: formData.reasonForSelling === 'Other' ? formData.otherReason : formData.reasonForSelling,
          source: 'Website Contact Form'
        })
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          firstName: '', lastName: '', phone: '', email: '', address: '', unit: '', city: '', state: 'FL', zip: '', county: '', isOwner: '', occupancy: '', reasonForSelling: '', otherReason: '', askingPrice: '', timeline: ''
        })
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Unable to submit. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const faqs = [
    { question: "How do you determine your offer price?", answer: "We evaluate several factors: the property's current condition, needed repairs, recent comparable sales in your area, and current market conditions. Our offers typically range from 70-85% of the after-repair value, minus estimated repair costs." },
    { question: "Do I have to accept your offer?", answer: "Absolutely not. Our offers are completely no-obligation. You are free to accept, counter, or decline. There is no pressure and no cost to you for receiving an offer." },
    { question: "Do I need to make any repairs before selling?", answer: "No. We buy houses in as-is condition, regardless of needed repairs. Broken HVAC, roof issues, water damage, outdated everything—we handle it all." },
    { question: "How fast can you close?", answer: "We can close in as little as 7 days if needed, though 10-14 days is more typical to allow time for title work. If you need more time, we are flexible and can work around your schedule." },
    { question: "Will I have to pay any fees or commissions?", answer: "No. There are no real estate agent commissions, no closing costs for you to pay, and no hidden fees. The price we offer is the amount you receive at closing." },
    { question: "What if I still have a mortgage on the property?", answer: "That is fine—most sellers do. At closing, the proceeds from the sale first pay off your existing mortgage, and you keep the remainder." },
    { question: "What types of houses do you buy?", answer: "We buy single-family homes, condos, townhouses, duplexes, and small multi-family properties throughout Southwest and Central Florida. Any condition, any situation." },
    { question: "Do you buy houses with tenants?", answer: "Yes. We purchase tenant-occupied properties regularly. You don't need to evict anyone or wait for leases to expire. We handle the tenant situation after closing." },
    { question: "What if my house has code violations or liens?", answer: "We buy properties with code violations, liens, and other title issues regularly. In many cases, we can negotiate with code enforcement to reduce fines." },
    { question: "Can I sell if I'm in pre-foreclosure?", answer: "Yes, and time is critical. Selling before foreclosure completes can protect your credit and preserve any equity. We can often close fast enough to stop the foreclosure process." },
    { question: "How is this different from listing with a realtor?", answer: "When you list with a realtor, you pay 6% commission, closing costs, and often have to make repairs. It takes 3-6 months. When you sell to us, there are zero fees, zero repairs, and we close in days, not months." },
    { question: "Why should I trust you?", answer: "Garrison Point Solutions is a veteran-owned company built on 23 years of Coast Guard service. We bring military integrity, discipline, and transparency to every transaction." }
  ]

  const floridaCounties = ['Alachua', 'Baker', 'Bay', 'Bradford', 'Brevard', 'Broward', 'Calhoun', 'Charlotte', 'Citrus', 'Clay', 'Collier', 'Columbia', 'DeSoto', 'Dixie', 'Duval', 'Escambia', 'Flagler', 'Franklin', 'Gadsden', 'Gilchrist', 'Glades', 'Gulf', 'Hamilton', 'Hardee', 'Hendry', 'Hernando', 'Highlands', 'Hillsborough', 'Holmes', 'Indian River', 'Jackson', 'Jefferson', 'Lafayette', 'Lake', 'Lee', 'Leon', 'Levy', 'Liberty', 'Madison', 'Manatee', 'Marion', 'Martin', 'Miami-Dade', 'Monroe', 'Nassau', 'Okaloosa', 'Okeechobee', 'Orange', 'Osceola', 'Palm Beach', 'Pasco', 'Pinellas', 'Polk', 'Putnam', 'Santa Rosa', 'Sarasota', 'Seminole', 'St. Johns', 'St. Lucie', 'Sumter', 'Suwannee', 'Taylor', 'Union', 'Volusia', 'Wakulla', 'Walton', 'Washington']
  
  const sellingReasons = ['Inherited Property', 'Pre-Foreclosure', 'Divorce', 'Tired Landlord', 'Code Violations', 'Vacant Property', 'Behind on Payments', 'Relocating', 'Downsizing', 'Major Repairs Needed', 'Problem Tenants', 'Tax Liens', 'Job Loss', 'Medical Bills', 'Bankruptcy', 'Retiring', 'Other']

  return (
    <div className="bg-[#0F1C2E] text-white overflow-x-hidden">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1B365D] border border-[#C5A572]/30 rounded-2xl p-8 md:p-12 max-w-lg w-full text-center relative shadow-2xl"
          >
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#0F1C2E]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Submission Received!</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Thank you! You've taken the first step. We will be in contact soon!</p>
            <div className="space-y-4">
              <p className="text-[#C5A572] font-semibold">Need immediate assistance?</p>
              <a href="tel:2392913444" className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call (239) 291-3444
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605276378624-18ae817c00b5?q=80&w=2070')` }} // Luxury Florida Home
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/50 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-[#C5A572]" />
                <span className="text-sm font-semibold text-[#C5A572] tracking-wide">23-YEAR COAST GUARD VETERAN</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
                Sell Your Florida
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Property Fast</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Fair cash offers within 24 hours. No repairs. No fees. No commissions. Close on <span className="text-white font-semibold">your</span> timeline.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-10">
                {['Close in 7-14 Days', 'As-Is Condition', 'Zero Fees', 'Cash Guarantee'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#C5A572]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572]" />
                    </div>
                    <span className="text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30 hover:-translate-y-1">
                  Get My Cash Offer
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                  <Phone className="mr-3 w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="bg-[#1B365D]/30 backdrop-blur-md border border-[#C5A572]/20 rounded-2xl p-10 shadow-2xl">
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Why Property Owners Choose Us</h3>
                <div className="space-y-8">
                  {[
                    { icon: Clock, title: "24-Hour Offers", desc: "Get a fair cash offer within one business day" },
                    { icon: Shield, title: "Military Integrity", desc: "23 years of Coast Guard discipline in every deal" },
                    { icon: HeartHandshake, title: "No Hassle Closing", desc: "We handle everything - just show up and get paid" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-[#0F1C2E]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-1">{item.title}</h4>
                        <p className="text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-[#C5A572]/20">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C5A572] text-[#C5A572]" />)}
                  </div>
                  <p className="text-white/80 italic mb-3">"Professional from start to finish. They made selling my inherited property stress-free."</p>
                  <p className="text-[#C5A572] font-semibold">— Recent Seller, Fort Myers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#C5A572]" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1B365D] py-6 border-y border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { icon: Shield, text: "Veteran Owned" },
              { icon: CheckCircle2, text: "BBB Accredited" },
              { icon: Star, text: "5-Star Reviews" },
              { icon: Building, text: "Licensed & Insured" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-white/60">
                <item.icon className="w-5 h-5 text-[#C5A572]" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-[#0F1C2E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Three Simple Steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Your Cash Offer</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">We've eliminated the complexity. No agents, no showings, no repairs, no waiting.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Contact Us", desc: "Fill out our simple form or call us directly. Tell us about your property — any condition, any situation." },
              { title: "Get Your Offer", desc: "Receive a fair, no-obligation cash offer within 24 hours. Transparent pricing with no hidden fees." },
              { title: "Close & Get Paid", desc: "Pick your closing date. We handle all the paperwork. Walk away with cash in hand." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">
                    <span className="text-3xl font-serif font-bold text-[#0F1C2E]">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-24 bg-[#1B365D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610173827002-6b4e96881d4d?q=80&w=2070')` }} />
              <div className="absolute -bottom-8 -right-8 bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20 shadow-2xl max-w-sm">
                <div className="text-5xl font-serif font-bold text-[#C5A572] mb-2">23+</div>
                <div className="text-xl font-semibold text-white mb-1">Years of Service</div>
                <p className="text-white/60">United States Coast Guard veteran bringing military precision to real estate.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">The Garrison Point <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Difference</span></h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">Founded by a 23-year Coast Guard veteran, Garrison Point Solutions brings military discipline, unwavering integrity, and strategic precision to every real estate transaction.</p>
              <div className="space-y-6">
                {[
                  { title: "Lighthouse Standard", desc: "Unwavering integrity guides every decision.", icon: Shield },
                  { title: "Surgical Precision", desc: "Military-trained attention to detail.", icon: Target },
                  { title: "Concierge Service", desc: "White-glove treatment from first contact.", icon: Users }
                ].map((val, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                      <val.icon className="w-6 h-6 text-[#C5A572]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                      <p className="text-white/60">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-24 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Florida Markets We Serve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Central Florida", link: "/sell-house-fast-orlando", img: "https://images.unsplash.com/photo-1597040663442-995a975739db?q=80&w=1939" },
              { title: "Southwest Florida", link: "/sell-house-fast-fort-myers", img: "https://images.unsplash.com/photo-1596123063238-60dfd256262d?q=80&w=2070" },
              { title: "South Florida", link: "#contact", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1974" }
            ].map((market, i) => (
              <Link href={market.link} key={i}>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${market.img}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">{market.title}</h3>
                    <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>View Market</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-24 bg-[#1B365D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Every Situation Has a Solution</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Inherited Property', link: '/sell-inherited-house-florida' },
              { label: 'Pre-Foreclosure', link: '/sell-house-pre-foreclosure' },
              { label: 'Divorce', link: '/sell-house-during-divorce' },
              { label: 'Tired Landlord', link: '/sell-rental-property-with-tenants' },
              { label: 'Code Violations', link: '/sell-house-with-code-violations' },
              { label: 'Vacant Property', link: '/sell-house-as-is-florida' },
              { label: 'Relocating', link: '/sell-house-as-is-florida' },
              { label: 'Any Situation', link: '#contact' }
            ].map((item, index) => (
              <Link href={item.link} key={index} className="bg-[#0F1C2E] border border-[#C5A572]/10 hover:border-[#C5A572]/40 rounded-xl p-5 text-center hover:bg-[#1B365D]/50 transition-all cursor-pointer group">
                <CheckCircle2 className="w-6 h-6 text-[#C5A572] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0F1C2E] border-t border-[#C5A572]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1B365D]/20 border border-[#C5A572]/10 rounded-xl p-6 hover:border-[#C5A572]/30 transition-all cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#C5A572] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === index && <p className="text-white/70 mt-4 leading-relaxed animate-fade-in">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1B365D]/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Get Started</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Ready for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Cash Offer?</span></h2>
              <p className="text-lg text-white/60 mb-10">Take the first step toward a stress-free sale. Fill out the form and we'll contact you within 24 hours.</p>
              <div className="space-y-6">
                <a href="tel:2392913444" className="flex items-center space-x-4 group"><div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors"><Phone className="w-6 h-6 text-[#C5A572]" /></div><div><p className="text-white/60 text-sm">Call Us Directly</p><p className="text-xl font-bold text-white">(239) 291-3444</p></div></a>
                <a href="mailto:kenny@garrisonvi.com" className="flex items-center space-x-4 group"><div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors"><Mail className="w-6 h-6 text-[#C5A572]" /></div><div><p className="text-white/60 text-sm">Email Us</p><p className="text-xl font-bold text-white">kenny@garrisonvi.com</p></div></a>
                <div className="flex items-center space-x-4"><div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20"><MapPin className="w-6 h-6 text-[#C5A572]" /></div><div><p className="text-white/60 text-sm">Office Location</p><p className="text-xl font-bold text-white">Fort Myers, Florida</p></div></div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#1B365D]/50 backdrop-blur-sm border border-[#C5A572]/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Get Your Cash Offer</h3>
              <p className="text-white/60 text-sm mb-6">Complete the form below and we'll prepare your custom offer.</p>
              {error && <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase">First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="John" /></div>
                  <div><label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase">Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="Smith" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase">Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="(555) 123-4567" /></div>
                  <div><label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase">Email *</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="john@email.com" /></div>
                </div>
                <div className="pt-4 border-t border-[#C5A572]/10">
                  <div className="mb-4"><label className="block text-xs font-medium text-white/60 mb-1.5">Property Address *</label><input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="123 Main St" /></div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><label className="block text-xs font-medium text-white/60 mb-1.5">City *</label><input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="Fort Myers" /></div>
                    <div><label className="block text-xs font-medium text-white/60 mb-1.5">Zip *</label><input type="text" name="zip" value={formData.zip} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm" placeholder="33901" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs font-medium text-white/60 mb-1.5">Reason for Selling *</label><select name="reasonForSelling" value={formData.reasonForSelling} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm"><option value="">Select...</option>{sellingReasons.map(r => <option key={r} value={r}>{r}</option>)}</select></div>
                    <div><label className="block text-xs font-medium text-white/60 mb-1.5">Timeline *</label><select name="timeline" value={formData.timeline} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white text-sm"><option value="">Select...</option><option value="ASAP">ASAP</option><option value="30 days">30 Days</option><option value="60 days">60 Days</option></select></div>
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-xl shadow-[#B8860B]/25 flex items-center justify-center mt-6 disabled:opacity-50">
                  {isSubmitting ? "Submitting..." : "Get My Cash Offer"} <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-center text-white/40 text-xs pt-2">🔒 100% confidential. Secure transmission.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
