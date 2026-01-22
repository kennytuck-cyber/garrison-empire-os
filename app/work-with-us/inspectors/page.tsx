import { Metadata } from 'next'
import InspectorsClient from './InspectorsClient'

export const metadata: Metadata = {
  title: 'Inspectors & Appraisers | Partner With Us | Garrison Point Solutions',
  description: 'Home inspectors and appraisers: Partner with Florida real estate investors. We need general inspections, HVAC, electrical, plumbing, roof, pest inspections, and property appraisals.',
  keywords: [
    'home inspector partnership Florida',
    'property appraiser real estate',
    'termite inspection investor',
    'HVAC inspection Florida',
    'roof inspection services',
    'electrical inspection',
    'plumbing inspection',
    '4-point inspection Florida',
    'wind mitigation inspection',
    'real estate inspection services'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us/inspectors',
  },
  openGraph: {
    title: 'Inspectors & Appraisers | Partner Opportunities',
    description: 'Home inspectors and appraisers: Partner with Florida real estate investors for consistent inspection work.',
    url: 'https://garrisonpointsolutions.com/work-with-us/inspectors',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Inspectors & Appraisers - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspectors & Appraisers | Partner With Us',
    description: 'Partner with Florida real estate investors for consistent inspection work.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InspectorsPage() {
  return <InspectorsClient />
}
