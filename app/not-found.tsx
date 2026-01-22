'use client'
import Link from 'next/link'
import { Home, Phone, Search, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="bg-[#0F1C2E] text-white min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-2xl mx-auto px-4 text-center py-20"
      >
        {/* 404 Number */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="text-[150px] md:text-[200px] font-serif font-bold text-[#C5A572]/20 leading-none block">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 -mt-16 relative z-10">
          Page Not <span className="text-[#C5A572]">Found</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl text-white/70 mb-12">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <a
            href="tel:2392913444"
            className="inline-flex items-center justify-center bg-[#1B365D] border border-[#C5A572]/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-[#C5A572] transition-all"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </a>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp}>
          <p className="text-white/60 mb-6">Or try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/how-it-works", label: "How It Works" },
              { href: "/sell-house-as-is", label: "Sell As-Is" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
              { href: "/blog", label: "Blog" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#C5A572] hover:text-[#D4B896] transition-colors underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#C5A572]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#1B365D]/30 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  )
}
