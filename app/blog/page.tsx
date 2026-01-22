import { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Real Estate Blog | Florida Cash Home Buyers Guide | Garrison Point Solutions',
  description: 'Expert guidance for Florida homeowners navigating foreclosure, inherited properties, divorce sales, code violations, and more. Free, actionable advice from local cash home buyers.',
  keywords: [
    'Florida real estate blog',
    'sell house fast Florida',
    'cash home buyers guide',
    'foreclosure help Florida',
    'inherited property sale',
    'divorce house sale',
    'code violations Florida',
    'sell house as-is',
    'Fort Myers real estate',
    'Southwest Florida cash buyers'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/blog',
  },
  openGraph: {
    title: 'Real Estate Resources | Garrison Point Solutions',
    description: 'Expert guidance for Florida homeowners navigating complex property situations. Free, actionable advice you can use today.',
    url: 'https://garrisonpointsolutions.com/blog',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/florida-home-cash-real-estate-sell-buy-fas-2.webp',
        width: 1200,
        height: 630,
        alt: 'Florida Real Estate Resources - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Blog | Garrison Point Solutions',
    description: 'Expert guidance for Florida homeowners navigating complex property situations.',
    images: ['https://garrisonpointsolutions.com/images/florida-home-cash-real-estate-sell-buy-fas-2.webp'],
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

export default function BlogPage() {
  return <BlogPageClient />
}
