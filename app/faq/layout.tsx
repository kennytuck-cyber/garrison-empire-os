import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Cash Home Buyers Florida | Garrison Point Solutions',
  description: 'Get answers to common questions about selling your house for cash in Florida. Learn about our process, closing timeline, fees, and how we determine offer prices.',
  keywords: 'cash home buyer FAQ, sell house fast questions, Florida cash buyer questions, how cash home buyers work, sell house as-is FAQ',
  openGraph: {
    title: 'Frequently Asked Questions | Garrison Point Solutions',
    description: 'Get answers to common questions about selling your house for cash in Florida.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
