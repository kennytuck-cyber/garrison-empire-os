// app/siteContent.ts

// --- HOMEPAGE CONTENT (Exported as 'siteContent') ---
export const siteContent = {
  hero: {
    title: "Sell Your Florida Home Fast—In Any Condition",
    subtitle: "We are veteran-owned cash buyers serving the entire state. No repairs, no agents, no fees.",
    cta: "Get My Cash Offer",
    imageSrc: "/home-cash-offer-real-estate-florida-buy-sell-property.webp",
    alt: "Modern luxury Florida home with pool representing a successful sale",
  },
  about: {
    title: "Veteran-Owned & Operated",
    heading: "Honor, Integrity, and Service.",
    description: "Real estate transactions should be handled with the same discipline and integrity as a military operation. As a retired Coast Guard family, we bring 23 years of service experience to every deal. We don't just buy houses; we solve problems for our fellow Floridians.",
    imageSrc: "/military-veteran-cash-real-estate-florida-buy-sell-investment.jpg",
    alt: "Shadow box display showing Coast Guard service medals and insignia",
    secondaryImageSrc: "/military-veteran-real-estate-florida-cash-buy-sell-pride-patriot-honest-trust.jpg",
    secondaryAlt: "Coast Guard veteran holding dress cover hat",
  },
  locations: [
    { city: "Miami & South FL", imageSrc: "/miami-real-estate-south-florida-cash-buy-offfer-sell.jpg", alt: "Miami skyline at sunset" },
    { city: "Orlando & Central FL", imageSrc: "/orlando-central-flroida-real-estate-cash-sell-buy.jpg", alt: "Orlando city skyline at night" },
    { city: "Fort Myers & SWFL", imageSrc: "/fort-myers-beach-southwest-florida-swfl-real-estate-cash-buy-sell.jpg", alt: "Fort Myers beach" },
    { city: "Cape Coral", imageSrc: "/cape-coral-swfl-real-estate-sell-cash-buy-.jpg", alt: "Cape Coral canal homes" },
    { city: "Florida Panhandle", imageSrc: "/florida-home-cash-real-estate-sell-buy-fas-2.jpg", alt: "Classic Florida bungalow" },
    { city: "Statewide Rural", imageSrc: "/central-florida-home-sell-buy-cash-offer.jpg", alt: "Oak tree lined street" }
  ],
  situations: [
    { id: "military", title: "Military PCS", description: "Orders in hand? We close on your timeline.", imageSrc: "/military-moving-pcs-sale-home-real-estate-cash-offer-florida.jpg", alt: "PCS Move" },
    { id: "storm", title: "Storm Damage", description: "We buy flood-damaged homes as-is.", imageSrc: "/hurricane-damage-flood-florida-sale-cash-offer-real-estate.JPG", alt: "Flood damage" },
    { id: "inheritance", title: "Inherited Homes", description: "Sell the estate without the cleanout.", imageSrc: "/inheritance-estate-family-inherited-probate-cash-offer.jpg", alt: "Inheritance" },
    { id: "divorce", title: "Divorce Sale", description: "Neutral, fast, and private sales.", imageSrc: "/divorce-home-sale-cash-sell-easy-fast-mitigation.jpg", alt: "Divorce" },
    { id: "distressed", title: "Code Violations", description: "We handle liens and fines.", imageSrc: "/code-violations-home-sell-cash-offer-florida-hoa.jpg", alt: "Code Violations" },
    { id: "foreclosure", title: "Stop Foreclosure", description: "Close before the auction.", imageSrc: "/deal-forclosure-cash-closing-title-florida--2.webp", alt: "Foreclosure" },
  ],
  portfolio: [
    { imageSrc: "/real-estate-cash-buy-sell-offer-florida-home.jpg", alt: "Waterfront home" },
    { imageSrc: "/home-cash-sell-offer-buy-real-estate-florida-property.jpg", alt: "White single family home" }
  ],
  contact: {
    phone: "(239) 291-3444",
    email: "offers@garrisonempire.com", 
    address: "Florida, USA",
  }
};

// --- DYNAMIC SLUG CONTENT (Exported as 'SITE_CONTENT') ---
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
    city: 'Miami',
    h1: 'We Buy Houses in Miami',
    intro: 'From Brickell to the suburbs, we purchase properties across Miami-Dade County regardless of condition.',
    description: 'Selling in Miami doesn’t have to mean open houses.',
    neighborhoods: ['Coral Gables', 'Little Havana', 'Wynwood', 'Kendall', 'Miami Gardens'],
  },
  'orlando': {
    type: 'location',
    city: 'Orlando',
    h1: 'Sell Your Orlando Home Fast',
    intro: 'Central Florida market experts ready to make you a cash offer today.',
    description: 'Skip the tourist traffic and the open houses.',
    neighborhoods: ['Winter Park', 'Kissimmee', 'Lake Nona', 'Downtown', 'Altamonte Springs'],
  },
  'fort-myers': {
    type: 'location',
    city: 'Fort Myers',
    h1: 'Cash Buyers in Fort Myers',
    intro: 'Recovering from storm damage? We buy properties as-is throughout Lee County.',
    description: 'We live here, we invest here.',
    neighborhoods: ['Dunbar', 'Gateway', 'Iona', 'North Fort Myers', 'Lehigh Acres'],
  },
  'cape-coral': {
    type: 'location',
    city: 'Cape Coral',
    h1: 'Sell in Cape Coral',
    intro: 'Waterfront or inland, we provide fair market cash offers for Cape Coral homeowners.',
    description: 'No flood insurance headaches, just a fast sale.',
    neighborhoods: ['Yacht Club', 'Pelican', 'Burnt Store', 'Matlacha', 'Caloosahatchee'],
  },
};
