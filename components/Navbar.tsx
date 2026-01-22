'use client'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [situationsOpen, setSituationsOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  const situations = [
    { href: "/foreclosure-help", label: "Foreclosure Help" },
    { href: "/probate-help", label: "Probate Sales" },
    { href: "/divorce-sale", label: "Divorce Sales" },
    { href: "/code-violations", label: "Code Violations" },
    { href: "/sell-damaged-house", label: "Damaged Houses" },
    { href: "/military-relocation", label: "Military Relocation" },
  ]

  const serviceAreas = [
    { href: "/sell-house-fast-fort-myers", label: "Fort Myers" },
    { href: "/sell-house-fast-cape-coral", label: "Cape Coral" },
    { href: "/sell-house-fast-naples", label: "Naples" },
    { href: "/sell-house-fast-lakeland", label: "Lakeland" },
    { href: "/sell-house-fast-orlando", label: "Orlando" },
    { href: "/sell-house-fast-south-florida", label: "South Florida" },
  ]

  return (
    <>
      <nav className="fixed w-full bg-[#1B365D]/80 backdrop-blur-md z-50 border-b border-[#C5A572]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:2392913444"
              className="flex items-center text-[#C5A572] hover:text-[#D4B896] transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">(239) 291‑3444</span>
            </a>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded font-bold hover:from-[#C5A572] hover:to-[#D4B896] transition-all shadow-lg shadow-[#B8860B]/20 text-base tracking-wide uppercase"
            >
              Get Cash Offer
            </Link>
          </div>

          {/* Menu Toggle */}
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

      {/* Mobile/Tablet Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#1B365D] border-t border-[#C5A572]/15 px-6 pt-4 pb-8 shadow-lg max-h-[80vh] overflow-y-auto">
          <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            How It Works
          </Link>
          <Link href="/our-approach" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            Our Approach
          </Link>

          {/* Situations Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setSituationsOpen(!situationsOpen)}
              className="flex items-center justify-between w-full text-white/80 hover:text-[#C5A572]"
            >
              <span>We Help With</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${situationsOpen ? 'rotate-180' : ''}`} />
            </button>
            {situationsOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l border-[#C5A572]/20">
                {situations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/60 py-1 hover:text-[#C5A572] text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className="flex items-center justify-between w-full text-white/80 hover:text-[#C5A572]"
            >
              <span>Service Areas</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l border-[#C5A572]/20">
                {serviceAreas.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/60 py-1 hover:text-[#C5A572] text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/partners" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            Partners
          </Link>
          <Link href="/contractors" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            Contractors
          </Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            FAQ
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-white/80 py-2 hover:text-[#C5A572]">
            Contact
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
            className="block mt-4 text-white/80 py-2 hover:text-[#C5A572] flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" /> (239) 291‑3444
          </a>
        </div>
      )}
    </nav>
    </>
  )
}
