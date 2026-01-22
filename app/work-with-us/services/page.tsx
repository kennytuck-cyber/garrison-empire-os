import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Service Providers | Insurance, Legal & More | Garrison Point Solutions',
  description: 'Service providers: Partner with Florida real estate investors. We need insurance agents, surveyors, attorneys, accountants, photographers, cleaners, and more for our property operations.',
  keywords: [
    'real estate service providers Florida',
    'insurance agent investors',
    'land surveyor Florida',
    'real estate attorney',
    'real estate CPA',
    'property photographer',
    'junk removal service',
    'pool service Florida',
    'landscaping service',
    'real estate support services'
  ],
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  alternates: {
    canonical: 'https://garrisonpointsolutions.com/work-with-us/services',
  },
  openGraph: {
    title: 'Service Providers | Partner Opportunities',
    description: 'Service providers: Partner with Florida real estate investors. Insurance, legal, photography, cleaning, and more.',
    url: 'https://garrisonpointsolutions.com/work-with-us/services',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: 'https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp',
        width: 1200,
        height: 630,
        alt: 'Service Providers - Garrison Point Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Providers | Partner With Us',
    description: 'Partner with Florida real estate investors. Insurance, legal, photography, and more.',
    images: ['https://garrisonpointsolutions.com/images/real-estate-cash-buy-sell-offer-florida-home.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
