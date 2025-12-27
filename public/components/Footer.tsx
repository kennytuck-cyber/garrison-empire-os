import Link from 'next/link'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A1420] border-t border-[#C5A572]/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src="/logo.jpg" alt="Garrison Point Solutions" className="h-24 w-auto mb-6" />
            <p className="text-white/60 mb-6 max-w-md">
              Veteran-owned real estate solutions company. We buy houses in any condition, 
              providing fair cash offers and stress-free closings throughout Florida.
            </p>
            <div className="flex items-center space-x-2 text-[#C5A572]">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Veteran Owned & Operated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#how-it-works" className="text-white/60 hover:text-[#C5A572] transition-colors">How It Works</Link></li>
              <li><Link href="/#about" className="text-white/60 hover:text-[#C5A572] transition-colors">About Us</Link></li>
              <li><Link href="/#markets" className="text-white/60 hover:text-[#C5A572] transition-colors">Markets</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-[#C5A572] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2392913444" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (239) 291-3444
                </a>
              </li>
              <li>
                <a href="mailto:kenny@garrisonvi.com" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kenny@garrisonvi.com
                </a>
              </li>
              <li>
                <span className="text-white/60 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  Fort Myers, Florida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C5A572]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">© 2025 Garrison Point Solutions, LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
