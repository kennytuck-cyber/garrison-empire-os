import { Metadata } from 'next'
import LendersClient from './LendersClient'

export const metadata: Metadata = {
  title: 'Lenders | Hard Money & Private Equity Partners | Garrison Point Solutions',
  description: 'Partner with Garrison Point Solutions as a hard money lender, private equity investor, or DSCR lender. Fund Florida real estate investments with experienced operators. Secure, reliable returns.',
  keywords: [
    'hard money lender Florida',
    'private money lending',
    'real estate private equity',
    'DSCR loans Florida',
    'bridge loan funding',
    'fix and flip financing',
    'real estate investment partner',
    'secured real estate loans',
    'private lending opportunities',
    'Florida real estate funding'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us/lenders',
  },
  openGraph: {
    title: 'Lenders | Hard Money & Private Equity Partners',
    description: 'Fund Florida real estate investments with experienced operators. Hard money, private lending, and equity investment opportunities.',
    url: 'https://garrisonpointsolutions.com/work-with-us/lenders',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Lending Partners - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenders | Hard Money & Private Equity Partners',
    description: 'Fund Florida real estate investments with experienced operators. Secure, reliable returns.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LendersPage() {
  return <LendersClient />
}
