'use client'

import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, Calendar, Clock, CheckCircle2, ArrowLeft, ArrowRight, MapPin, Shield, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

// 1. EXACT IMAGE MAPPING (Must match the blog page)
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()

  // Image for "How Much Do Cash Home Buyers Pay?"
  if (t.includes('how much') && t.includes('cash home buyers')) return '/images/cash-buyer-home-florida-paid-sell.jpg'

  if (t.includes('inherited')) return '/images/home-inheritance-inherited-estate-probate-family.webp'
  if (t.includes('mortgage') && t.includes('investor')) return '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
  if (t.includes('as-is') || t.includes('fix it up')) return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  if (t.includes('pre-foreclosure') && t.includes('options')) return '/images/deal-forclosure-cash-closing-title-florida--2.webp'
  if (t.includes('code violations')) return '/images/selling-house-with-code-violations-florida.jpg'
  if (t.includes('hidden costs') && t.includes('realtor')) return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  if (t.includes('pre-foreclosure vs foreclosure')) return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'

  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  if (t.includes('how fast can you sell')) return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  if (t.includes('divorce')) return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  if (t.includes('fort myers') && t.includes('expect')) return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'

  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = (SITE_CONTENT as any)[params.slug]

  if (!data) {
    return notFound()
  }

  // Map slugs to specific hero images for markets and situations.
  const slugToImage: Record<string, string> = {
    'sell-house-fast-orlando': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
    'cash-home-buyers-polk-county': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
    'sell-house-fast-fort-myers': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
    'cash-home-buyers-lee-county': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
    'sell-house-fast-south-florida': '/images/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg',
    'foreclosure-help': '/images/deal-forclosure-cash-closing-title-florida--2.webp',
    'code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp',
    'sell-house-with-code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp',
    'military-relocation': '/images/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg',
    'probate-help': '/images/inheritance-estate-family-inherited-probate-cash-offer.jpg',
    'sell-inherited-house-florida': '/images/inheritance-estate-family-inherited-probate-cash-offer.jpg',
    'divorce-sale': '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg',
    'sell-damaged-house': '/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG'
  }
  const heroImage = slugToImage[params.slug] ?? getImageForPost(data.h1 || '')

  // 2. CONTENT PREPARATION
  const contentString = typeof data.content === 'string'
    ? data.content
    : Array.isArray(data.content)
    ? (data.content as string[]).join('\n')
    : ''
  const rawLines = contentString.split('\n')
  const contentParagraphs = rawLines.filter((line: string) => {
    const trimmed = line.trim()
    if (!trimmed) return false
    if (/^H1:/i.test(trimmed)) return false
    if (trimmed.endsWith('*')) return false
    return true
  })

  // Generate LocalBusiness schema for location pages
  const localBusinessSchema = data.type === 'location' ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://garrisonpointsolutions.com/${params.slug}`,
    "name": "Garrison Point Solutions",
    "description": data.description,
    "url": `https://garrisonpointsolutions.com/${params.slug}`,
    "telephone": "+1-239-291-3444",
    "email": "info@garrisonpointsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7901 4th Street N, Suite 300",
      "addressLocality": "St Petersburg",
      "addressRegion": "FL",
      "postalCode": "33702",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.8006,
      "longitude": -82.6341
    },
    "areaServed": {
      "@type": "City",
      "name": data.city || "Florida"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://garrisonpointsolutions.com"
    ],
    "image": `https://garrisonpointsolutions.com${heroImage}`,
    "additionalType": "https://schema.org/RealEstateAgent"
  } : null

  // Get page type label
  const pageTypeLabel = data.type === 'blog' ? 'Guide' : data.type === 'location' ? 'Service Area' : 'We Help With'

  return (
    <>
      {/* LocalBusiness Schema for Location Pages */}
      {localBusinessSchema && (
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}

      <main className="bg-[#0F1C2E] min-h-screen overflow-hidden">
        {/* Back link for easy navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={data.type === 'blog' ? '/blog' : '/'}
              className="inline-flex items-center text-white/70 hover:text-[#C5A572] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {data.type === 'blog' ? 'Back to Blog' : 'Back Home'}
            </Link>
          </motion.div>
        </div>

        {/* HERO SECTION with Zoom Animation */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-4">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt={data.h1 || 'Real Estate Guide'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/85 via-[#0F1C2E]/75 to-[#0F1C2E]" />
          </motion.div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
            >
              {data.type === 'blog' ? (
                <>
                  <Calendar className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">GUIDE</span>
                  <span className="w-1 h-1 bg-[#C5A572] rounded-full" />
                  <Clock className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">5 MIN READ</span>
                </>
              ) : data.type === 'location' ? (
                <>
                  <MapPin className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">SERVICE AREA</span>
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">WE HELP WITH</span>
                </>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              {data.h1}
            </motion.h1>

            {data.type !== 'blog' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              >
                <Link
                  href="/#contact"
                  className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group shadow-xl shadow-[#B8860B]/20"
                >
                  Get My Cash Offer
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
            )}
          </div>
        </section>

        {/* Quick Stats for Location/Situation Pages */}
        {data.type !== 'blog' && (
          <section className="py-12 bg-[#1B365D]">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              >
                {[
                  { label: "Cash Offers", value: "24hr" },
                  { label: "Closing Time", value: "7-14 Days" },
                  { label: "Agent Fees", value: "$0" },
                  { label: "Repairs Needed", value: "None" }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <div className="text-3xl md:text-4xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* CONTENT SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="prose prose-lg prose-invert max-w-none"
          >
            {data.description && (
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/80 leading-relaxed mb-12 font-medium border-l-4 border-[#C5A572] pl-6 italic bg-[#1B365D]/30 py-4 rounded-r-lg"
              >
                {data.description}
              </motion.p>
            )}

            {/* Main Content */}
            <motion.div variants={fadeInUp} className="space-y-6 text-white/90">
              {contentParagraphs.length > 0 ? (
                contentParagraphs.map((paragraph: string, index: number) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <motion.h2
                        key={index}
                        variants={fadeInUp}
                        className="text-3xl font-bold text-white mt-16 mb-6 flex items-center gap-4"
                      >
                        <span className="w-2 h-8 bg-gradient-to-b from-[#B8860B] to-[#C5A572] rounded-full" />
                        {paragraph.replace('## ', '')}
                      </motion.h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <motion.h3
                        key={index}
                        variants={fadeInUp}
                        className="text-2xl font-bold text-[#C5A572] mt-10 mb-4"
                      >
                        {paragraph.replace('### ', '')}
                      </motion.h3>
                    )
                  }
                  if (paragraph.trim().startsWith('- ')) {
                    const text = paragraph.replace(/^\-\s*/, '').replace(/\*\*/g, '')
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-4 mb-4 bg-[#1B365D]/30 p-4 rounded-lg border border-[#C5A572]/10"
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <p className="text-white/80 leading-relaxed">{text}</p>
                      </motion.div>
                    )
                  }
                  if (paragraph.trim().length > 0) {
                    const text = paragraph.replace(/\*\*/g, '')
                    return (
                      <motion.p
                        key={index}
                        variants={fadeInUp}
                        className="leading-8 mb-6 text-white/80"
                      >
                        {text}
                      </motion.p>
                    )
                  }
                  return null
                })
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="p-8 bg-[#1B365D] border border-[#C5A572]/20 rounded-xl text-center"
                >
                  <p className="text-white/70 italic mb-4">
                    The full content for this article is being updated.
                  </p>
                  <p className="text-white/70">
                    In the meantime, here is a summary:
                  </p>
                  <p className="text-white mt-4 font-medium">{data.description}</p>
                </motion.div>
              )}
            </motion.div>
          </motion.article>

          {/* CTA Footer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-24 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 to-[#C5A572]/10 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C5A572]/5 rounded-full blur-3xl" />

            <div className="relative bg-[#1B365D] rounded-2xl p-10 md:p-12 border border-[#C5A572]/20 text-center">
              <motion.div variants={fadeInUp}>
                <DollarSign className="w-14 h-14 text-[#C5A572] mx-auto mb-6" />
              </motion.div>
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
                Need Help With Your Property?
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                We buy houses in any condition throughout Florida. Get a fair cash offer today without the hassle of repairs, showings, or agent fees.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group shadow-xl shadow-[#B8860B]/20"
                >
                  Get My Cash Offer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:2392913444"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (239) 291-3444
                </a>
              </motion.div>

              {/* Related Links */}
              <motion.div variants={fadeInUp} className="mt-10 pt-8 border-t border-[#C5A572]/10">
                <p className="text-white/50 text-sm mb-4">Explore More:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/how-it-works" className="text-[#C5A572] hover:text-[#D4B896] text-sm transition-colors">
                    How It Works
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/faq" className="text-[#C5A572] hover:text-[#D4B896] text-sm transition-colors">
                    FAQ
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/our-approach" className="text-[#C5A572] hover:text-[#D4B896] text-sm transition-colors">
                    Our Approach
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/blog" className="text-[#C5A572] hover:text-[#D4B896] text-sm transition-colors">
                    More Articles
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
