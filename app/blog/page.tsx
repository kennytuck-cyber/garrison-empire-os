import BlogSearch from '@/components/BlogSearch'
import { SITE_CONTENT } from '@/lib/siteContent'

// Metadata for the blog index page
export const metadata = {
  title: 'Real Estate Blog | Garrison Point Solutions',
  description: 'Expert advice on selling inherited property, foreclosure, divorce, and problem properties in Florida.',
}

// Exact image mapping function for blog thumbnails
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()
  // Use the correct image for the “How Much Do Cash Home Buyers Pay?” article. This matches
  // the filename provided in the project’s public/images folder. Without this override the
  // blog card will default to a generic money image which caused the missing thumbnail.
  if (t.includes('how much') && t.includes('cash home buyers')) return '/images/cash-buyer-home-florida-paid-sell.jpg'
  // --- WEBP FILES ---
  if (t.includes('inherited')) return '/images/home-inheritance-inherited-estate-probate-family.webp'
  if (t.includes('mortgage') && t.includes('investor')) return '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
  if (t.includes('as-is') || t.includes('fix it up')) return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  if (t.includes('pre-foreclosure') && t.includes('options')) return '/images/deal-forclosure-cash-closing-title-florida--2.webp'
  if (t.includes('code violations')) return '/images/selling-house-with-code-violations-florida.jpg'
  if (t.includes('hidden costs') && t.includes('realtor')) return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  if (t.includes('pre-foreclosure vs foreclosure')) return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
  // --- JPG FILES ---
  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  if (t.includes('how fast can you sell')) return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  if (t.includes('divorce')) return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  if (t.includes('fort myers') && t.includes('expect')) return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
  // Fallback
  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
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
      <BlogSearch posts={posts} getImageForPost={getImageForPost} />
    </div>
  )
}