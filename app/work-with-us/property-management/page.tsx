import { Metadata } from 'next'
import PropertyManagementClient from './PropertyManagementClient'

export const metadata: Metadata = {
  title: 'Property Management Partners | Work With Us | Garrison Point Solutions',
  description: 'Property management companies: Partner with Florida real estate investors to manage our growing rental portfolio. Seeking full-service management in Tampa, Orlando, and Jacksonville.',
  keywords: [
    'property management partnership Florida',
    'rental property management',
    'investor property management',
    'Tampa property manager',
    'Orlando property management',
    'Jacksonville property manager',
    'rental management services',
    'tenant placement Florida',
    'property management company',
    'real estate management partnership'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us/property-management',
  },
  openGraph: {
    title: 'Property Management Partners | Garrison Point Solutions',
    description: 'Property management companies: Partner with Florida real estate investors to manage our growing rental portfolio.',
    url: 'https://garrisonpointsolutions.com/work-with-us/property-management',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Property Management Partners - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Management Partners | Work With Us',
    description: 'Partner with Florida real estate investors to manage our growing rental portfolio.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PropertyManagementPage() {
  return <PropertyManagementClient />
}
