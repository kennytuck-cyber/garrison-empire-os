import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, Calendar, Clock, CheckCircle2, ArrowLeft } from 'lucide-react'

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = (SITE_CONTENT as any)[params.slug]
  if (!data) return { title: 'Page Not Found' }
  
  return {
    title: `${data.h1} | Garrison Point Solutions`,
    description: data.description,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = (SITE_CONTENT as any)[params.slug]

  if (!data) {
    return notFound()
  }

  // Map slugs to specific hero images for markets and situations.  This
  // ensures each location or situation page uses the same photo as its
  // corresponding card on the homepage.
  const slugToImage: Record<string, string> = {
    'sell-house-fast-orlando': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
    'cash-home-buyers-polk-county': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
    'sell-house-fast-fort-myers': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
    'cash-home-buyers-lee-county': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
    'sell-house-fast-south-florida': '/images/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg',
    'foreclosure-help': '/images/deal-forclosure-cash-closing-title-florida--2.webp',
    'code-violations': '/images/selling-house-with-code-violations-florida.jpg',
    'sell-house-with-code-violations': '/images/selling-house-with-code-violations-florida.jpg',
    'military-relocation': '/images/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg',
    'probate-help': '/images/home-inheritance-inherited-estate-probate-family.webp',
    'divorce-sale': '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg',
    'sell-damaged-house': '/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG'
  }
  const heroImage = slugToImage[params.slug] ?? getImageForPost(data.h1 || '')

  // 2. CONTENT PREPARATION
  // Join array content into a single string and filter out meta lines (H1 and keyword tags).
  const contentString = typeof data.content === 'string'
    ? data.content
    : Array.isArray(data.content)
    ? (data.content as string[]).join('\n')
    : ''
  // Split into lines and remove empty lines, metadata (H1 labels) and keyword/tag lines ending with '*'.
  const rawLines = contentString.split('\n')
  const contentParagraphs = rawLines.filter((line: string) => {
    const trimmed = line.trim()
    if (!trimmed) return false
    if (/^H1:/i.test(trimmed)) return false
    if (trimmed.endsWith('*')) return false
    return true
  })

  return (
    // UPDATED: Changed background to dark blue
    <main className="bg-[#0F1C2E] min-h-screen">
      {/* Back to Home link for easy navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-white/70 hover:text-[#C5A572] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back Home
        </Link>
      </div>
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={data.h1 || 'Real Estate Guide'} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1C2E]/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {data.type === 'blog' && (
            <div className="flex items-center justify-center gap-4 text-[#C5A572] text-sm font-bold uppercase tracking-wider mb-6">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Guide</span>
              <span className="w-1 h-1 bg-[#C5A572] rounded-full" />
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {data.h1}
          </h1>
          
          {data.type !== 'blog' && (
            <div className="flex justify-center mt-8">
              <a href="tel:2392913444" className="bg-white text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> (239) 291-3444
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* UPDATED: Changed prose class for light text on dark background */}
        <article className="prose prose-lg prose-invert max-w-none">
          {data.description && (
            <p className="text-xl text-white/80 leading-relaxed mb-12 font-medium border-l-4 border-[#C5A572] pl-6 italic">
              {data.description}
            </p>
          )}

          {/* Main Content */}
          <div className="space-y-8 text-white/90">
            {contentParagraphs.length > 0 ? (
              contentParagraphs.map((paragraph: string, index: number) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.replace('### ', '')}</h3>
                }
                if (paragraph.trim().startsWith('- ')) {
                  // Remove the leading dash and any bold markers for list items
                  const text = paragraph.replace(/^\-\s*/, '').replace(/\*\*/g, '')
                  return (
                    <div key={index} className="flex items-start gap-3 mb-4 ml-4">
                      <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                      <p className="text-white/80 leading-relaxed">{text}</p>
                    </div>
                  )
                }
                if (paragraph.trim().length > 0) {
                  // Strip any remaining bold markers from regular paragraphs
                  const text = paragraph.replace(/\*\*/g, '')
                  return <p key={index} className="leading-8 mb-6">{text}</p>
                }
                return null
              })
            ) : (
              // Fallback if content is missing
              <div className="p-8 bg-[#1B365D] border border-[#C5A572]/20 rounded-lg text-center">
                <p className="text-white/70 italic mb-4">
                  The full content for this article is being updated.
                </p>
                <p className="text-white/70">
                  In the meantime, here is a summary:
                </p>
                <p className="text-white mt-4 font-medium">{data.description}</p>
              </div>
            )}
          </div>
        </article>

        {/* CTA Footer for Blog Posts */}
        <div className="mt-20 bg-[#1B365D] rounded-2xl p-10 border border-[#C5A572]/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need help with your property?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            We buy houses in any condition. Get a fair cash offer today without the hassle of repairs or fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded-lg font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-colors">
              Get A Cash Offer
            </Link>
            <a href="tel:2392913444" className="bg-transparent border border-[#C5A572] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#C5A572]/10 transition-colors flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
