import Link from 'next/link'
import { SITE_CONTENT } from '@/lib/siteContent'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}

export default function BlogIndex() {
  // Filter content to only show blog posts
  const posts = Object.entries(SITE_CONTENT).filter(([_, data]) => data.type === 'blog')

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Expert guidance for Florida homeowners navigating complex property situations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(([slug, post]) => (
            <Link key={slug} href={`/${slug}`} className="group bg-[#1B365D]/30 border border-[#C5A572]/10 rounded-2xl overflow-hidden hover:border-[#C5A572]/40 transition-all hover:-translate-y-1">
              <div className="p-8 h-full flex flex-col">
                <div className="mb-4">
                  <BookOpen className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-[#C5A572] transition-colors line-clamp-2">
                  {post.h1}
                </h2>
                <p className="text-white/60 mb-6 line-clamp-3 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold text-sm uppercase tracking-wide mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
