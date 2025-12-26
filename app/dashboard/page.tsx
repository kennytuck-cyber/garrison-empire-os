{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 'use client'\
import Link from 'next/link'\
import \{ ArrowRight, Shield, Clock, Users, Target, Phone, Mail, MapPin, CheckCircle2, Star, ChevronDown, HeartHandshake, X \} from 'lucide-react'\
import \{ useState \} from 'react'\
\
export default function HomePage() \{\
  const [formData, setFormData] = useState(\{\
    firstName: '',\
    lastName: '',\
    phone: '',\
    email: '',\
    address: '',\
    unit: '',\
    city: '',\
    state: 'FL',\
    zip: '',\
    county: '',\
    isOwner: '',\
    occupancy: '',\
    reasonForSelling: '',\
    otherReason: '',\
    askingPrice: '',\
    timeline: ''\
  \})\
  const [isSubmitting, setIsSubmitting] = useState(false)\
  const [showSuccess, setShowSuccess] = useState(false)\
  const [error, setError] = useState('')\
\
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => \{\
    const \{ name, value \} = e.target\
    setFormData(prev => (\{ ...prev, [name]: value \}))\
  \}\
\
  const handleSubmit = async (e: React.FormEvent) => \{\
    e.preventDefault()\
    setIsSubmitting(true)\
    setError('')\
\
    const fullAddress = `$\{formData.address\}$\{formData.unit ? ' ' + formData.unit : ''\}, $\{formData.city\}, $\{formData.state\} $\{formData.zip\}`\
\
    try \{\
      const response = await fetch('/api/leads', \{\
        method: 'POST',\
        headers: \{ 'Content-Type': 'application/json' \},\
        body: JSON.stringify(\{\
          ...formData,\
          fullAddress,\
          name: `$\{formData.firstName\} $\{formData.lastName\}`,\
          reason: formData.reasonForSelling === 'Other' ? formData.otherReason : formData.reasonForSelling,\
          source: 'Website Contact Form'\
        \})\
      \})\
\
      if (response.ok) \{\
        setShowSuccess(true)\
        setFormData(\{\
          firstName: '',\
          lastName: '',\
          phone: '',\
          email: '',\
          address: '',\
          unit: '',\
          city: '',\
          state: 'FL',\
          zip: '',\
          county: '',\
          isOwner: '',\
          occupancy: '',\
          reasonForSelling: '',\
          otherReason: '',\
          askingPrice: '',\
          timeline: ''\
        \})\
      \} else \{\
        const data = await response.json()\
        setError(data.error || 'Something went wrong. Please try again.')\
      \}\
    \} catch (err) \{\
      setError('Unable to submit. Please call us directly.')\
    \} finally \{\
      setIsSubmitting(false)\
    \}\
  \}\
\
  const floridaCounties = [\
    'Alachua', 'Baker', 'Bay', 'Bradford', 'Brevard', 'Broward', 'Calhoun', 'Charlotte', \
    'Citrus', 'Clay', 'Collier', 'Columbia', 'DeSoto', 'Dixie', 'Duval', 'Escambia', \
    'Flagler', 'Franklin', 'Gadsden', 'Gilchrist', 'Glades', 'Gulf', 'Hamilton', 'Hardee', \
    'Hendry', 'Hernando', 'Highlands', 'Hillsborough', 'Holmes', 'Indian River', 'Jackson', \
    'Jefferson', 'Lafayette', 'Lake', 'Lee', 'Leon', 'Levy', 'Liberty', 'Madison', 'Manatee', \
    'Marion', 'Martin', 'Miami-Dade', 'Monroe', 'Nassau', 'Okaloosa', 'Okeechobee', 'Orange', \
    'Osceola', 'Palm Beach', 'Pasco', 'Pinellas', 'Polk', 'Putnam', 'Santa Rosa', 'Sarasota', \
    'Seminole', 'St. Johns', 'St. Lucie', 'Sumter', 'Suwannee', 'Taylor', 'Union', 'Volusia', \
    'Wakulla', 'Walton', 'Washington'\
  ]\
\
  const sellingReasons = [\
    'Inherited Property',\
    'Pre-Foreclosure',\
    'Divorce',\
    'Tired Landlord',\
    'Code Violations',\
    'Vacant Property',\
    'Behind on Payments',\
    'Relocating',\
    'Downsizing',\
    'Major Repairs Needed',\
    'Problem Tenants',\
    'Tax Liens',\
    'Job Loss',\
    'Medical Bills',\
    'Bankruptcy',\
    'Retiring',\
    'Other'\
  ]\
\
  return (\
    <div className="bg-[#0F1C2E] text-white overflow-x-hidden">\
      \{/* Success Modal */\}\
      \{showSuccess && (\
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">\
          <div className="bg-[#1B365D] border border-[#C5A572]/30 rounded-2xl p-8 md:p-12 max-w-lg w-full text-center relative animate-fade-in shadow-2xl">\
            <button \
              onClick=\{() => setShowSuccess(false)\}\
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"\
            >\
              <X className="w-6 h-6" />\
            </button>\
            \
            <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center mx-auto mb-6">\
              <CheckCircle2 className="w-10 h-10 text-[#0F1C2E]" />\
            </div>\
            \
            <h2 className="text-3xl font-serif font-bold text-white mb-4">\
              Submission Received!\
            </h2>\
            \
            <p className="text-xl text-white/80 mb-8 leading-relaxed">\
              Thank you! You've taken the first step to relieve the burden of this property on you and your family. We will be in contact soon!\
            </p>\
            \
            <div className="space-y-4">\
              <p className="text-[#C5A572] font-semibold">\
                Need immediate assistance?\
              </p>\
              <a \
                href="tel:2392913444"\
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all"\
              >\
                <Phone className="w-5 h-5 mr-2" />\
                Call (239) 291-3444\
              </a>\
            </div>\
          </div>\
        </div>\
      )\}\
\
      \{/* Hero Section - Full Screen */\}\
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center">\
        \{/* Background */\}\
        <div className="absolute inset-0">\
          <div \
            className="absolute inset-0 bg-cover bg-center"\
            style=\{\{\
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,\
            \}\}\
          />\
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#0F1C2E]/60" />\
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-[#0F1C2E]/30" />\
        </div>\
\
        \{/* Content */\}\
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">\
          <div className="grid lg:grid-cols-2 gap-16 items-center">\
            \{/* Left Column - Text */\}\
            <div className="animate-fade-in">\
              \{/* Badge */\}\
              <div className="inline-flex items-center space-x-2 bg-[#1B365D]/50 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">\
                <Shield className="w-5 h-5 text-[#C5A572]" />\
                <span className="text-sm font-semibold text-[#C5A572] tracking-wide">23-YEAR COAST GUARD VETERAN</span>\
              </div>\
\
              \{/* Headline */\}\
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">\
                Sell Your Florida\
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">\
                  Property Fast\
                </span>\
              </h1>\
\
              \{/* Subheadline */\}\
              <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-xl">\
                Fair cash offers within 24 hours. No repairs. No fees. No commissions. \
                Close on <span className="text-white font-semibold">your</span> timeline.\
              </p>\
\
              \{/* Value Props */\}\
              <div className="grid grid-cols-2 gap-4 mb-10">\
                \{[\
                  'Close in 7-14 Days',\
                  'As-Is Condition',\
                  'Zero Fees',\
                  'Cash Guarantee'\
                ].map((item, i) => (\
                  <div key=\{i\} className="flex items-center space-x-3">\
                    <div className="w-6 h-6 rounded-full bg-[#C5A572]/20 flex items-center justify-center">\
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572]" />\
                    </div>\
                    <span className="text-white/80 font-medium">\{item\}</span>\
                  </div>\
                ))\}\
              </div>\
\
              \{/* CTA */\}\
              <div className="flex flex-col sm:flex-row gap-4">\
                <Link \
                  href="#contact" \
                  className="group bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-2xl shadow-[#B8860B]/30"\
                >\
                  Get My Cash Offer\
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />\
                </Link>\
                <a \
                  href="tel:2392913444" \
                  className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"\
                >\
                  <Phone className="mr-3 w-5 h-5" />\
                  Call Now\
                </a>\
              </div>\
            </div>\
\
            \{/* Right Column - Stats Card */\}\
            <div className="hidden lg:block">\
              <div className="bg-[#1B365D]/30 backdrop-blur-md border border-[#C5A572]/20 rounded-2xl p-10 shadow-2xl">\
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Why Property Owners Choose Us</h3>\
                \
                <div className="space-y-8">\
                  <div className="flex items-start space-x-4">\
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">\
                      <Clock className="w-7 h-7 text-[#0F1C2E]" />\
                    </div>\
                    <div>\
                      <h4 className="font-bold text-xl text-white mb-1">24-Hour Offers</h4>\
                      <p className="text-white/60">Get a fair cash offer within one business day</p>\
                    </div>\
                  </div>\
\
                  <div className="flex items-start space-x-4">\
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">\
                      <Shield className="w-7 h-7 text-[#0F1C2E]" />\
                    </div>\
                    <div>\
                      <h4 className="font-bold text-xl text-white mb-1">Military Integrity</h4>\
                      <p className="text-white/60">23 years of Coast Guard discipline in every deal</p>\
                    </div>\
                  </div>\
\
                  <div className="flex items-start space-x-4">\
                    <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-xl flex items-center justify-center flex-shrink-0">\
                      <HeartHandshake className="w-7 h-7 text-[#0F1C2E]" />\
                    </div>\
                    <div>\
                      <h4 className="font-bold text-xl text-white mb-1">No Hassle Closing</h4>\
                      <p className="text-white/60">We handle everything - just show up and get paid</p>\
                    </div>\
                  </div>\
                </div>\
\
                \{/* Testimonial */\}\
                <div className="mt-10 pt-8 border-t border-[#C5A572]/20">\
                  <div className="flex items-center space-x-1 mb-3">\
                    \{[...Array(5)].map((_, i) => (\
                      <Star key=\{i\} className="w-5 h-5 fill-[#C5A572] text-[#C5A572]" />\
                    ))\}\
                  </div>\
                  <p className="text-white/80 italic mb-3">\
                    "Professional from start to finish. They made selling my inherited property stress-free."\
                  </p>\
                  <p className="text-[#C5A572] font-semibold">\'97 Recent Seller, Fort Myers</p>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
\
        \{/* Scroll Indicator */\}\
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">\
          <ChevronDown className="w-8 h-8 text-[#C5A572]" />\
        </div>\
      </section>\
\
      \{/* Trust Bar */\}\
      <section className="bg-[#1B365D] py-6 border-y border-[#C5A572]/10">\
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">\
            <div className="flex items-center space-x-2 text-white/60">\
              <Shield className="w-5 h-5 text-[#C5A572]" />\
              <span className="font-medium">Veteran Owned</span>\
            </div>\
            <div className="flex items-center space-x-2 text-white/60">\
              <CheckCircle2 className="w-5 h-5 text-[#C5A572]" />\
              <span className="font-medium">BBB Accredited</span>\
            </div>\
            <div className="flex items-center space-x-2 text-white/60">\
              <Star className="w-5 h-5 text-[#C5A572]" />\
              <span className="font-medium">5-Star Reviews</span>\
            </div>\
            <div className="flex items-center space-x-2 text-white/60">\
              <Building className="w-5 h-5 text-[#C5A572]" />\
              <span className="font-medium">Licensed & Insured</span>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* How It Works */\}\
      <section id="how-it-works" className="py-24 bg-[#0F1C2E] relative">\
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          \{/* Section Header */\}\
          <div className="text-center mb-20">\
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">The Process</span>\
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">\
              Three Simple Steps to\
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Your Cash Offer</span>\
            </h2>\
            <p className="text-xl text-white/60 max-w-2xl mx-auto">\
              We've eliminated the complexity. No agents, no showings, no repairs, no waiting.\
            </p>\
          </div>\
\
          \{/* Steps */\}\
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">\
            \{/* Step 1 */\}\
            <div className="relative group">\
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />\
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">\
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">\
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">1</span>\
                </div>\
                <h3 className="text-2xl font-serif font-bold text-white mb-4">\
                  Contact Us\
                </h3>\
                <p className="text-white/60 leading-relaxed text-lg">\
                  Fill out our simple form or call us directly. Tell us about your property \'97 \
                  any condition, any situation.\
                </p>\
              </div>\
            </div>\
\
            \{/* Step 2 */\}\
            <div className="relative group">\
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />\
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">\
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">\
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">2</span>\
                </div>\
                <h3 className="text-2xl font-serif font-bold text-white mb-4">\
                  Get Your Offer\
                </h3>\
                <p className="text-white/60 leading-relaxed text-lg">\
                  Receive a fair, no-obligation cash offer within 24 hours. \
                  Transparent pricing with no hidden fees.\
                </p>\
              </div>\
            </div>\
\
            \{/* Step 3 */\}\
            <div className="relative group">\
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />\
              <div className="relative bg-[#1B365D]/50 backdrop-blur-sm p-10 rounded-2xl border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-all h-full">\
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B8860B]/20">\
                  <span className="text-3xl font-serif font-bold text-[#0F1C2E]">3</span>\
                </div>\
                <h3 className="text-2xl font-serif font-bold text-white mb-4">\
                  Close & Get Paid\
                </h3>\
                <p className="text-white/60 leading-relaxed text-lg">\
                  Pick your closing date. We handle all the paperwork. \
                  Walk away with cash in hand.\
                </p>\
              </div>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* About / Why Choose Us */\}\
      <section id="about" className="py-24 bg-[#1B365D]/30 relative overflow-hidden">\
        \{/* Background Pattern */\}\
        <div className="absolute inset-0 opacity-5">\
          <div className="absolute inset-0" style=\{\{\
            backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`,\
            backgroundSize: '40px 40px'\
          \}\} />\
        </div>\
\
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="grid lg:grid-cols-2 gap-16 items-center">\
            \{/* Image */\}\
            <div className="relative">\
              <div \
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl"\
                style=\{\{\
                  backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`,\
                \}\}\
              />\
              \{/* Overlay Card */\}\
              <div className="absolute -bottom-8 -right-8 bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20 shadow-2xl max-w-sm">\
                <div className="text-5xl font-serif font-bold text-[#C5A572] mb-2">23+</div>\
                <div className="text-xl font-semibold text-white mb-1">Years of Service</div>\
                <p className="text-white/60">United States Coast Guard veteran bringing military precision to real estate.</p>\
              </div>\
            </div>\
\
            \{/* Content */\}\
            <div>\
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>\
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">\
                The Garrison Point\
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Difference</span>\
              </h2>\
              <p className="text-lg text-white/70 mb-8 leading-relaxed">\
                Founded by a 23-year Coast Guard veteran, Garrison Point Solutions brings \
                military discipline, unwavering integrity, and strategic precision to every \
                real estate transaction. We're not just buying houses \'97 we're solving problems \
                and creating opportunities.\
              </p>\
\
              \{/* Values */\}\
              <div className="space-y-6">\
                <div className="flex items-start space-x-4">\
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">\
                    <Shield className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <h3 className="text-xl font-bold text-white mb-2">Lighthouse Standard</h3>\
                    <p className="text-white/60">Unwavering integrity guides every decision. You'll always know exactly where you stand.</p>\
                  </div>\
                </div>\
\
                <div className="flex items-start space-x-4">\
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">\
                    <Target className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <h3 className="text-xl font-bold text-white mb-2">Surgical Precision</h3>\
                    <p className="text-white/60">Military-trained attention to detail ensures nothing falls through the cracks.</p>\
                  </div>\
                </div>\
\
                <div className="flex items-start space-x-4">\
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">\
                    <Users className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <h3 className="text-xl font-bold text-white mb-2">Concierge Service</h3>\
                    <p className="text-white/60">White-glove treatment from first contact to closing day. We handle everything.</p>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* Markets Section */\}\
      <section id="markets" className="py-24 bg-[#0F1C2E]">\
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="text-center mb-16">\
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Service Areas</span>\
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">\
              Florida Markets We Serve\
            </h2>\
            <p className="text-xl text-white/60 max-w-2xl mx-auto">\
              Deep expertise in Florida's most dynamic real estate markets.\
            </p>\
          </div>\
\
          <div className="grid md:grid-cols-3 gap-8">\
            \{/* Central Florida */\}\
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">\
              <div \
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"\
                style=\{\{\
                  backgroundImage: `url('https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`,\
                \}\}\
              />\
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />\
              <div className="absolute bottom-0 left-0 right-0 p-8">\
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Central Florida</h3>\
                <p className="text-white/70 mb-4">Orlando \'95 Lakeland \'95 Polk County \'95 Osceola \'95 Winter Haven</p>\
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">\
                  <Link href="/sell-house-fast-orlando">View Market</Link>\
                  <ArrowRight className="w-5 h-5 ml-2" />\
                </div>\
              </div>\
            </div>\
\
            \{/* Southwest Florida */\}\
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">\
              <div \
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"\
                style=\{\{\
                  backgroundImage: `url('https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,\
                \}\}\
              />\
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />\
              <div className="absolute bottom-0 left-0 right-0 p-8">\
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Southwest Florida</h3>\
                <p className="text-white/70 mb-4">Fort Myers \'95 Cape Coral \'95 Naples \'95 Lee County \'95 Collier</p>\
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">\
                  <Link href="/sell-house-fast-fort-myers">View Market</Link>\
                  <ArrowRight className="w-5 h-5 ml-2" />\
                </div>\
              </div>\
            </div>\
\
            \{/* South Florida */\}\
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">\
              <div \
                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"\
                style=\{\{\
                  backgroundImage: `url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,\
                \}\}\
              />\
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent" />\
              <div className="absolute bottom-0 left-0 right-0 p-8">\
                <h3 className="text-3xl font-serif font-bold text-white mb-3">South Florida</h3>\
                <p className="text-white/70 mb-4">Miami \'95 Fort Lauderdale \'95 Palm Beach \'95 Broward \'95 Dade</p>\
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">\
                  <span>View Market</span>\
                  <ArrowRight className="w-5 h-5 ml-2" />\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* Situations We Help */\}\
      <section className="py-24 bg-[#1B365D]/30">\
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="text-center mb-16">\
            <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">We Can Help</span>\
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">\
              Every Situation Has a Solution\
            </h2>\
            <p className="text-xl text-white/60 max-w-2xl mx-auto">\
              Whatever circumstances you're facing, we provide fair, fast solutions.\
            </p>\
          </div>\
\
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">\
            \{[\
              \{ label: 'Inherited Property', link: '/sell-inherited-house-florida' \},\
              \{ label: 'Pre-Foreclosure', link: '/sell-house-pre-foreclosure' \},\
              \{ label: 'Divorce', link: '/sell-house-during-divorce' \},\
              \{ label: 'Tired Landlord', link: '/sell-rental-property-with-tenants' \},\
              \{ label: 'Code Violations', link: '/sell-house-with-code-violations' \},\
              \{ label: 'Vacant Property', link: '/sell-house-as-is-florida' \},\
              \{ label: 'Behind on Payments', link: '/sell-house-pre-foreclosure' \},\
              \{ label: 'Relocating', link: '/sell-house-as-is-florida' \},\
              \{ label: 'Downsizing', link: '/sell-house-as-is-florida' \},\
              \{ label: 'Major Repairs Needed', link: '/sell-house-as-is-florida' \},\
              \{ label: 'Problem Tenants', link: '/sell-rental-property-with-tenants' \},\
              \{ label: 'Any Situation', link: '#contact' \}\
            ].map((item, index) => (\
              <Link\
                href=\{item.link\} \
                key=\{index\}\
                className="bg-[#0F1C2E] border border-[#C5A572]/10 hover:border-[#C5A572]/40 rounded-xl p-5 text-center hover:bg-[#1B365D]/50 transition-all cursor-pointer group"\
              >\
                <CheckCircle2 className="w-6 h-6 text-[#C5A572] mx-auto mb-3 group-hover:scale-110 transition-transform" />\
                <span className="text-white/80 font-medium">\{item.label\}</span>\
              </Link>\
            ))\}\
          </div>\
        </div>\
      </section>\
\
      \{/* Contact / CTA Section */\}\
      <section id="contact" className="py-24 bg-[#0F1C2E] relative">\
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="grid lg:grid-cols-5 gap-12">\
            \{/* Left - Info (2 columns) */\}\
            <div className="lg:col-span-2">\
              <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Get Started</span>\
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">\
                Ready for Your\
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]"> Cash Offer?</span>\
              </h2>\
              <p className="text-lg text-white/60 mb-10">\
                Take the first step toward a stress-free sale. Fill out the form and we'll \
                contact you within 24 hours with a fair, no-obligation cash offer.\
              </p>\
\
              \{/* Contact Info */\}\
              <div className="space-y-6">\
                <a href="tel:2392913444" className="flex items-center space-x-4 group">\
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">\
                    <Phone className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <p className="text-white/60 text-sm">Call Us Directly</p>\
                    <p className="text-xl font-bold text-white">(239) 291-3444</p>\
                  </div>\
                </a>\
\
                <a href="mailto:kenny@garrisonvi.com" className="flex items-center space-x-4 group">\
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">\
                    <Mail className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <p className="text-white/60 text-sm">Email Us</p>\
                    <p className="text-xl font-bold text-white">kenny@garrisonvi.com</p>\
                  </div>\
                </a>\
\
                <div className="flex items-center space-x-4">\
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-xl flex items-center justify-center border border-[#C5A572]/20">\
                    <MapPin className="w-6 h-6 text-[#C5A572]" />\
                  </div>\
                  <div>\
                    <p className="text-white/60 text-sm">Office Location</p>\
                    <p className="text-xl font-bold text-white">Fort Myers, Florida</p>\
                  </div>\
                </div>\
              </div>\
            </div>\
\
            \{/* Right - Form (3 columns) */\}\
            <div className="lg:col-span-3 bg-[#1B365D]/50 backdrop-blur-sm border border-[#C5A572]/20 rounded-2xl p-8 shadow-2xl">\
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Get Your Cash Offer</h3>\
              <p className="text-white/60 text-sm mb-6">Complete the form below and we'll prepare your custom offer.</p>\
              \
              \{error && (\
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">\
                  \{error\}\
                </div>\
              )\}\
\
              <form onSubmit=\{handleSubmit\} className="space-y-5">\
                \{/* Name Row */\}\
                <div className="grid grid-cols-2 gap-4">\
                  <div>\
                    <label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase tracking-wide">First Name *</label>\
                    <input\
                      type="text"\
                      name="firstName"\
                      value=\{formData.firstName\}\
                      onChange=\{handleInputChange\}\
                      required\
                      placeholder="John"\
                      className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                    />\
                  </div>\
                  <div>\
                    <label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase tracking-wide">Last Name *</label>\
                    <input\
                      type="text"\
                      name="lastName"\
                      value=\{formData.lastName\}\
                      onChange=\{handleInputChange\}\
                      required\
                      placeholder="Smith"\
                      className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                    />\
                  </div>\
                </div>\
\
                \{/* Contact Row */\}\
                <div className="grid grid-cols-2 gap-4">\
                  <div>\
                    <label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase tracking-wide">Phone *</label>\
                    <input\
                      type="tel"\
                      name="phone"\
                      value=\{formData.phone\}\
                      onChange=\{handleInputChange\}\
                      required\
                      placeholder="(239) 555-0123"\
                      className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                    />\
                  </div>\
                  <div>\
                    <label className="block text-xs font-medium text-[#C5A572] mb-1.5 uppercase tracking-wide">Email *</label>\
                    <input\
                      type="email"\
                      name="email"\
                      value=\{formData.email\}\
                      onChange=\{handleInputChange\}\
                      required\
                      placeholder="john@email.com"\
                      className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                    />\
                  </div>\
                </div>\
\
                \{/* Property Address Section */\}\
                <div className="pt-4 border-t border-[#C5A572]/10">\
                  <p className="text-xs font-medium text-[#C5A572] mb-3 uppercase tracking-wide">Property Information</p>\
                  \
                  \{/* Address Row */\}\
                  <div className="grid grid-cols-4 gap-4 mb-4">\
                    <div className="col-span-3">\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Street Address *</label>\
                      <input\
                        type="text"\
                        name="address"\
                        value=\{formData.address\}\
                        onChange=\{handleInputChange\}\
                        required\
                        placeholder="123 Main Street"\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Unit #</label>\
                      <input\
                        type="text"\
                        name="unit"\
                        value=\{formData.unit\}\
                        onChange=\{handleInputChange\}\
                        placeholder="Apt 4B"\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                  </div>\
\
                  \{/* City/State/Zip Row */\}\
                  <div className="grid grid-cols-6 gap-4 mb-4">\
                    <div className="col-span-2">\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">City *</label>\
                      <input\
                        type="text"\
                        name="city"\
                        value=\{formData.city\}\
                        onChange=\{handleInputChange\}\
                        required\
                        placeholder="Fort Myers"\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">State</label>\
                      <select\
                        name="state"\
                        value=\{formData.state\}\
                        onChange=\{handleInputChange\}\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="FL">FL</option>\
                      </select>\
                    </div>\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Zip *</label>\
                      <input\
                        type="text"\
                        name="zip"\
                        value=\{formData.zip\}\
                        onChange=\{handleInputChange\}\
                        required\
                        placeholder="33901"\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                    <div className="col-span-2">\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">County *</label>\
                      <select\
                        name="county"\
                        value=\{formData.county\}\
                        onChange=\{handleInputChange\}\
                        required\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="">Select County...</option>\
                        \{floridaCounties.map(county => (\
                          <option key=\{county\} value=\{county\}>\{county\}</option>\
                        ))\}\
                      </select>\
                    </div>\
                  </div>\
\
                  \{/* Owner/Occupancy Row */\}\
                  <div className="grid grid-cols-2 gap-4">\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Are you the owner? *</label>\
                      <select\
                        name="isOwner"\
                        value=\{formData.isOwner\}\
                        onChange=\{handleInputChange\}\
                        required\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="">Select...</option>\
                        <option value="Yes">Yes, I own the property</option>\
                        <option value="No - Authorized Rep">No, but I'm authorized to sell</option>\
                        <option value="No - Heir">No, I'm an heir/beneficiary</option>\
                        <option value="No - Other">No, other situation</option>\
                      </select>\
                    </div>\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Occupancy Status *</label>\
                      <select\
                        name="occupancy"\
                        value=\{formData.occupancy\}\
                        onChange=\{handleInputChange\}\
                        required\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="">Select...</option>\
                        <option value="Owner Occupied">Owner Occupied</option>\
                        <option value="Tenant Occupied">Tenant Occupied</option>\
                        <option value="Vacant">Vacant</option>\
                      </select>\
                    </div>\
                  </div>\
                </div>\
\
                \{/* Situation Section */\}\
                <div className="pt-4 border-t border-[#C5A572]/10">\
                  <p className="text-xs font-medium text-[#C5A572] mb-3 uppercase tracking-wide">Your Situation</p>\
                  \
                  <div className="grid grid-cols-2 gap-4 mb-4">\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Main reason for selling? *</label>\
                      <select\
                        name="reasonForSelling"\
                        value=\{formData.reasonForSelling\}\
                        onChange=\{handleInputChange\}\
                        required\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="">Select reason...</option>\
                        \{sellingReasons.map(reason => (\
                          <option key=\{reason\} value=\{reason\}>\{reason\}</option>\
                        ))\}\
                      </select>\
                    </div>\
                    <div>\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Timeline to sell *</label>\
                      <select\
                        name="timeline"\
                        value=\{formData.timeline\}\
                        onChange=\{handleInputChange\}\
                        required\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm appearance-none"\
                      >\
                        <option value="">Select timeline...</option>\
                        <option value="ASAP">ASAP - Within 2 weeks</option>\
                        <option value="30 days">Within 30 days</option>\
                        <option value="30-60 days">30-60 days</option>\
                        <option value="60-90 days">60-90 days</option>\
                        <option value="Flexible">Flexible / Just exploring</option>\
                      </select>\
                    </div>\
                  </div>\
\
                  \{/* Other Reason (conditional) */\}\
                  \{formData.reasonForSelling === 'Other' && (\
                    <div className="mb-4">\
                      <label className="block text-xs font-medium text-white/60 mb-1.5">Please describe your situation</label>\
                      <input\
                        type="text"\
                        name="otherReason"\
                        value=\{formData.otherReason\}\
                        onChange=\{handleInputChange\}\
                        placeholder="Tell us more about your situation..."\
                        className="w-full px-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                  )\}\
\
                  \{/* Asking Price - Strategic Phrasing */\}\
                  <div>\
                    <label className="block text-xs font-medium text-white/60 mb-1.5">What's the minimum you'd need to walk away with?</label>\
                    <div className="relative">\
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>\
                      <input\
                        type="text"\
                        name="askingPrice"\
                        value=\{formData.askingPrice\}\
                        onChange=\{handleInputChange\}\
                        placeholder="e.g., 150,000"\
                        className="w-full pl-8 pr-4 py-3 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-lg text-white placeholder:text-white/40 focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none transition-all text-sm"\
                      />\
                    </div>\
                    <p className="text-white/40 text-xs mt-1.5 italic">This helps us prepare the most competitive offer for you.</p>\
                  </div>\
                </div>\
\
                <button\
                  type="submit"\
                  disabled=\{isSubmitting\}\
                  className="w-full bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-xl shadow-[#B8860B]/25 flex items-center justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed"\
                >\
                  \{isSubmitting ? (\
                    <>\
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0F1C2E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>\
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\
                      </svg>\
                      Submitting...\
                    </>\
                  ) : (\
                    <>\
                      Get My Cash Offer\
                      <ArrowRight className="ml-2 w-5 h-5" />\
                    </>\
                  )\}\
                </button>\
\
                <p className="text-center text-white/40 text-xs pt-2">\
                  \uc0\u55357 \u56594  100% confidential. Your information is secure and never shared.\
                </p>\
              </form>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      \{/* Floating Mobile CTA */\}\
      <div className="fixed bottom-6 right-6 md:hidden z-50">\
        <a \
          href="tel:2392913444"\
          className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-full flex items-center justify-center shadow-2xl shadow-[#B8860B]/40"\
        >\
          <Phone className="w-7 h-7 text-[#0F1C2E]" />\
        </a>\
      </div>\
    </div>\
  )\
\}}
