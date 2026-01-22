import { Metadata } from 'next'
import FAQPageClient from './FAQPageClient'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Cash Home Buyers Florida | Garrison Point Solutions',
  description: 'Get answers to common questions about selling your house for cash in Florida. Learn about our offer process, timeline, property conditions we buy, and why thousands of homeowners trust us.',
  keywords: [
    'cash home buyers FAQ',
    'sell house fast questions',
    'we buy houses FAQ',
    'cash offer process',
    'sell house as-is questions',
    'foreclosure sale FAQ',
    'inherited property sale FAQ',
    'Florida home sale questions',
    'cash buyer closing process',
    'sell house without realtor FAQ'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Garrison Point Solutions',
    description: 'Get answers to the most common questions about selling your house for cash in Florida. We believe in transparency.',
    url: 'https://garrisonpointsolutions.com/faq',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/frequently-asked-questions-cash-home-buyer.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ - Cash Home Buyers Florida'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Cash Home Buyers Florida',
    description: 'Get answers to common questions about selling your house for cash in Florida.',
    images: ['https://garrisonpointsolutions.com/images/frequently-asked-questions-cash-home-buyer.jpg'],
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

export default function FAQPage() {
  return <FAQPageClient />
}
