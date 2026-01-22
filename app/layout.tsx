import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadConcierge from "@/components/LeadConcierge"
import ScrollTopButton from "@/components/ScrollTopButton"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.garrisonpointsolutions.com'),
  title: {
    default: "Garrison Point Solutions | We Buy Houses Florida | Cash Offers in 24 Hours",
    template: "%s | Garrison Point Solutions"
  },
  description: "Veteran-owned real estate company buying houses in Central Florida, Southwest Florida & South Florida. Get a fair cash offer in 24 hours. No fees, no repairs, close fast.",
  keywords: "sell my house fast Florida, cash home buyers, we buy houses, Fort Myers, Orlando, Miami, Cape Coral, Naples, veteran owned, sell house as is, cash for houses",
  authors: [{ name: 'Garrison Point Solutions' }],
  creator: 'Garrison Point Solutions',
  publisher: 'Garrison Point Solutions',
  openGraph: {
    title: "Garrison Point Solutions | We Buy Houses Florida",
    description: "Veteran-owned real estate company. Get a fair cash offer in 24 hours. No fees, no repairs, close in as little as 7 days.",
    type: "website",
    locale: "en_US",
    url: 'https://www.garrisonpointsolutions.com',
    siteName: 'Garrison Point Solutions',
    images: [
      {
        url: '/images/cash-buyer-home-florida-paid-sell.jpg',
        width: 1200,
        height: 630,
        alt: 'Garrison Point Solutions - We Buy Houses Florida'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garrison Point Solutions | We Buy Houses Florida',
    description: 'Veteran-owned. Fair cash offers. Close in 7-14 days. No fees, no repairs.',
    images: ['/images/cash-buyer-home-florida-paid-sell.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.garrisonpointsolutions.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0F1C2E" />

        {/* Schema.org markup for the business */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "@id": "https://www.garrisonpointsolutions.com/#organization",
              name: "Garrison Point Solutions",
              legalName: "Garrison Standard, LLC",
              description: "Veteran-owned real estate investment company buying houses for cash throughout Florida. No repairs, no fees, fair cash offers in 24 hours.",
              url: "https://www.garrisonpointsolutions.com",
              telephone: "+1-239-291-3444",
              email: "info@garrisonpointsolutions.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.garrisonpointsolutions.com/logo.jpg"
              },
              image: "https://www.garrisonpointsolutions.com/images/cash-buyer-home-florida-paid-sell.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7901 4th Street N, Suite 300",
                addressLocality: "St Petersburg",
                addressRegion: "FL",
                postalCode: "33702",
                addressCountry: "US"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.8339,
                longitude: -82.6367
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00"
                }
              ],
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "City", name: "Fort Myers" },
                { "@type": "City", name: "Cape Coral" },
                { "@type": "City", name: "Naples" },
                { "@type": "City", name: "Orlando" },
                { "@type": "City", name: "Lakeland" },
                { "@type": "City", name: "St Petersburg" },
                { "@type": "City", name: "Tampa" }
              ],
              sameAs: [
                "https://facebook.com/garrisonpointsolutions",
                "https://instagram.com/garrisonpointsolutions",
                "https://linkedin.com/company/garrisonpointsolutions"
              ],
              priceRange: "$$",
              paymentAccepted: "Cash",
              currenciesAccepted: "USD"
            }),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Cash Home Buying",
              provider: {
                "@type": "RealEstateAgent",
                name: "Garrison Point Solutions"
              },
              areaServed: {
                "@type": "State",
                name: "Florida"
              },
              description: "We buy houses in any condition for cash. No repairs needed, no agent fees, close in as little as 7 days.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD"
                }
              }
            }),
          }}
        />

        {/*
          Google Analytics 4

          The following script tags load the Google Tag Manager library and initialize
          the GA4 tracking code on every page. The tracking ID defaults to the
          value provided via the NEXT_PUBLIC_GOOGLE_ANALYTICS_ID environment
          variable. If that variable is not set, it falls back to the static ID
          `G-WLM6MPREQD` supplied by the site owner.
        */}
        {(() => {
          const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-WLM6MPREQD'
          return (
            <>
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                  `,
                }}
              />
            </>
          )
        })()}
      </head>
      <body className="antialiased bg-[#0F1C2E] text-white">
        <Navbar />
        <div className="pt-24">
          {children}
        </div>
        <Footer />
        {/* Global floating widgets */}
        <ScrollTopButton />
        <LeadConcierge />
      </body>
    </html>
  )
}
