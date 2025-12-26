import Image from "next/image";
import { siteContent } from "./siteContent"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1C2E] text-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[650px] flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
           <Image
            src={siteContent.hero.imageSrc}
            alt={siteContent.hero.alt}
            fill
            className="object-cover"
            priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/90 to-[#1B365D]/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight drop-shadow-xl leading-tight text-white">
            {siteContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-200">
            {siteContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] font-bold py-4 px-10 rounded-lg text-lg transition-transform hover:scale-105 shadow-xl hover:shadow-[#C5A572]/20">
              {siteContent.hero.cta}
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* --- TRUST & VETERAN SECTION --- */}
      <section className="py-24 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C5A572] font-bold tracking-widest uppercase text-sm border-b border-[#C5A572]/30 pb-2">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-6">
              {siteContent.about.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#C5A572] pl-4">
                {siteContent.about.heading}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {siteContent.about.description}
              </p>
              <div className="bg-[#1B365D]/30 p-6 rounded-xl border border-[#C5A572]/20 mt-6">
                <p className="italic text-[#C5A572]">
                  &quot;We operate with the same core values instilled during 23 years of service: Honor, Respect, and Devotion to Duty.&quot;
                </p>
              </div>
            </div>

            {/* Image Grid for Veteran Assets */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border border-[#C5A572]/20 transform translate-y-8">
                <Image 
                  src={siteContent.about.imageSrc} // Shadow Box
                  alt={siteContent.about.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border border-[#C5A572]/20">
                <Image 
                  src={siteContent.about.secondaryImageSrc} // Uniform Hat
                  alt={siteContent.about.secondaryAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCATIONS MARQUEE --- */}
      <section className="py-16 bg-[#1B365D]/20 border-y border-[#C5A572]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-3xl font-serif font-bold text-white">Serving All Major Florida Markets</h2>
        </div>
        
        <div className="flex flex-nowrap md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 overflow-x-auto pb-4 md:pb-0">
          {siteContent.locations.map((loc, idx) => (
            <div key={idx} className="relative w-64 md:w-auto h-80 flex-shrink-0 rounded-lg overflow-hidden group border border-white/10 hover:border-[#C5A572]/50 transition-colors">
              <Image
                src={loc.imageSrc}
                alt={loc.alt}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <span className="font-bold text-lg text-[#C5A572]">{loc.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0b1421] text-slate-400 py-16 px-6 border-t border-[#C5A572]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-serif">Garrison Empire</h3>
            <p className="text-sm leading-relaxed">
              Veteran-owned and operated. We provide ethical, fast, and transparent real estate solutions for Florida homeowners.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-serif">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 {siteContent.contact.phone}</li>
              <li>✉️ {siteContent.contact.email}</li>
              <li>📍 {siteContent.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-serif">Get Started</h3>
            <button className="w-full bg-[#C5A572] hover:bg-[#D4B896] text-[#0F1C2E] font-bold py-3 px-4 rounded transition-colors shadow-lg">
              Get Your Cash Offer
            </button>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs">
          <p>© {new Date().getFullYear()} Garrison Empire / Florida Veteran Buyers. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
