'use client'
import { SITE_CONTENT } from '../siteContent' 
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, Clock, Shield, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

// --- SMART IMAGE MAPPING ---
const getHeroImage = (slug: string) => {
  if (slug.includes('orlando')) return '/orlando-central-flroida-real-estate-cash-sell-buy.jpg'
  if (slug.includes('fort-myers')) return '/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
  if (slug.includes('cape-coral')) return '/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  if (slug.includes('miami')) return '/home-cash-offer-real-estate-florida-buy-sell-property.webp'

  if (slug.includes('veteran') || slug.includes('military')) return '/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg'
  if (slug.includes('inherited')) return '/inheritance-estate-family-inherited-probate-cash-offer.jpg'
  if (slug.includes('divorce')) return '/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  if (slug.includes('foreclosure')) return '/deal-forclosure-cash-closing-title-florida--2.webp'
  
  return '/florida-home-cash-real-estate-sell-buy-fas-2.jpg'
}

interface ContentItem {
  type: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  city?: string;
  neighborhoods?: string[];
  painPoints?: string[];
  solution?: string;
  content?: string[];
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const content = SITE_CONTENT[params.slug as keyof typeof SITE_CONTENT] as ContentItem | undefined

  if (!content) {
    return notFound()
  }

  const heroImage = getHeroImage(params.slug)

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  }

  // --- BLOG POST LAYOUT ---
  if (content.type === 'blog') {
    return (
      <div className="min-h-screen bg-[#0F1C2E] text-white">
        <div className="h-[50vh] relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/90 to-transparent" />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl mx-auto px-6 -mt-40 relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <Link href="/blog" className="text-[#C5A572] hover:text-white mb-6 inline-block font-medium tracking-wide uppercase text-sm">
              ← Back to Intel
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight shadow-black drop-shadow-lg">{content.h1}</h1>
          </motion.div>

          <div className="bg-[#1B365D]/60 backdrop-blur-md border border-[#C5A572]/20 p-8 rounded-2xl mb-12 shadow-2xl">
            <p className="text-xl text-white/90 leading-relaxed italic">
              {content.intro}
            </p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            {content.content?.map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={index} 
                    className="text-3xl font-bold text-white mt-12 mb-6 border-b border-[#C5A572]/20 pb-4"
                  >
                    {paragraph.replace('## ', '')}
                  </motion.h2>
                )
              }
              const parts = paragraph.split('**');
              return (
                <p key={index} className="text-white/80 leading-relaxed mb-6">
                  {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-[#C5A572] font-bold">{part}</strong> : part)}
                </p>
              )
            })}
          </div>
        </motion.div>
        <div className="h-20" />
      </div>
    )
  }

  // --- LANDING PAGE LAYOUT ---
  return (
    <div className="min-h-screen bg-[#0F1C2E]">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/95 to-[#1B365D]/30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#1B365D]/80 border border-[#C5A572]/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#C5A572]" />
              <span className="text-xs font-bold text-[#C5A572] tracking-widest uppercase">
                {content.type === 'location' ? `Serving ${content.city}` : 'We Solve Problems'}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
              {content.h1}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl">
              {content.intro}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-5 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center shadow-lg shadow-[#B8860B]/20 hover:-translate-y-1">
                Get Cash Offer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center hover:-translate-y-1">
                <Phone className="mr-2 w-5 h-5" />
                (239) 291-3444
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#1B365D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Left Column: Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-white mb-10">
                {content.type === 'location' ? `Why Sell Your ${content.city} Home to Us?` : 'Why Choose a Cash Sale?'}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">
                    <Clock className="w-7 h-7 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Speed & Convenience</h3>
                    <p className="text-white/60 text-lg">We can close in as little as 7 days. No waiting for banks or inspections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">
                    <Shield className="w-7 h-7 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Veteran-Owned Integrity</h3>
                    <p className="text-white/60 text-lg">23 years of Coast Guard service means we operate with discipline and transparency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#C5A572]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20 group-hover:bg-[#C5A572]/20 transition-colors">
                    <CheckCircle2 className="w-7 h-7 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">No Repairs Needed</h3>
                    <p className="text-white/60 text-lg">We buy properties totally as-is. Leave the junk, we handle it.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Specifics */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0F1C2E] p-10 rounded-3xl border border-[#C5A572]/20 shadow-2xl"
            >
              {content.type === 'location' && content.neighborhoods && (
                <>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <MapPin className="w-6 h-6 text-[#C5A572] mr-3" />
                    Areas We Serve in {content.city}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {content.neighborhoods.map((area: string) => (
                      <div key={area} className="flex items-center space-x-3 text-white/70">
                        <div className="w-1.5 h-1.5 bg-[#C5A572] rounded-full" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {content.type === 'situation' && content.painPoints && (
                <>
                  <h3 className="text-2xl font-bold text-white mb-8">Common Issues We Resolve</h3>
                  <ul className="space-y-6">
                    {content.painPoints.map((point: string) => (
                      <li key={point} className="flex items-start space-x-4 text-white/80">
                        <CheckCircle2 className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 p-6 bg-[#1B365D]/30 rounded-2xl border border-[#C5A572]/10">
                    <p className="text-[#C5A572] font-semibold mb-2 uppercase tracking-wide text-sm">Our Solution</p>
                    <p className="text-white text-lg italic">"{content.solution}"</p>
                  </div>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0F1C2E] border-t border-[#C5A572]/10 text-center relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A572]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to Sell Your Property?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Get a fair, no-obligation cash offer within 24 hours.
          </p>
          <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-xl font-bold text-xl hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center shadow-2xl shadow-[#B8860B]/20 hover:scale-105">
            Get My Cash Offer Now
          </Link>
        </div>
      </section>
    </div>
  )
}
