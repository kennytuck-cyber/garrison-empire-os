import type { Metadata } from "next"
import { Roboto, Montserrat } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Garrison Point Solutions | Real Estate Solutions with Military Precision",
  description: "Honest, transparent real estate solutions for sellers and off-market opportunities for investors. Veteran-owned, service-driven.",
  keywords: "real estate, cash home buyers, Lee County FL, Polk County FL, Mobile AL, veteran owned, wholesale real estate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
