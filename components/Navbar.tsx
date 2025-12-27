'use client'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-[#0F1C2E]/95 backdrop-blur-md z-50 border-b border-[#C5A572]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Use transparent PNG with the lighthouse and display company name */}
            <img src="/logo Background Removed.png" alt="Garrison Point Solutions logo" className="h-12 w-auto" />
            <span className="ml-3 font-serif font-bold text-[#C5A572] text-xl hidden sm:inline">Garrison Point Solutions</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/#how-it-works" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">How It Works</Link>
            <Link href="/#about" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">About</Link>
            <Link href="/#markets" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">Markets</Link>
            <Link href="/blog" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">Blog</Link>
            <Link href="/faq" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">FAQ</Link>
            <Link href="/#contact" className="text-white/80 hover:text-[#C5A572] transition-colors text-sm font-medium tracking-wide uppercase">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:2392913444" className="flex items-center text-[#C5A572] hover:text-[#D4B896] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(239) 291-3444</span>
            </a>
            <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-6 py-3 rounded font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-lg shadow-[#B8860B]/20 text-sm tracking-wide uppercase">
              Get Cash Offer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F1C2E] border-t border-[#C5A572]/10 px-4 pt-2 pb-6 space-y-4">
          <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">How It Works</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">About</Link>
          <Link href="/#markets" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">Markets</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">Blog</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">FAQ</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block bg-[#C5A572] text-[#0F1C2E] text-center font-bold py-3 rounded">Get Cash Offer</Link>
        </div>
      )}
    </nav>
  )
}
