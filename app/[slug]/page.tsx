import { SITE_CONTENT } from '@/lib/siteContent'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import SlugPageClient from './SlugPageClient'

// Image mapping for blog posts (duplicated for metadata generation)
const getImageForPost = (title: string) => {
  const t = (title || '').toLowerCase()
  if (t.includes('how much') && t.includes('cash home buyers')) return '/images/cash-buyer-home-florida-paid-sell.jpg'
  if (t.includes('inherited')) return '/images/home-inheritance-inherited-estate-probate-family.webp'
  if (t.includes('mortgage') && t.includes('investor')) return '/images/real-estate-cash-buy-sell-offer-florida-home.webp'
  if (t.includes('as-is') || t.includes('fix it up')) return '/images/home-cash-sell-offer-buy-real-estate-florida-property.webp'
  if (t.includes('pre-foreclosure') && t.includes('options')) return '/images/deal-forclosure-cash-closing-title-florida--2.webp'
  if (t.includes('code violations')) return '/images/selling-house-with-code-violations-florida.jpg'
  if (t.includes('hidden costs') && t.includes('realtor')) return '/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'
  if (t.includes('pre-foreclosure vs foreclosure')) return '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp'
  if (t.includes('vs real estate agents') || t.includes('cash home buyers vs')) return '/images/cash-offer-home-selling-buying-real-estate-florida.jpg'
  if (t.includes('how fast can you sell')) return '/images/cape-coral-swfl-real-estate-sell-cash-buy-.jpg'
  if (t.includes('divorce')) return '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg'
  if (t.includes('fort myers') && t.includes('expect')) return '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg'
  return '/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'
}

// Slug to image mapping
const slugToImage: Record<string, string> = {
  'sell-house-fast-orlando': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
  'cash-home-buyers-polk-county': '/images/orlando-central-flroida-real-estate-cash-sell-buy.webp',
  'sell-house-fast-fort-myers': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
  'cash-home-buyers-lee-county': '/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg',
  'sell-house-fast-south-florida': '/images/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg',
  'foreclosure-help': '/images/deal-forclosure-cash-closing-title-florida--2.webp',
  'code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp',
  'sell-house-with-code-violations': '/images/code-violations-home-sell-cash-offer-florida-hoa.webp',
  'military-relocation': '/images/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg',
  'probate-help': '/images/inheritance-estate-family-inherited-probate-cash-offer.jpg',
  'sell-inherited-house-florida': '/images/inheritance-estate-family-inherited-probate-cash-offer.jpg',
  'divorce-sale': '/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg',
  'sell-damaged-house': '/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG'
}

// Generate static params for all known slugs
export async function generateStaticParams() {
  return Object.keys(SITE_CONTENT).map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = (SITE_CONTENT as any)[params.slug]

  if (!data) {
    return {
      title: 'Page Not Found | Garrison Point Solutions',
      description: 'The page you are looking for does not exist.'
    }
  }

  const heroImage = slugToImage[params.slug] ?? getImageForPost(data.h1 || '')
  const fullImageUrl = `https://garrisonpointsolutions.com${heroImage}`
  const pageUrl = `https://garrisonpointsolutions.com/${params.slug}`

  // Determine page type for structured title
  let titleSuffix = 'Garrison Point Solutions'
  if (data.type === 'blog') {
    titleSuffix = 'Florida Cash Home Buyers Guide'
  } else if (data.type === 'location') {
    titleSuffix = 'Sell Your House Fast for Cash'
  } else if (data.type === 'situation') {
    titleSuffix = 'We Can Help | Garrison Point Solutions'
  }

  return {
    title: `${data.h1 || data.title} | ${titleSuffix}`,
    description: data.description || `Learn about ${data.h1 || 'selling your house'} with Garrison Point Solutions. We buy houses for cash in Florida.`,
    keywords: data.keywords || [
      'sell house fast',
      'cash home buyers',
      'Florida real estate',
      'we buy houses',
      data.city || 'Florida'
    ],
    authors: [{ name: 'Garrison Point Solutions' }],
    creator: 'Garrison Point Solutions',
    publisher: 'Garrison Point Solutions',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: data.h1 || data.title,
      description: data.description || `Get a fair cash offer for your ${data.city || 'Florida'} property today.`,
      url: pageUrl,
      siteName: 'Garrison Point Solutions',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: data.h1 || 'Garrison Point Solutions - Cash Home Buyers'
        }
      ],
      locale: 'en_US',
      type: data.type === 'blog' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.h1 || data.title,
      description: data.description || `Get a fair cash offer for your ${data.city || 'Florida'} property today.`,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = (SITE_CONTENT as any)[params.slug]

  if (!data) {
    return notFound()
  }

  return <SlugPageClient slug={params.slug} data={data} />
}
