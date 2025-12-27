"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Search } from 'lucide-react'

/**
 * BlogSearch component
 *
 * This client component receives a list of blog posts and a function to map
 * post titles to image paths. It provides a search input for filtering posts
 * by title or description and renders the filtered list of cards.
 */
export default function BlogSearch({ posts }: { posts: [string, any][] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredPosts = posts.filter(([_, post]) => {
    const title = (post.h1 || post.title || '').toLowerCase()
    const desc = (post.description || '').toLowerCase()
    return title.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase())
  })

  return (
    <>
      {/* Search bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-[#1B365D] border border-[#C5A572]/20 text-white placeholder-white/50 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
          />
          <Search className="w-5 h-5 text-[#C5A572] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(([slug, post]) => {
            // Determine the correct image path based on the post title.
            const t = (post.h1 || post.title || '').toLowerCase()
            let imagePath = '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
            if (t.includes('how much') && t.includes('cash home buyers')) imagePath = '/images/cash-buyer-home-florida-paid-sell.jpg'
            else if (t.includes('inherited')) imagePath = '/images/home-inheritance-inherited-estate-probate-family.webp'
            else if (t.includes('mortgage') && t.includes('investor')) imagePath = '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
            else if (t.includes('as-is') || t.includes('fix it up')) imagePath = '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
            else if (t.includes('pre-foreclosure') && t.includes('options')) imagePath = '/images/deal-forclosure-cash-closing-title-florida--2.webp'
            else if (t.includes('code violations')) imagePath = '/images/selling-house-with-code-violations-florida.jpg'
            else if (t.includes('hidden costs') && t.includes('realtor')) imagePath = '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
            else if (t.includes('pre-foreclosure vs foreclosure')) imagePath = '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
            else if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) imagePath = '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
            else if (t.includes('how fast can you sell')) imagePath = '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
            else if (t.includes('divorce')) imagePath = '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
            else if (t.includes('fort myers') && t.includes('expect')) imagePath = '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group bg-[#1B365D] border border-[#C5A572]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#C5A572]/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
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
    </>
  )
}