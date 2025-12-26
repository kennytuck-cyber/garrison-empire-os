import Image from "next/image";
import { siteContent } from "../siteContent"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[650px] flex items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <Image
            src={siteContent.hero.imageSrc}
            alt={siteContent.hero.alt}
            fill
            className="object-cover"
            priority
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
            {siteContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-200">
            {siteContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-xl">
              {siteContent.hero.cta}
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full text-lg transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* --- TRUST & VETERAN SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
              {siteContent.about.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-yellow-500 pl-4">
                {siteContent.about.heading}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {siteContent.about.description}
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-6">
                <p className="italic text-slate-500">
                  "We operate with the same core values instilled during 23 years of service: Honor, Respect, and Devotion to Duty."
                </p>
              </div>
            </div>

            {/* Image Grid for Veteran Assets */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform translate-y-8">
                <Image 
                  src={siteContent.about.imageSrc} // Shadow Box
                  alt={siteContent.about.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
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

      {/* --- SITUATIONS GRID --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
            We Solve Complex Real Estate Problems
          </h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            From storm damage to probate, we handle the difficult situations so you can move forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.situations.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-yellow-600 font-semibold text-sm group-hover:text-yellow-500 flex items-center gap-1">
                    Learn more <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATIONS MARQUEE --- */}
      <section className="py-16 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <h2 className="text-3xl font-bold">Serving All Major Florida Markets</h2>
        </div>
        
        {/* Horizontal Scroll / Grid */}
        <div className="flex flex-nowrap md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 overflow-x-auto pb-4 md:pb-0">
          {siteContent.locations.map((loc, idx) => (
            <div key={idx} className="relative w-64 md:w-auto h-80 flex-shrink-0 rounded-lg overflow-hidden group">
              <Image
                src={loc.imageSrc}
                alt={loc.alt}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <span className="font-bold text-lg">{loc.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RECENT PURCHASES (Portfolio) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-bold mb-4">We Buy Houses in Any Condition</h2>
             <p className="text-slate-600 mb-6">
               Whether it is a waterfront estate needing updates or a simple family home, we have the resources to make a fair offer.
             </p>
             <button className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1 hover:text-blue-500">
               View Our Recent Projects
             </button>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             {siteContent.portfolio.map((img, idx) => (
                 <div key={idx} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image src={img.imageSrc} alt={img.alt} fill className="object-cover" />
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Garrison Empire</h3>
            <p className="text-sm leading-relaxed">
              Veteran-owned and operated. We provide ethical, fast, and transparent real estate solutions for Florida homeowners.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 {siteContent.contact.phone}</li>
              <li>✉️ {siteContent.contact.email}</li>
              <li>📍 {siteContent.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4">Get Started</h3>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-4 rounded transition-colors">
              Get Your Cash Offer
            </button>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
          <p>© {new Date().getFullYear()} Garrison Empire / Florida Veteran Buyers. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
