import Link from 'next/link'
import { SITE_CONTENT } from '@/lib/siteContent'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'

export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}

// 1. EXACT IMAGE MAPPING
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()

  // 1. Inherited House
  if (t.includes('inherited')) {
    return '/images/home-inheritance-inherited-estate-probate-family.webp'
  }
  // 2. Mortgage / Investor
  if (t.includes('mortgage') && t.includes('investor')) {
    return '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
  }
  // 3. As-Is vs Fix
  if (t.includes('as-is') || t.includes('fix it up')) {
    return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  }
  // 4. Pre-Foreclosure Options
  if (t.includes('pre-foreclosure') && t.includes('options')) {
    return '/images/deal-forclosure-cash-closing-title-florida--2.webp' 
  }
  // 5. How Much Cash Buyers Pay
  if (t.includes('how much') && t.includes('cash home buyers')) {
    return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  }
  // 6. Cash Buyers vs Agents
  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) {
    return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  }
  // 7. Code Violations
  if (t.includes('code violations')) {
    return '/images/code-violations-home-sell-cash-offer-florida-hoa.webp'
  }
  // 8. How Fast Can You Sell
  if (t.includes('how fast can you sell')) {
    return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  }
  // 9. Hidden Costs Realtor
  if (t.includes('hidden costs') && t.includes('realtor')) {
    return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  }
  // 10. Pre-Foreclosure vs Foreclosure
  if (t.includes('pre-foreclosure vs foreclosure')) {
    return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
  }
  // 11. Divorce
  if (t.includes('divorce')) {
    return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  }
  // 12. We Buy Houses Fort Myers
  if (t.includes('fort myers') && t.includes('expect')) {
    return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
  }

  // Fallback default image
  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
}

export default function BlogIndex() {
  // Filter content to only show blog posts
  // Cast SITE_CONTENT to any to avoid TypeScript indexing errors
  const posts = Object.entries(SITE_CONTENT as any).filter(([_, data]: [string, any]) => data.type === 'blog')

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-[#0F1C2E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert guidance for Florida homeowners navigating complex property situations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(([slug, post]: [string, any]) => {
            // Get the correct image based on the post title
            const imagePath = getImageForPost(post.h1 || post.title || '')
            
            return (
              <Link key={slug} href={`/${slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-[#0F1C2E]/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={imagePath} 
                    alt={post.h1} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-[#C5A572] font-semibold uppercase tracking-wider mb-3">
                    <BookOpen className="w-3 h-3 mr-1" />
                    <span>Guide</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>5 min read</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0F1C2E] mb-3 group-hover:text-[#C5A572] transition-colors line-clamp-2">
                    {post.h1}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-[#0F1C2E] font-semibold text-sm uppercase tracking-wide mt-auto group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 text-[#C5A572]" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
