'use client'

import BlogSearch from '@/components/BlogSearch'
import { SITE_CONTENT } from '@/lib/siteContent'
import { motion } from 'framer-motion'
import { BookOpen, Phone, ArrowRight, FileText, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

export default function BlogPage() {
  // Filter content to only include blog posts
  const posts = Object.entries(SITE_CONTENT as any).filter(([_slug, data]: [string, any]) => data.type === 'blog')

  // Get featured post (first one or a specific one)
  const featuredPost = posts[0]

  return (
    <div className="min-h-screen bg-[#0F1C2E] overflow-hidden">
      {/* Hero Section with Zoom Animation */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/florida-home-cash-real-estate-sell-buy-fas-2.webp"
            alt="Florida real estate blog and resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/90 via-[#0F1C2E]/80 to-[#0F1C2E]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#C5A572]/20 border border-[#C5A572]/30 px-5 py-2.5 rounded-full mb-8"
          >
            <BookOpen className="w-5 h-5 text-[#C5A572]" />
            <span className="text-sm font-bold text-[#C5A572] tracking-wider">KNOWLEDGE BASE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Real Estate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#D4B896]">Resources</span>
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
            <a href="#articles" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center group">
              Browse Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/#contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center"
            >
              Get a Cash Offer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B365D]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: `${posts.length}+`, label: "Expert Articles", icon: FileText },
              { number: "Free", label: "Always", icon: BookOpen },
              { number: "Local", label: "Florida Focus", icon: TrendingUp },
              { number: "Expert", label: "Advice", icon: Users }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-[#C5A572] mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-[#C5A572] mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">Featured Article</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                  Start Here
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href={`/${featuredPost[0]}`}
                  className="group block bg-gradient-to-r from-[#1B365D] to-[#1B365D]/80 border border-[#C5A572]/20 rounded-2xl overflow-hidden hover:border-[#C5A572]/50 transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src="/images/cash-buyer-home-florida-paid-sell.jpg"
                        alt={(featuredPost[1] as any).h1}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1B365D]/50" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center text-xs text-[#C5A572] font-semibold uppercase tracking-wider mb-4">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>Featured Guide</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#C5A572] transition-colors">
                        {(featuredPost[1] as any).h1}
                      </h3>
                      <p className="text-white/70 mb-6 text-lg leading-relaxed">
                        {(featuredPost[1] as any).description}
                      </p>
                      <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                        Read Full Article <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Topic Categories */}
      <section className="py-16 bg-[#1B365D]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8">
              Browse by Topic
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {[
                "Foreclosure",
                "Inherited Property",
                "Divorce",
                "Code Violations",
                "Selling As-Is",
                "Cash Offers",
                "Fort Myers",
                "Florida Real Estate"
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-full text-white/70 text-sm hover:border-[#C5A572]/50 hover:text-[#C5A572] cursor-pointer transition-all"
                >
                  {topic}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Articles Section */}
      <section id="articles" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-[#C5A572] font-semibold tracking-wider uppercase text-sm">
              All Articles
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mt-4">
              Explore Our Guides
            </motion.h2>
          </motion.div>
        </div>

        {/* Searchable blog grid */}
        <BlogSearch posts={posts} />
      </section>

      {/* Parallax CTA Banner */}
      <section
        className="relative py-32 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-estate-cash-buy-sell-offer-florida-home.webp')" }}
      >
        <div className="absolute inset-0 bg-[#0F1C2E]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Phone className="w-16 h-16 text-[#C5A572] mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Take Action?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Reading about it is the first step. Getting a free, no-obligation cash offer is the second. Let's discuss your situation.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-10 py-4 rounded-lg font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center group"
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
