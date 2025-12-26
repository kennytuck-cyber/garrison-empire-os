import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, MapPin, Clock, Shield } from 'lucide-react'

interface ContentItem {
  type: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  city?: string;
  neighborhoods?: string[];
  painPoints?: string[];
  solution?: string;
  content?: string[]; // Added for blog posts
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const content = SITE_CONTENT[params.slug as keyof typeof SITE_CONTENT] as ContentItem | undefined
  if (!content) return {}
  return {
    title: content.title,
    description: content.description,
  }
}

export async function generateStaticParams() {
  return Object.keys(SITE_CONTENT).map((slug) => ({
    slug: slug,
  }))
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const content = SITE_CONTENT[params.slug as keyof typeof SITE_CONTENT] as ContentItem | undefined

  if (!content) {
    return notFound()
  }

  // --- BLOG POST LAYOUT ---
  if (content.type === 'blog') {
    return (
      <div className="min-h-screen bg-[#0F1C2E] text-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Link href="/blog" className="text-[#C5A572] hover:text-white mb-8 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{content.h1}</h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed italic border-l-4 border-[#C5A572] pl-4">
            {content.intro}
          </p>
          
          <div className="prose prose-invert max-w-none">
            {content.content?.map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith('##') ? (
                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : paragraph.startsWith('**') ? (
                  <p className="text-white/80 font-bold mb-4">{paragraph}</p>
                ) : (
                  <p className="text-white/80 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#1B365D] rounded-2xl border border-[#C5A572]/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Need help with your property?</h3>
            <p className="mb-6 text-white/70">We can give you a fair cash offer today.</p>
            <Link href="/#contact" className="bg-[#C5A572] text-[#0F1C2E] px-8 py-3 rounded-xl font-bold hover:bg-[#D4B896] transition-colors">
              Get My Offer
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // --- LANDING PAGE LAYOUT (Existing) ---
  return (
    <div className="min-h-screen bg-[#0F1C2E]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1C2E]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/95 to-[#1B365D]/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#1B365D]/50 border border-[#C5A572]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#C5A572]" />
              <span className="text-xs font-semibold text-[#C5A572] tracking-wide uppercase">
                {content.type === 'location' ? `Serving ${content.city}` : 'We Solve Problems'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {content.h1}
            </h1>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {content.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-8 py-4 rounded font-bold text-lg hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center justify-center">
                Get Cash Offer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:2392913444" className="bg-white/5 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                (239) 291-3444
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-[#1B365D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-8">
                {content.type === 'location' ? `Why Sell Your ${content.city} Home to Us?` : 'Why Choose a Cash Sale?'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <Clock className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Speed & Convenience</h3>
                    <p className="text-white/60">We can close in as little as 7 days. No waiting for banks or inspections.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <Shield className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Veteran-Owned Integrity</h3>
                    <p className="text-white/60">23 years of Coast Guard service means we operate with discipline and transparency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C5A572]/20">
                    <CheckCircle2 className="w-6 h-6 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">No Repairs Needed</h3>
                    <p className="text-white/60">We buy properties totally as-is. Leave the junk, we handle it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Specifics */}
            <div className="bg-[#0F1C2E] p-8 rounded-2xl border border-[#C5A572]/20">
              {content.type === 'location' && content.neighborhoods && (
                <>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <MapPin className="w-5 h-5 text-[#C5A572] mr-2" />
                    Areas We Serve in {content.city}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {content.neighborhoods.map((area: string) => (
                      <div key={area} className="flex items-center space-x-2 text-white/70">
                        <div className="w-1.5 h-1.5 bg-[#C5A572] rounded-full" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {content.type === 'situation' && content.painPoints && (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Common Issues We Resolve</h3>
                  <ul className="space-y-4">
                    {content.painPoints.map((point: string) => (
                      <li key={point} className="flex items-center space-x-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-red-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 bg-[#1B365D]/30 rounded-xl border border-[#C5A572]/10">
                    <p className="text-[#C5A572] font-semibold mb-1">Our Solution:</p>
                    <p className="text-white/80 text-sm italic">"{content.solution}"</p>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C2E] border-t border-[#C5A572]/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Sell Your Property?
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Get a fair, no-obligation cash offer within 24 hours.
          </p>
          <Link href="/#contact" className="bg-gradient-to-r from-[#B8860B] to-[#C5A572] text-[#0F1C2E] px-12 py-5 rounded-xl font-bold text-xl hover:from-[#C5A572] hover:to-[#D4B896] transition-all inline-flex items-center shadow-2xl shadow-[#B8860B]/20">
            Get My Cash Offer Now
          </Link>
        </div>
      </section>
    </div>
  )
}
