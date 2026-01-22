import { Metadata } from 'next'
import TitleClosingClient from './TitleClosingClient'

export const metadata: Metadata = {
  title: 'Title & Closing Companies | Partner With Us | Garrison Point Solutions',
  description: 'Title companies and closing attorneys: Partner with Florida real estate investors for consistent closing volume. We need title search, title insurance, and closing services across Tampa, Orlando, and Jacksonville.',
  keywords: [
    'title company partnership Florida',
    'closing attorney real estate',
    'title insurance investor',
    'real estate closing services',
    'Florida title company',
    'investor title services',
    'bulk closing services',
    'real estate attorney Florida',
    'title search services',
    'escrow services Florida'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us/title-closing',
  },
  openGraph: {
    title: 'Title & Closing Companies | Partner Opportunities',
    description: 'Partner with Florida real estate investors for consistent closing volume. Title search, insurance, and closing services.',
    url: 'https://garrisonpointsolutions.com/work-with-us/title-closing',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Title & Closing Partners - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title & Closing Companies | Partner With Us',
    description: 'Partner with Florida real estate investors for consistent closing volume.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TitleClosingPage() {
  return <TitleClosingClient />
}
