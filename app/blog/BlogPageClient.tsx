'use client'

import { useState, useRef } from 'react'
import BlogSearch from '@/components/BlogSearch'
import { SITE_CONTENT } from '@/lib/siteContent'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { BookOpen, Phone, ArrowRight, ArrowDown, FileText, Users, TrendingUp, Sparkles, ChevronRight, Clock, Star } from 'lucide-react'
import Link from 'next/link'

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

// Topic configuration with keywords for filtering
const TOPICS = [
  { label: "Foreclosure", keywords: ["foreclosure", "pre-foreclosure"], icon: "🏠" },
  { label: "Inherited Property", keywords: ["inherited", "probate", "estate"], icon: "📜" },
  { label: "Divorce", keywords: ["divorce"], icon: "⚖️" },
  { label: "Code Violations", keywords: ["code violation", "violations"], icon: "📋" },
  { label: "Selling As-Is", keywords: ["as-is", "repairs", "condition"], icon: "🔧" },
  { label: "Cash Offers", keywords: ["cash", "buyer", "offer"], icon: "💰" },
  { label: "Fort Myers", keywords: ["fort myers", "lee county"], icon: "🌴" },
  { label: "Florida Real Estate", keywords: ["florida", "real estate"], icon: "🏡" }
]

export default function BlogPageClient() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const articlesRef = useRef<HTMLElement>(null)

  // Filter content to only include blog posts
  const allPosts = Object.entries(SITE_CONTENT as any).filter(([_slug, data]: [string, any]) => data.type === 'blog')

  // Filter posts by selected topic
  const posts = selectedTopic
    ? allPosts.filter(([_, post]: [string, any]) => {
        const topic = TOPICS.find(t => t.label === selectedTopic)
        if (!topic) return true
        const title = (post.h1 || '').toLowerCase()
        const desc = (post.description || '').toLowerCase()
        const content = typeof post.content === 'string' ? post.content.toLowerCase() : ''
        return topic.keywords.some(keyword =>
          title.includes(keyword) || desc.includes(keyword) || content.includes(keyword)
        )
      })
    : allPosts

  // Get featured post (first one or a specific one)
  const featuredPost = allPosts[0]

  // Parallax effect for hero
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToArticles = () => {
    articlesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTopicClick = (topic: string) => {
    if (selectedTopic === topic) {
      setSelectedTopic(null)
    } else {
      setSelectedTopic(topic)
      setTimeout(() => scrollToArticles(), 100)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1C2E] overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/images/florida-home-cash-real-estate-sell-buy-fas-2.webp"
            alt="Florida real estate blog and resources"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/95 via-[#0F1C2E]/80 to-[#0F1C2E]" />
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#C5A572]/20 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: '100%',
                opacity: 0
              }}
              animate={{
                y: '-100%',
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572] tracking-wider">KNOWLEDGE BASE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Real Estate{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Resources</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] to-[#C5A572] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
          >
            Expert guidance for Florida homeowners navigating complex property situations. Free, actionable advice you can use today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(181, 134, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToArticles}
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center group"
            >
              Browse Articles
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center"
              >
                Get a Cash Offer
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex flex-col items-center text-white/40 cursor-pointer"
              onClick={scrollToArticles}
            >
              <span className="text-xs mb-2">Explore articles</span>
              <ChevronRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B365D] relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A572]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: `${allPosts.length}+`, label: "Expert Articles", icon: FileText },
              { number: "Free", label: "Always", icon: BookOpen },
              { number: "Local", label: "Florida Focus", icon: TrendingUp },
              { number: "Expert", label: "Advice", icon: Users }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center cursor-default group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-[#C5A572] mb-3 group-hover:text-[#D4B896] transition-colors" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-[#C5A572] mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-24 relative">
          {/* Background accent */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-[#C5A572]/5 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[#C5A572]" />
                  <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Featured Article</span>
                  <Star className="w-5 h-5 text-[#C5A572]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Start Here
                </h2>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Link
                  href={`/${featuredPost[0]}`}
                  className="group block relative bg-gradient-to-r from-[#1B365D] to-[#1B365D]/80 border border-[#C5A572]/20 rounded-2xl overflow-hidden hover:border-[#C5A572]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A572]/10"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C5A572]/0 via-[#C5A572]/5 to-[#C5A572]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-auto overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                        src="/images/cash-buyer-home-florida-paid-sell.jpg"
                        alt={(featuredPost[1] as any).h1}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1B365D]/60 md:to-[#1B365D]" />

                      {/* Featured badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center relative">
                      <div className="flex items-center text-xs text-[#C5A572] font-semibold uppercase tracking-wider mb-4">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>Comprehensive Guide</span>
                        <span className="mx-3 w-1 h-1 bg-[#C5A572] rounded-full" />
                        <Clock className="w-4 h-4 mr-1" />
                        <span>8 min read</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#C5A572] transition-colors duration-300">
                        {(featuredPost[1] as any).h1}
                      </h3>
                      <p className="text-white/70 mb-8 text-lg leading-relaxed">
                        {(featuredPost[1] as any).description}
                      </p>
                      <motion.div
                        className="flex items-center text-[#C5A572] font-semibold"
                        whileHover={{ x: 10 }}
                      >
                        Read Full Article
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Topic Categories */}
      <section className="py-20 bg-gradient-to-b from-[#1B365D]/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Browse by Topic
              </h2>
              <p className="text-white/60">Click a topic to filter articles</p>
            </motion.div>

            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
              {TOPICS.map((topic, i) => (
                <motion.button
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTopicClick(topic.label)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                    selectedTopic === topic.label
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] shadow-lg shadow-[#C5A572]/20'
                      : 'bg-[#0F1C2E] border border-[#C5A572]/20 text-white/70 hover:border-[#C5A572]/50 hover:text-[#C5A572]'
                  }`}
                >
                  <span>{topic.icon}</span>
                  {topic.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Active filter indicator */}
            <AnimatePresence>
              {selectedTopic && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6"
                >
                  <span className="text-white/50 text-sm">
                    Showing articles about <span className="text-[#C5A572] font-semibold">{selectedTopic}</span>
                    {' • '}
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-[#C5A572] hover:text-[#D4B896] underline"
                    >
                      Clear filter
                    </button>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* All Articles Section */}
      <section id="articles" ref={articlesRef} className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">
              {selectedTopic ? `${selectedTopic} Articles` : 'All Articles'}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mt-4">
              Explore Our Guides
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 mt-4 max-w-2xl mx-auto">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} to help you navigate your real estate situation
            </motion.p>
          </motion.div>
        </div>

        {/* Searchable blog grid */}
        <BlogSearch posts={posts} />
      </section>

      {/* Parallax CTA Banner */}
      <section
        className="relative py-32 overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/real-estate-cash-buy-sell-offer-florida-home.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-[#0F1C2E]/90" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#C5A572]/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#C5A572]/10 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-2xl mb-8 shadow-xl shadow-[#C5A572]/20"
            >
              <Phone className="w-10 h-10 text-[#0F1C2E]" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Take Action?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Reading about it is the first step. Getting a free, no-obligation cash offer is the second. Let's discuss your situation.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group shadow-xl shadow-[#C5A572]/20"
                >
                  Get My Cash Offer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:2392913444"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (239) 291-3444
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
