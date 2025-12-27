import Link from 'next/link'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] border-t border-[#C5A572]/15 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use a 4-column grid on medium+ screens so the center column can span two columns, giving the logo more room */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Quick Links (Left Column) */}
          <div className="text-left">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#how-it-works" className="text-white/60 hover:text-[#C5A572] transition-colors">How It Works</Link></li>
              <li><Link href="/#about" className="text-white/60 hover:text-[#C5A572] transition-colors">About Us</Link></li>
              <li><Link href="/#markets" className="text-white/60 hover:text-[#C5A572] transition-colors">Markets</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-[#C5A572] transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-[#C5A572] transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="text-white/60 hover:text-[#C5A572] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Logo & Company Info (Center Column) */}
          <div className="md:col-span-2 text-center">
            <div className="flex flex-col items-center mb-6">
              <img src="/logo Background Removed.png" alt="Garrison Point Solutions logo" className="h-28 w-auto" />
              <span className="mt-3 font-serif font-bold text-[#C5A572] text-3xl">Garrison Point Solutions</span>
            </div>
            <p className="text-white/60 mb-6 max-w-xl mx-auto text-base">
              Veteran Owned &amp; Operated real estate solutions company. We buy houses in any condition, providing fair cash offers and stress‑free closings throughout Florida.
            </p>
          </div>

          {/* Contact (Right Column) */}
          <div className="text-right">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2392913444" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center justify-end">
                  <Phone className="w-4 h-4 mr-2" />
                  (239) 291-3444
                </a>
              </li>
              <li>
                <a href="mailto:info@garrisonpointsolutions.com" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center justify-end">
                  <Mail className="w-4 h-4 mr-2" />
                  info@garrisonpointsolutions.com
                </a>
              </li>
              <li>
                <span className="text-white/60 flex items-start justify-end">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  Fort Myers, Florida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C5A572]/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm mb-4">© {new Date().getFullYear()} Garrison Standard, LLC. All intellectual property rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
