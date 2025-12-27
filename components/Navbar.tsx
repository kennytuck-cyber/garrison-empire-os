'use client'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/*
        The navigation bar is fixed to the top of the page and uses a
        lighter navy background to contrast the golden lighthouse logo.  A
        subtle border at the bottom provides separation from the page
        content.  The backdrop blur keeps underlying hero images from
        overpowering the nav on scroll.  Increasing the logo height and
        font size improves brand visibility.
      */}
      <nav className="fixed w-full bg-[#1B365D]/80 backdrop-blur-md z-50 border-b border-[#C5A572]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          {/* Logo and company name.  The lighthouse PNG is scaled up to be
             easily visible and the name uses a larger font to reinforce
             branding. */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo Background Removed.png"
              alt="Garrison Point Solutions logo"
              className="h-24 w-auto"
            />
            <span className="ml-4 font-serif font-bold text-[#C5A572] text-3xl hidden sm:inline">
              Garrison Point Solutions
            </span>
          </Link>
          
          {/*
            On desktop, display the call-to-action and phone number
            alongside the menu button.  On mobile, these items live
            inside the dropdown menu below.  Increasing the font sizes
            improves legibility.
          */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:2392913444"
              className="flex items-center text-[#C5A572] hover:text-[#D4B896] transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">(239) 291‑3444</span>
            </a>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-lg shadow-[#B8860B]/20 text-base tracking-wide uppercase"
            >
              Get Cash Offer
            </Link>
          </div>

          {/*
            Menu button toggles the mobile navigation.  Always visible
            regardless of screen size.  The icon changes from burger to X
            based on open state.  A larger click area improves user
            experience.
          */}
          <div className="flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#C5A572] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/*
        Mobile dropdown: absolutely positioned below the nav.  It
        occupies the full width on mobile and slides down when open.
      */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#1B365D] border-t border-[#C5A572]/15 px-6 pt-4 pb-8 space-y-4 shadow-lg">
          <Link
            href="/#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 py-2 hover:text-[#C5A572]"
          >
            How It Works
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 py-2 hover:text-[#C5A572]"
          >
            About
          </Link>
          <Link
            href="/#markets"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 py-2 hover:text-[#C5A572]"
          >
            Markets
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 py-2 hover:text-[#C5A572]"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 py-2 hover:text-[#C5A572]"
          >
            FAQ
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] text-center font-bold py-3 rounded mt-4 hover:from-[#C5A572] hover:to-[#D4B896] transition-colors"
          >
            Get Cash Offer
          </Link>
          <a
            href="tel:2392913444"
            onClick={() => setIsOpen(false)}
            className="block mt-2 text-white/80 py-2 hover:text-[#C5A572] flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" /> (239) 291‑3444
          </a>
        </div>
      )}
    </nav>
      {/* Close the React fragment opened above */}
    </>
  )
}
