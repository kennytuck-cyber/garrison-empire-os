import BlogSearch from '@/components/BlogSearch'
import { SITE_CONTENT } from '@/lib/siteContent'

// Metadata for the blog index page
export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}


export default function BlogPage() {
  // Filter content to only include blog posts
  const posts = Object.entries(SITE_CONTENT as any).filter(([_slug, data]: [string, any]) => data.type === 'blog')
  return (
    <div className="min-h-screen bg-[#0F1C2E]">
      {/* Page header */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C5A572] text-sm font-bold tracking-[0.2em] uppercase">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert guidance for Florida homeowners navigating complex property situations.
          </p>
        </div>
      </div>
      {/* Searchable blog grid */}
      <BlogSearch posts={posts} />
    </div>
  )
}