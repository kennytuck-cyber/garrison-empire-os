import { Metadata } from 'next'
import HowItWorksClient from './HowItWorksClient'

export const metadata: Metadata = {
  title: 'How It Works | Sell Your House Fast for Cash | Garrison Point Solutions',
  description: 'Learn our simple 3-step process to sell your house fast for cash in Florida. No agents, no showings, no repairs, no waiting. Get a cash offer within 24 hours and close in as little as 7 days.',
  keywords: [
    'how to sell house fast',
    'cash home sale process',
    'sell house in 7 days',
    'no realtor house sale',
    'sell house as-is Florida',
    'quick house sale',
    'cash buyer process',
    'sell house without repairs',
    'fast closing Florida',
    'we buy houses process'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works | Sell Your House Fast for Cash',
    description: 'Selling your house for cash is simple. No agents, no showings, no repairs, no waiting. Just three easy steps to get cash in hand.',
    url: 'https://garrisonpointsolutions.com/how-it-works',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/home-cash-offer-real-estate-florida-buy-sell-property.webp',
        width: 1200,
        height: 630,
        alt: 'How It Works - Garrison Point Solutions Cash Home Buyers'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works | Sell Your House Fast for Cash',
    description: 'Learn our simple 3-step process to sell your house fast for cash in Florida.',
    images: ['https://garrisonpointsolutions.com/images/home-cash-offer-real-estate-florida-buy-sell-property.webp'],
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

export default function HowItWorksPage() {
  return <HowItWorksClient />
}
