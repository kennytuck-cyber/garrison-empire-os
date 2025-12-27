import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadConcierge from "@/components/LeadConcierge"
import ScrollTopButton from "@/components/ScrollTopButton"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Garrison Point Solutions | We Buy Houses Florida | Cash Offers in 24 Hours",
  description: "Veteran-owned real estate company buying houses in Central Florida, Southwest Florida & South Florida. Get a fair cash offer in 24 hours. No fees, no repairs, close fast.",
  keywords: "sell my house fast Florida, cash home buyers, we buy houses, Fort Myers, Orlando, Miami, Cape Coral, Naples, veteran owned",
  openGraph: {
    title: "Garrison Point Solutions | Fair Cash Offers for Florida Properties",
    description: "23-year Coast Guard veteran buying houses across Florida. Get your cash offer today.",
    type: "website",
    locale: "en_US",
    images: ['/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garrison Point Solutions | We Buy Houses Florida',
    description: 'Veteran-owned. Fair cash offers. Close in 7-14 days.',
  },
  robots: {
    index: true,
    follow: true,
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
              name: "Garrison Point Solutions",
              description:
                "Veteran‑owned real estate company buying houses for cash throughout Florida. No repairs, no fees, fair cash offers in 24 hours.",
              telephone: "239-291-3444",
              url: "https://www.garrisonpointsolutions.com",
              areaServed: "Florida",
            }),
          }}
        />

        {/* Google Analytics (insert your GA ID via NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="google-analytics"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
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
