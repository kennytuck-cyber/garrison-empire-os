import Link from 'next/link'
import { SITE_CONTENT } from '@/lib/siteContent'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}

// Map slugs to your specific uploaded images
const BLOG_IMAGES: Record<string, string> = {
  'pre-foreclosure-options': '/images/deal-forclosure-cash-closing-title-florida--2.webp',
  'how-much-cash-buyers-pay': '/images/cash-offer-home-selling-buying-real-estate-florida.jpg',
  'selling-house-code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp',
  'how-fast-sell-cash': '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg',
  'mortgage-investor-sale': '/images/real-estate-cash-buy-sell-offer-florida-home.jpg',
  'sell-as-is-vs-fix': '/images/home-cash-sell-offer-buy-real-estate-florida-property.jpg',
  'hidden-costs-realtor': '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp',
  'pre-foreclosure-vs-foreclosure': '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp',
  'divorce-home-sale': '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg',
  'sell-inherited-house-florida': '/images/home-inheritance-inherited-estate-probate-family.jpg',
  // Fallbacks for other potential slugs
  'cash-buyers-vs-agents': '/images/cash-offer-home-selling-buying-real-estate-florida.jpg',
  'sell-house-during-divorce': '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg',
  'sell-house-pre-foreclosure': '/images/deal-forclosure-cash-closing-title-florida--2.webp',
  'sell-house-with-code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp'
}

// Default image if a slug doesn't match anything
const DEFAULT_IMAGE = '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'

export default function BlogIndex() {
  // Filter content to only show blog posts
  const posts = Object.entries(SITE_CONTENT).filter(([_, data]) => data.type === 'blog')

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
          {posts.map(([slug, post]) => {
            // Determine which image to use
            const imagePath = BLOG_IMAGES[slug] || DEFAULT_IMAGE
            
            return (
              <Link key={slug} href={`/${slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
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
                    <Calendar className="w-3 h-3 mr-1" />
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
