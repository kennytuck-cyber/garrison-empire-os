import Link from 'next/link'
import { SITE_CONTENT } from '@/lib/siteContent'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'

export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}

// 1. EXACT IMAGE MAPPING (Matches your uploaded files)
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()

  // Use the correct image for the “How Much Do Cash Home Buyers Pay?” article.  This matches
  // the filename provided in the project’s public/images folder. Without this override the
  // blog card will default to a generic money image which caused the missing thumbnail.
  if (t.includes('how much') && t.includes('cash home buyers')) return '/images/cash-buyer-home-florida-paid-sell.jpg'

  // --- WEBP FILES ---
  if (t.includes('inherited')) return '/images/home-inheritance-inherited-estate-probate-family.webp'
  if (t.includes('mortgage') && t.includes('investor')) return '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
  if (t.includes('as-is') || t.includes('fix it up')) return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  if (t.includes('pre-foreclosure') && t.includes('options')) return '/images/deal-forclosure-cash-closing-title-florida--2.webp' 
  if (t.includes('code violations')) return '/images/code-violations-home-sell-cash-offer-florida-hoa.webp'
  if (t.includes('hidden costs') && t.includes('realtor')) return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  if (t.includes('pre-foreclosure vs foreclosure')) return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
  
  // --- JPG FILES ---
  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  if (t.includes('how fast can you sell')) return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  if (t.includes('divorce')) return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  if (t.includes('fort myers') && t.includes('expect')) return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'

  // Fallback
  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
}

export default function BlogIndex() {
  // Filter content to only show blog posts
  const posts = Object.entries(SITE_CONTENT as any).filter(([_, data]: [string, any]) => data.type === 'blog')

  return (
    // UPDATED: Changed background to dark blue
    <div className="min-h-screen bg-[#0F1C2E]">
      <div className="py-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(([slug, post]: [string, any]) => {
            const imagePath = getImageForPost(post.h1 || post.title || '')
            
            return (
              // UPDATED: Card background and text colors for dark mode
              <Link key={slug} href={`/${slug}`} className="group bg-[#1B365D] border border-[#C5A572]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#C5A572]/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-[#0F1C2E]">
                  <div className="absolute inset-0 bg-[#0F1C2E]/30 group-hover:bg-transparent transition-colors z-10" />
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

                  {/* UPDATED: Title color */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5A572] transition-colors line-clamp-2">
                    {post.h1}
                  </h2>
                  
                  {/* UPDATED: Description color */}
                  <p className="text-white/70 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-white font-semibold text-sm uppercase tracking-wide mt-auto group-hover:translate-x-2 transition-transform">
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
