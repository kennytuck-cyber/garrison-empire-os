"use client"

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

/**
 * ScrollTopButton
 *
 * A floating button that appears after the user scrolls down the page.
 * Clicking the button smoothly scrolls the viewport back to the top.
 */
export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C5A572] shadow-xl shadow-[#B8860B]/30 hover:from-[#C5A572] hover:to-[#D4B896] transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-[#0F1C2E]" />
    </button>
  )
}