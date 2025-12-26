import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, Calendar, Clock, CheckCircle2 } from 'lucide-react'
import LeadConcierge from '@/components/LeadConcierge'

// 1. EXACT IMAGE MAPPING (Matches your uploaded files)
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()

  // --- WEBP FILES (Based on your screenshot) ---
  if (t.includes('pre-foreclosure') && t.includes('options')) {
    return '/images/deal-forclosure-cash-closing-title-florida--2.webp' 
  }
  if (t.includes('code violations')) {
    return '/images/code-violations-home-sell-cash-offer-florida-hoa.webp' 
  }
  if (t.includes('hidden costs') && t.includes('realtor')) {
    return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  }
  if (t.includes('pre-foreclosure vs foreclosure')) {
    return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
  }
  // This might be .webp or .jpg depending on the specific file, defaulting to .webp based on your note
  if (t.includes('inherited')) {
    return '/images/home-inheritance-inherited-estate-probate-family.webp' 
  }
  if (t.includes('as-is') || t.includes('fix it up')) {
    return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  }
  
  // --- JPG FILES ---
  if (t.includes('how much') && t.includes('cash home buyers')) {
    return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  }
  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) {
    // Reusing the cash offer image or similar suitable image
    return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  }
  if (t.includes('how fast can you sell')) {
    return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  }
  if (t.includes('mortgage') && t.includes('investor')) {
    return '/images/real-estate-cash-buy-sell-offer-florida-home.jpg'
  }
  if (t.includes('divorce')) {
    return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  }
  // Fort Myers specific
  if (t.includes('fort myers') && t.includes('expect')) {
    return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
  }

  // Fallback default image
  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Cast to any to avoid TypeScript strict indexing errors
  const data = (SITE_CONTENT as any)[params.slug]
  
  if (!data) return { title: 'Page Not Found' }
  
  return {
    title: `${data.h1} | Garrison Point Solutions`,
    description: data.description,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  // 1. Get Data Safely
  const data = (SITE_CONTENT as any)[params.slug]

  // 2. Handle 404 if slug doesn't exist
  if (!data) {
    return notFound()
  }

  // 3. Determine Image
  const heroImage = getImageForPost(data.h1 || '')

  // 4. Safely Prepare Content (Prevent crash if content is missing)
  const contentString = typeof data.content === 'string' ? data.content : ''
  const contentParagraphs = contentString ? contentString.split('\n') : []

  return (
    <main className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <LeadConcierge />
              <a href="tel:2392913444" className="bg-white text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> (239) 291-3444
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <article className="prose prose-lg prose-slate max-w-none">
          {/* Intro Paragraph */}
          {data.description && (
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium border-l-4 border-[#C5A572] pl-6 italic">
              {data.description}
            </p>
          )}

          {/* Main Content */}
          <div className="space-y-8 text-gray-800">
            {contentParagraphs.length > 0 ? (
              contentParagraphs.map((paragraph: string, index: number) => {
                // Formatting checks
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold text-[#0F1C2E] mt-12 mb-6">{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-[#0F1C2E] mt-8 mb-4">{paragraph.replace('### ', '')}</h3>
                }
                if (paragraph.trim().startsWith('- ')) {
                  return (
                    <div key={index} className="flex items-start gap-3 mb-4 ml-4">
                      <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{paragraph.replace('- ', '')}</p>
                    </div>
                  )
                }
                if (paragraph.trim().length > 0) {
                  return <p key={index} className="leading-8 mb-6">{paragraph}</p>
                }
                return null
              })
            ) : (
              <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg text-center">
                <p className="text-gray-500 italic">Content is currently being updated for this article.</p>
              </div>
            )}
          </div>
        </article>

        {/* CTA Footer for Blog Posts */}
        <div className="mt-20 bg-[#F5F7FA] rounded-2xl p-10 border border-[#C5A572]/20 text-center">
          <h3 className="text-2xl font-bold text-[#0F1C2E] mb-4">Need help with your property?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We buy houses in any condition. Get a fair cash offer today without the hassle of repairs or fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-[#0F1C2E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1a2b42] transition-colors">
              Get A Cash Offer
            </Link>
            <a href="tel:2392913444" className="bg-white border border-[#0F1C2E]/10 text-[#0F1C2E] px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
