'use client'

import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useRef } from 'react'
import {
  Phone, Calendar, Clock, CheckCircle2, ArrowLeft, ArrowRight, MapPin, Shield, DollarSign,
  BookOpen, Lightbulb, AlertTriangle, Info, ChevronRight, Share2, List, X
} from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

// Image mapping for blog posts
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()
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

// Table of Contents component for blogs
function TableOfContents({ headings, activeId }: { headings: { id: string; text: string; level: number }[]; activeId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile TOC Toggle */}
      <div className="lg:hidden fixed bottom-24 right-4 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#1B365D] border border-[#C5A572]/30 p-3 rounded-full shadow-lg shadow-black/20"
        >
          {isOpen ? <X className="w-5 h-5 text-[#C5A572]" /> : <List className="w-5 h-5 text-[#C5A572]" />}
        </motion.button>
      </div>

      {/* Mobile TOC Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="lg:hidden fixed bottom-40 right-4 z-40 w-72 bg-[#1B365D] border border-[#C5A572]/20 rounded-xl p-4 shadow-2xl max-h-[60vh] overflow-y-auto"
          >
            <h4 className="text-sm font-bold text-[#C5A572] mb-3 flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Table of Contents
            </h4>
            <nav className="space-y-1">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm py-1.5 transition-all ${
                    heading.level === 3 ? 'pl-4' : ''
                  } ${
                    activeId === heading.id
                      ? 'text-[#C5A572] font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop TOC Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-64 z-30"
      >
        <div className="bg-[#1B365D]/80 backdrop-blur-md border border-[#C5A572]/20 rounded-xl p-5">
          <h4 className="text-sm font-bold text-[#C5A572] mb-4 flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            In This Article
          </h4>
          <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm py-1.5 border-l-2 pl-3 transition-all ${
                  heading.level === 3 ? 'ml-2' : ''
                } ${
                  activeId === heading.id
                    ? 'border-[#C5A572] text-[#C5A572] font-medium bg-[#C5A572]/10'
                    : 'border-transparent text-white/50 hover:text-white hover:border-white/30'
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  )
}

// Callout box component
function CalloutBox({ type, title, children }: { type: 'tip' | 'warning' | 'info' | 'key'; title?: string; children: React.ReactNode }) {
  const config = {
    tip: { icon: Lightbulb, bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', iconColor: 'text-emerald-400', title: title || 'Pro Tip' },
    warning: { icon: AlertTriangle, bg: 'bg-amber-500/10', border: 'border-amber-500/30', iconColor: 'text-amber-400', title: title || 'Important' },
    info: { icon: Info, bg: 'bg-blue-500/10', border: 'border-blue-500/30', iconColor: 'text-blue-400', title: title || 'Good to Know' },
    key: { icon: CheckCircle2, bg: 'bg-[#C5A572]/10', border: 'border-[#C5A572]/30', iconColor: 'text-[#C5A572]', title: title || 'Key Takeaway' }
  }
  const { icon: Icon, bg, border, iconColor, title: defaultTitle } = config[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${bg} ${border} border rounded-xl p-5 my-8`}
    >
      <div className="flex items-start gap-4">
        <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-bold ${iconColor} mb-2`}>{defaultTitle}</h4>
          <div className="text-white/80 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = (SITE_CONTENT as any)[params.slug]
  const [activeHeading, setActiveHeading] = useState('')
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  // Reading progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (!data) {
    return notFound()
  }

  // Extract headings for TOC
  useEffect(() => {
    if (data.type !== 'blog') return

    const contentString = typeof data.content === 'string'
      ? data.content
      : Array.isArray(data.content)
      ? (data.content as string[]).join('\n')
      : ''

    const extractedHeadings: { id: string; text: string; level: number }[] = []
    const lines = contentString.split('\n')

    lines.forEach((line: string, index: number) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '')
        extractedHeadings.push({ id: `heading-${index}`, text, level: 2 })
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '')
        extractedHeadings.push({ id: `heading-${index}`, text, level: 3 })
      }
    })

    setHeadings(extractedHeadings)
  }, [data])

  // Track active heading
  useEffect(() => {
    if (data.type !== 'blog' || headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings, data.type])

  // Slug to image mapping
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

  // Content preparation
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
    if (trimmed.endsWith('*') && !trimmed.startsWith('**')) return false
    return true
  })

  // LocalBusiness schema for location pages
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
    "areaServed": { "@type": "City", "name": data.city || "Florida" },
    "priceRange": "$$",
    "image": `https://garrisonpointsolutions.com${heroImage}`
  } : null

  // Render content with enhanced formatting
  const renderContent = () => {
    let headingIndex = -1

    return contentParagraphs.map((paragraph: string, index: number) => {
      // H2 headings
      if (paragraph.startsWith('## ')) {
        headingIndex++
        const headingId = `heading-${rawLines.findIndex((l: string) => l === paragraph)}`
        return (
          <motion.h2
            key={index}
            id={headingId}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 flex items-center gap-4 scroll-mt-24"
          >
            <span className="w-1.5 h-10 bg-gradient-to-b from-[#B8860B] to-[#C5A572] rounded-full" />
            {paragraph.replace('## ', '')}
          </motion.h2>
        )
      }

      // H3 headings
      if (paragraph.startsWith('### ')) {
        const headingId = `heading-${rawLines.findIndex((l: string) => l === paragraph)}`
        return (
          <motion.h3
            key={index}
            id={headingId}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl font-bold text-[#C5A572] mt-10 mb-4 scroll-mt-24"
          >
            {paragraph.replace('### ', '')}
          </motion.h3>
        )
      }

      // Tables (detect markdown table format)
      if (paragraph.includes('|') && paragraph.trim().startsWith('|')) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-8 overflow-x-auto"
          >
            <div className="bg-[#1B365D]/50 rounded-xl border border-[#C5A572]/20 p-1">
              <table className="w-full text-sm">
                <tbody>
                  {paragraph.split('\n').filter(row => row.trim() && !row.includes('---')).map((row, rowIndex) => {
                    const cells = row.split('|').filter(cell => cell.trim())
                    const isHeader = rowIndex === 0
                    return (
                      <tr key={rowIndex} className={isHeader ? 'bg-[#C5A572]/10' : 'border-t border-[#C5A572]/10'}>
                        {cells.map((cell, cellIndex) => (
                          isHeader ? (
                            <th key={cellIndex} className="px-4 py-3 text-left text-[#C5A572] font-bold">
                              {cell.trim()}
                            </th>
                          ) : (
                            <td key={cellIndex} className="px-4 py-3 text-white/70">
                              {cell.trim()}
                            </td>
                          )
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )
      }

      // Bullet points
      if (paragraph.trim().startsWith('- ')) {
        const text = paragraph.replace(/^\-\s*/, '')
        // Check if it's a multi-line bullet with sub-items
        if (text.includes('\n')) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-3"
            >
              {text.split('\n').map((line, lineIndex) => (
                <div key={lineIndex} className="flex items-start gap-3 mb-2 bg-[#1B365D]/30 p-3 rounded-lg border border-[#C5A572]/10">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80" dangerouslySetInnerHTML={{ __html: formatText(line) }} />
                </div>
              ))}
            </motion.div>
          )
        }
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex items-start gap-3 mb-3 bg-[#1B365D]/30 p-4 rounded-lg border border-[#C5A572]/10 hover:border-[#C5A572]/30 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatText(text) }} />
          </motion.div>
        )
      }

      // Regular paragraphs
      if (paragraph.trim().length > 0) {
        // Check for special formatting hints
        const isKeyPoint = paragraph.toLowerCase().includes('important:') || paragraph.toLowerCase().includes('key takeaway:')
        const isExample = paragraph.toLowerCase().startsWith('**example')
        const isCalculation = paragraph.includes('**calculation:**') || paragraph.includes('**the math:**')

        if (isKeyPoint) {
          return (
            <CalloutBox key={index} type="key">
              <span dangerouslySetInnerHTML={{ __html: formatText(paragraph) }} />
            </CalloutBox>
          )
        }

        if (isExample || isCalculation) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#1B365D]/80 to-[#1B365D]/40 p-6 rounded-xl border-l-4 border-[#C5A572] my-6"
            >
              <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatText(paragraph) }} />
            </motion.div>
          )
        }

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="leading-8 mb-6 text-white/80"
            dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
          />
        )
      }

      return null
    })
  }

  // Format text with bold, etc.
  const formatText = (text: string) => {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="text-[#C5A572]">$1</em>')
  }

  return (
    <>
      {localBusinessSchema && (
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}

      {/* Reading Progress Bar */}
      {data.type === 'blog' && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] origin-left z-50"
        />
      )}

      <main className="bg-[#0F1C2E] min-h-screen overflow-hidden">
        {/* Back link */}
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

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-4">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt={data.h1 || 'Real Estate Guide'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/90 via-[#0F1C2E]/75 to-[#0F1C2E]" />
          </motion.div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
            >
              {data.type === 'blog' ? (
                <>
                  <Calendar className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">GUIDE</span>
                  <span className="w-1 h-1 bg-[#C5A572] rounded-full" />
                  <Clock className="w-4 h-4 text-[#C5A572]" />
                  <span className="text-sm font-bold text-[#C5A572] tracking-wider">
                    {Math.ceil(contentParagraphs.length / 8)} MIN READ
                  </span>
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

            {/* Scroll indicator for blogs */}
            {data.type === 'blog' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-12"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-flex flex-col items-center text-white/50"
                >
                  <span className="text-xs mb-2">Scroll to read</span>
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Quick Stats for non-blog pages */}
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
                  <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="cursor-default">
                    <div className="text-3xl md:text-4xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Table of Contents for blogs */}
        {data.type === 'blog' && headings.length > 3 && (
          <TableOfContents headings={headings} activeId={activeHeading} />
        )}

        {/* CONTENT SECTION */}
        <section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${data.type === 'blog' ? 'lg:mr-80' : ''}`}>
          <motion.article
            ref={contentRef}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="prose prose-lg prose-invert max-w-none"
          >
            {data.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mb-12"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C5A572] to-transparent rounded-full" />
                <p className="text-xl text-white/80 leading-relaxed font-medium pl-6 italic">
                  {data.description}
                </p>
              </motion.div>
            )}

            {/* Main Content */}
            <div className="space-y-2">
              {contentParagraphs.length > 0 ? (
                renderContent()
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="p-8 bg-[#1B365D] border border-[#C5A572]/20 rounded-xl text-center"
                >
                  <p className="text-white/70 italic mb-4">
                    The full content for this article is being updated.
                  </p>
                  <p className="text-white mt-4 font-medium">{data.description}</p>
                </motion.div>
              )}
            </div>
          </motion.article>

          {/* Share Section for blogs */}
          {data.type === 'blog' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-[#C5A572]/20"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/50">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share this article</span>
                </div>
                <div className="flex gap-3">
                  {/* Share buttons would go here */}
                </div>
              </div>
            </motion.div>
          )}

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
              <motion.div variants={scaleIn}>
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
