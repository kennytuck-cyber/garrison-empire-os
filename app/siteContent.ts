// app/siteContent.ts

// --- HOMEPAGE CONTENT ---
export const siteContent = {
  hero: {
    title: "Sell Your Florida Home Fast—In Any Condition",
    subtitle: "We are veteran-owned cash buyers serving Central, Southwest, and South Florida. No repairs, no agents, no fees.",
    cta: "Get My Cash Offer",
    // Switched to the Twilight Waterfront image you provided
    imageSrc: "/images/real-estate-cash-buy-sell-offer-florida-home.jpg",
    alt: "Luxury waterfront Florida home at sunset",
  },
  about: {
    title: "Veteran-Owned & Operated",
    heading: "Honor, Integrity, and Service.",
    description: "Real estate transactions should be handled with the same discipline and integrity as a military operation. As a retired Coast Guard family, we bring 23 years of service experience to every deal. We don't just buy houses; we solve problems for our fellow Floridians.",
    // ONLY the Shadow Box image for the main section
    imageSrc: "/images/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg",
    alt: "Shadow box display showing Coast Guard service medals and insignia",
  },
  locations: [
    { 
      city: "Central Florida", 
      slug: "orlando",
      imageSrc: "/images/orlando-central-flroida-real-estate-cash-sell-buy.jpg", 
      alt: "Orlando city skyline at night" 
    },
    { 
      city: "Southwest Florida", 
      slug: "fort-myers",
      imageSrc: "/images/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg", 
      alt: "Fort Myers beach coastline" 
    },
    { 
      city: "South Florida", 
      slug: "miami",
      imageSrc: "/images/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg", 
      alt: "Miami skyline at sunset" 
    }
  ],
  situations: [
    { id: "military", title: "Military PCS", description: "Orders in hand? We close on your timeline.", imageSrc: "/images/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg", alt: "PCS Move" },
    { id: "storm", title: "Storm Damage", description: "We buy flood-damaged homes as-is.", imageSrc: "/images/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG", alt: "Flood damage" },
    { id: "inheritance", title: "Inherited Homes", description: "Sell the estate without the cleanout.", imageSrc: "/images/inheritance-estate-family-inherited-probate-cash-offer.jpg", alt: "Inheritance" },
    { id: "divorce", title: "Divorce Sale", description: "Neutral, fast, and private sales.", imageSrc: "/images/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg", alt: "Divorce" },
    { id: "distressed", title: "Code Violations", description: "We handle liens and fines.", imageSrc: "/images/code-violations-home-sell-cash-offer-florida-hoa.jpg", alt: "Code Violations" },
    { id: "foreclosure", title: "Stop Foreclosure", description: "Close before the auction.", imageSrc: "/images/deal-forclosure-cash-closing-title-florida--2.webp", alt: "Foreclosure" },
  ],
  contact: {
    phone: "(239) 291-3444",
    email: "offers@garrisonempire.com", 
    address: "Florida, USA",
  }
};

// --- DYNAMIC SLUG CONTENT (Exported as 'SITE_CONTENT' for slug pages) ---
export const SITE_CONTENT: Record<string, any> = {
  // SITUATIONS
  'military': {
    type: 'situation',
    title: 'Military PCS',
    h1: 'PCS Orders? Sell Fast.',
    intro: 'The timeline for a Permanent Change of Station is unforgiving. We close on your schedule so you can report for duty without carrying two mortgages.',
    description: 'We specialize in assisting service members with rapid relocations.',
    painPoints: ['Tight PCS timelines', 'Stress of managing a vacant home', 'Double mortgage payments'],
    solution: 'We align our closing date exactly with your report date.',
  },
  'veteran': { 
    type: 'situation',
    title: 'Military PCS',
    h1: 'PCS Orders? Sell Fast.',
    intro: 'The timeline for a Permanent Change of Station is unforgiving. We close on your schedule so you can report for duty without carrying two mortgages.',
    description: 'We specialize in assisting service members with rapid relocations.',
    painPoints: ['Tight PCS timelines', 'Stress of managing a vacant home', 'Double mortgage payments'],
    solution: 'We align our closing date exactly with your report date.',
  },
  'inherited': {
    type: 'situation',
    title: 'Inherited Property',
    h1: 'Navigate Probate with Ease',
    intro: 'Liquidating an estate is emotional and complex. We buy inherited homes "as-is," so you don’t have to sort through decades of belongings.',
    description: 'We handle the heavy lifting of probate sales.',
    painPoints: ['Probate delays', 'Emotional burden of cleanouts', 'Costly updates for market readiness'],
    solution: 'We buy the property with contents included. Take what you want, leave the rest.',
  },
  'divorce': {
    type: 'situation',
    title: 'Divorce Sale',
    h1: 'A Fair, Neutral Resolution',
    intro: 'We provide a transparent, third-party sale that allows both parties to liquidate the asset quickly and move forward with their lives.',
    description: 'Fast, private liquidation of shared assets.',
    painPoints: ['Disagreements on listing price', 'Invasive public showings', 'Prolonged negotiation'],
    solution: 'A single cash offer that lets both parties cash out and move on immediately.',
  },
  'foreclosure': {
    type: 'situation',
    title: 'Stop Foreclosure',
    h1: 'Protect Your Credit',
    intro: 'If the bank is calling, time is your most valuable asset. We can close in as little as 7 days, paying off the debt before the auction.',
    description: 'Immediate financial relief for distressed properties.',
    painPoints: ['Looming auction dates', 'Compounding late fees', 'Permanent credit damage'],
    solution: 'We pay cash to clear the debt instantly.',
  },

  // LOCATIONS
  'miami': {
    type: 'location',
    city: 'South Florida',
    h1: 'We Buy Houses in South Florida',
    intro: 'From Miami to Fort Lauderdale, we purchase properties regardless of condition.',
    description: 'Selling in Miami doesn’t have to mean open houses.',
    neighborhoods: ['Miami', 'Fort Lauderdale', 'Homestead', 'Hollywood', 'Coral Gables'],
  },
  'orlando': {
    type: 'location',
    city: 'Central Florida',
    h1: 'Sell Your Central Florida Home',
    intro: 'Orlando and Polk County market experts ready to make you a cash offer today.',
    description: 'Skip the tourist traffic and the open houses.',
    neighborhoods: ['Orlando', 'Kissimmee', 'Lakeland', 'Winter Park', 'Altamonte Springs'],
  },
  'fort-myers': {
    type: 'location',
    city: 'Southwest Florida',
    h1: 'Cash Buyers in SWFL',
    intro: 'Recovering from storm damage? We buy properties as-is throughout Lee and Collier County.',
    description: 'We live here, we invest here.',
    neighborhoods: ['Fort Myers', 'Cape Coral', 'Naples', 'Bonita Springs', 'Estero'],
  },
};
