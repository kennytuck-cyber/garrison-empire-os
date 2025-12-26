'use client'

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "./siteContent"; 
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle2, Phone, MapPin } from "lucide-react";

export default function Home() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#0F1C2E] text-white font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
           <Image
            src={siteContent.hero.imageSrc}
            alt={siteContent.hero.alt}
            fill
            className="object-cover"
            priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/80 to-[#1B365D]/30" />
        </div>
        
        {/* Hero Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 container mx-auto px-6 max-w-5xl text-center"
        >
          <div className="inline-block border border-[#C5A572] rounded-full px-4 py-1 mb-6 bg-[#0F1C2E]/50 backdrop-blur-sm">
            <span className="text-[#C5A572] font-bold tracking-widest uppercase text-xs">Veteran Owned & Operated</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight drop-shadow-2xl leading-[1.1] mb-6">
            {siteContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {siteContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] font-bold py-5 px-12 rounded-lg text-lg transition-transform hover:scale-105 shadow-2xl shadow-[#C5A572]/20 flex items-center justify-center">
              {siteContent.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a href={`tel:${siteContent.contact.phone.replace(/\D/g,'')}`} className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-semibold py-5 px-12 rounded-lg text-lg transition-colors flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" /> Call {siteContent.contact.phone}
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- TRUST & VETERAN SECTION (Fixed Alignment, Single Image) --- */}
      <section className="py-32 px-6 bg-[#0F1C2E]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             {/* Text Content (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <span className="text-[#C5A572] font-bold tracking-widest uppercase text-sm border-b border-[#C5A572]/30 pb-2">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                {siteContent.about.heading}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {siteContent.about.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-[#C5A572] mt-1" />
                    <div>
                        <h4 className="font-bold text-white text-lg">Integrity First</h4>
                        <p className="text-slate-400 text-sm">We uphold the highest standards of conduct in every deal.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-[#C5A572] mt-1" />
                    <div>
                        <h4 className="font-bold text-white text-lg">Precision Speed</h4>
                        <p className="text-slate-400 text-sm">Closing timelines managed with military efficiency.</p>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Image (Right - Single Large Shadow Box) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A572]/20">
                <Image 
                  src={siteContent.about.imageSrc} 
                  alt={siteContent.about.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-[#C5A572] font-serif italic text-lg">"Devotion to Duty."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3 CORE MARKETS (Waterfront/Skyline Images) --- */}
      <section className="py-24 bg-[#1B365D]/20 border-y border-[#C5A572]/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Strategic Areas of Operation</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We are actively acquiring assets in these three key Florida markets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.locations.map((loc, idx) => (
              <Link href={`/${loc.slug}`} key={idx} className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-xl">
                <Image
                  src={loc.imageSrc}
                  alt={loc.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-1 bg-[#C5A572] mb-4 transition-all duration-300 group-hover:w-20" />
                  <h3 className="text-2xl font-bold text-white mb-2">{loc.city}</h3>
                  <p className="text-slate-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Market Details <ArrowRight className="inline w-4 h-4 ml-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SITUATIONS GRID --- */}
      <section className="py-32 px-6 bg-[#0F1C2E]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-16">Mission-Critical Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.situations.map((item) => (
              <Link href={`/${item.id}`} key={item.id} className="bg-[#152336] border border-[#C5A572]/10 rounded-xl overflow-hidden hover:border-[#C5A572]/40 transition-all duration-300 group hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F1C2E]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5A572] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOG / INTELLIGENCE SECTION (Restored) --- */}
      <section className="py-24 bg-[#0B1421] border-t border-[#C5A572]/10">
        <div className="container mx-auto px-6 max-w-6xl text-center">
            <span className="text-[#C5A572] font-bold tracking-widest uppercase text-xs mb-4 block">Garrison Intelligence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Market Insights & Briefings</h2>
            <div className="p-12 bg-[#0F1C2E] rounded-2xl border border-[#C5A572]/20 relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">The Florida Real Estate Brief</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Access our latest intelligence on market trends, probate legislation, and military relocation strategies.
                    </p>
                    <Link href="/blog" className="inline-block border border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-[#0F1C2E] font-bold py-3 px-8 rounded transition-all duration-300">
                        Enter Intelligence Center
                    </Link>
                </div>
                {/* Decorative BG element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A572]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            </div>
        </div>
      </section>

      {/* --- FOOTER (Cleaned Up) --- */}
      <footer id="contact" className="bg-[#080F18] text-white py-20 px-6 border-t border-[#C5A572]/20">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="text-[#C5A572] h-6 w-6" /> Garrison Empire
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Providing ethical, fast, and transparent real estate solutions for Florida homeowners. 
              Veteran-owned and operated with 23 years of service.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[#C5A572] font-bold uppercase tracking-wider text-sm">Contact HQ</h4>
            <a href={`tel:${siteContent.contact.phone.replace(/\D/g,'')}`} className="text-xl font-bold hover:text-[#C5A572] transition-colors flex items-center gap-3">
               <Phone className="h-5 w-5" /> {siteContent.contact.phone}
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="text-lg text-slate-300 hover:text-white transition-colors">
               {siteContent.contact.email}
            </a>
            <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5" /> {siteContent.contact.address}
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="text-[#C5A572] font-bold uppercase tracking-wider text-sm">Actions</h4>
             <button className="bg-[#C5A572] hover:bg-[#D4B896] text-[#0F1C2E] font-bold py-4 px-8 rounded shadow-lg transition-colors text-lg">
               Get Cash Offer
             </button>
          </div>

        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Garrison Empire. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
