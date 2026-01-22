import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] border-t border-[#C5A572]/15">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo & Company Info - Left Side */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="/logo Background Removed.png" alt="Garrison Point Solutions logo" className="h-24 w-auto" />
            </Link>
            <p className="text-white/60 mt-4 text-sm leading-relaxed max-w-xs">
              Veteran Owned &amp; Operated real estate investment company. We buy houses in any condition throughout Florida.
            </p>
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="tel:2392913444" className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#C5A572]" />
                (239) 291-3444
              </a>
              <a href="mailto:info@garrisonpointsolutions.com" className="text-white/70 hover:text-[#C5A572] transition-colors flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#C5A572]" />
                info@garrisonpointsolutions.com
              </a>
              <div className="text-white/60 flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-[#C5A572]" />
                <span>7901 4th Street N, Suite 300<br/>St Petersburg, FL 33702</span>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#C5A572]/20 hover:text-[#C5A572] transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#C5A572]/20 hover:text-[#C5A572] transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/garrisonpointsolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#C5A572]/20 hover:text-[#C5A572] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section - Right Side */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/how-it-works" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">How It Works</Link></li>
                  <li><Link href="/sell-house-as-is" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Sell As-Is</Link></li>
                  <li><Link href="/sell-house-fast-7-days" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Sell Fast</Link></li>
                  <li><Link href="/our-approach" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Our Approach</Link></li>
                  <li><Link href="/faq" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">FAQ</Link></li>
                  <li><Link href="/blog" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Blog</Link></li>
                  <li><Link href="/contact" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>

              {/* Situations */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">We Help With</h4>
                <ul className="space-y-3">
                  <li><Link href="/foreclosure-help" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Foreclosure</Link></li>
                  <li><Link href="/probate-help" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Probate Sales</Link></li>
                  <li><Link href="/divorce-sale" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Divorce Sales</Link></li>
                  <li><Link href="/code-violations" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Code Violations</Link></li>
                  <li><Link href="/sell-damaged-house" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Damaged Houses</Link></li>
                  <li><Link href="/military-relocation" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Military PCS</Link></li>
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Service Areas</h4>
                <ul className="space-y-3">
                  <li><Link href="/sell-house-fast-fort-myers" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Fort Myers</Link></li>
                  <li><Link href="/sell-house-fast-cape-coral" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Cape Coral</Link></li>
                  <li><Link href="/sell-house-fast-naples" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Naples</Link></li>
                  <li><Link href="/sell-house-fast-lakeland" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Lakeland</Link></li>
                  <li><Link href="/sell-house-fast-orlando" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Orlando</Link></li>
                  <li><Link href="/sell-house-fast-south-florida" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">South Florida</Link></li>
                </ul>
              </div>

              {/* Work With Us */}
              <div>
                <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Work With Us</h4>
                <ul className="space-y-3">
                  <li><Link href="/work-with-us" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">All Opportunities</Link></li>
                  <li><Link href="/work-with-us/lenders" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Lenders</Link></li>
                  <li><Link href="/work-with-us/title-closing" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Title &amp; Closing</Link></li>
                  <li><Link href="/work-with-us/inspectors" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Inspectors</Link></li>
                  <li><Link href="/contractors" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Contractors</Link></li>
                  <li><Link href="/work-with-us/property-management" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Property Management</Link></li>
                  <li><Link href="/work-with-us/services" className="text-white/60 hover:text-[#C5A572] transition-colors text-sm">Other Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Garrison Standard, LLC. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/terms" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Terms</Link>
              <Link href="/privacy" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">Privacy</Link>
              <Link href="/faq" className="text-white/40 hover:text-[#C5A572] text-sm transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
