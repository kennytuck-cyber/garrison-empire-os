import { Metadata } from 'next'
import WorkWithUsClient from './WorkWithUsClient'

export const metadata: Metadata = {
  title: 'Work With Us | Partner Opportunities | Garrison Point Solutions',
  description: 'Partner with Garrison Point Solutions - Florida real estate investors seeking lenders, title companies, inspectors, contractors, property managers, and service providers. Build long-term business relationships.',
  keywords: [
    'real estate partnership',
    'hard money lenders Florida',
    'title company partnership',
    'real estate investor network',
    'contractor partnership',
    'property management Florida',
    'real estate service providers',
    'Florida real estate vendors',
    'investor partnerships',
    'real estate professionals'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us',
  },
  openGraph: {
    title: 'Work With Us | Garrison Point Solutions',
    description: 'Partner with Florida real estate investors. We need lenders, title companies, inspectors, contractors, and service providers.',
    url: 'https://garrisonpointsolutions.com/work-with-us',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Work With Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work With Us | Garrison Point Solutions',
    description: 'Partner with Florida real estate investors. We need lenders, title companies, inspectors, contractors, and service providers.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WorkWithUsPage() {
  return <WorkWithUsClient />
}
