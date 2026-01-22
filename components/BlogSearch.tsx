"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Search, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: { duration: 0.3 }
  }
}

/**
 * BlogSearch component
 *
 * This client component receives a list of blog posts and a function to map
 * post titles to image paths. It provides a search input for filtering posts
 * by title or description and renders the filtered list of cards.
 */
export default function BlogSearch({ posts }: { posts: [string, any][] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const filteredPosts = posts.filter(([_, post]) => {
    const title = (post.h1 || post.title || '').toLowerCase()
    const desc = (post.description || '').toLowerCase()
    return title.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase())
  })

  // Calculate reading time based on content length
  const getReadingTime = (post: any) => {
    const content = typeof post.content === 'string'
      ? post.content
      : Array.isArray(post.content)
      ? post.content.join(' ')
      : ''
    const wordCount = content.split(/\s+/).length
    return Math.max(3, Math.ceil(wordCount / 200))
  }

  return (
    <>
      {/* Search bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow effect on focus */}
          <motion.div
            animate={{
              opacity: isFocused ? 1 : 0,
              scale: isFocused ? 1 : 0.95
            }}
            className="absolute -inset-1 bg-gradient-to-r from-[#B8860B]/20 to-[#C5A572]/20 rounded-2xl blur-lg"
          />

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search articles..."
              className="w-full bg-[#1B365D] border border-[#C5A572]/20 text-white placeholder-white/50 rounded-xl py-4 pl-14 pr-12 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 focus:border-transparent transition-all text-lg"
            />
            <Search className={`w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isFocused ? 'text-[#C5A572]' : 'text-white/40'}`} />
            <AnimatePresence>
              {searchTerm && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white/70" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Search Results Count */}
        <AnimatePresence>
          {searchTerm && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white/50 text-sm mt-3 text-center"
            >
              Found <span className="text-[#C5A572] font-semibold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'} matching "{searchTerm}"
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map(([slug, post], index) => {
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

              const readingTime = getReadingTime(post)

              return (
                <motion.div
                  key={slug}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group"
                >
                  <Link
                    href={`/${slug}`}
                    className="relative bg-[#1B365D]/80 backdrop-blur-sm border border-[#C5A572]/20 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A572]/10 hover:border-[#C5A572]/40"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C5A572]/0 to-[#C5A572]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden bg-[#0F1C2E]">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <img
                          src={imagePath}
                          alt={post.h1}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D] via-[#1B365D]/20 to-transparent" />

                      {/* Floating tag */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-[#0F1C2E]/80 backdrop-blur-sm text-[#C5A572] text-xs font-bold px-3 py-1.5 rounded-full border border-[#C5A572]/20">
                          Guide
                        </span>
                      </div>

                      {/* Reading time badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#0F1C2E]/80 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {readingTime} min
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5A572] transition-colors duration-300 line-clamp-2">
                        {post.h1}
                      </h2>

                      <p className="text-white/60 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#C5A572]/10">
                        <div className="flex items-center text-sm text-white/40">
                          <BookOpen className="w-4 h-4 mr-1.5" />
                          <span>Full Article</span>
                        </div>

                        <motion.div
                          className="flex items-center text-[#C5A572] font-semibold text-sm"
                          whileHover={{ x: 5 }}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom gradient line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results State */}
        <AnimatePresence>
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Search className="w-20 h-20 text-[#C5A572]/20 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">No articles found</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                We couldn't find any articles matching "<span className="text-[#C5A572]">{searchTerm}</span>". Try a different search term or browse all articles.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded-lg font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View All Articles
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
