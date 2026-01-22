import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] border-t border-[#C5A572]/15 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-column grid on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Sellers Column */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Sellers</h4>
            <ul className="space-y-3">
              <li><Link href="/how-it-works" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">How It Works</Link></li>
              <li><Link href="/sell-house-as-is" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Sell As-Is</Link></li>
              <li><Link href="/sell-house-fast-7-days" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Sell Fast</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Situations Column */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Situations</h4>
            <ul className="space-y-3">
              <li><Link href="/foreclosure-help" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Foreclosure Help</Link></li>
              <li><Link href="/probate-help" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Probate Sales</Link></li>
              <li><Link href="/divorce-sale" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Divorce Sales</Link></li>
              <li><Link href="/code-violations" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Code Violations</Link></li>
              <li><Link href="/sell-damaged-house" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Damaged Houses</Link></li>
              <li><Link href="/military-relocation" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Military Relocation</Link></li>
            </ul>
          </div>

          {/* Logo & Company Info (Center) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col items-center text-center order-first md:order-none mb-8 md:mb-0">
            <img src="/logo Background Removed.png" alt="Garrison Point Solutions logo" className="h-32 w-auto" />
            <span className="mt-3 font-serif font-bold text-[#C5A572] text-xl">Garrison Point Solutions</span>
            <p className="text-white/60 mt-3 text-xs max-w-[200px]">
              Veteran Owned &amp; Operated real estate solutions company.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C5A572] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C5A572] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C5A572] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Locations</h4>
            <ul className="space-y-3">
              <li><Link href="/sell-house-fast-fort-myers" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Fort Myers</Link></li>
              <li><Link href="/sell-house-fast-cape-coral" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Cape Coral</Link></li>
              <li><Link href="/sell-house-fast-naples" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Naples</Link></li>
              <li><Link href="/sell-house-fast-lakeland" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Lakeland</Link></li>
              <li><Link href="/sell-house-fast-orlando" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Orlando</Link></li>
              <li><Link href="/sell-house-fast-south-florida" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">South Florida</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wide text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2392913444" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  (239) 291-3444
                </a>
              </li>
              <li>
                <a href="mailto:info@garrisonpointsolutions.com" className="text-white/60 hover:text-[#C5A572] transition-colors flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="break-all">info@garrisonpoint<wbr/>solutions.com</span>
                </a>
              </li>
              <li>
                <span className="text-white/60 flex items-start text-sm">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    7901 4th Street N<br/>
                    Suite 300<br/>
                    St Petersburg, FL 33702
                  </span>
                </span>
              </li>
            </ul>
            <h4 className="font-bold text-white mb-4 mt-6 uppercase tracking-wide text-sm">Work With Us</h4>
            <ul className="space-y-3">
              <li><Link href="/our-approach" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Our Approach</Link></li>
              <li><Link href="/partners" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Partners</Link></li>
              <li><Link href="/contractors" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Contractors</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C5A572]/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm mb-4">© {new Date().getFullYear()} Garrison Standard, LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/terms" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">FAQ</Link>
            <Link href="/contact" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
