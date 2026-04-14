export const products = [
  {
    id: '1',
    name: 'AuraGlow LED Mirror',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    roas: 5.8,
    cpa: 4.9,
    orders: 1847,
    profit: 42890,
    supplierUrl: 'https://example.com/supplier/aura-glow',
    adsStrategy:
      'UGC-style hooks in first 3s, benefit-led headlines, retarget cart abandoners with 15% offer.',
    audienceTargeting:
      'Women 25–44, interests: home decor, skincare, wellness. Exclude job seekers. Lookalike 1% from purchasers.',
    costBreakdown: {
      cogs: 18.5,
      shipping: 4.2,
      platformFees: 2.1,
      adSpendShare: 24,
    },
  },
  {
    id: '2',
    name: 'Nordic Pour Kettle',
    image:
      'https://images.unsplash.com/photo-1577936347032-d6a1f174ab31?w=400&h=400&fit=crop',
    roas: 6.1,
    cpa: 5.3,
    orders: 962,
    profit: 22100,
    supplierUrl: 'https://example.com/supplier/nordic-pour',
    adsStrategy:
      'Problem-solution carousel, kitchen aesthetic reels, spark ads from top organic posts.',
    audienceTargeting:
      'Homeowners 30–55, coffee & cooking interests, income top 40% in US/CA/UK/AU.',
    costBreakdown: {
      cogs: 22,
      shipping: 5.5,
      platformFees: 2.4,
      adSpendShare: 28,
    },
  },
  {
    id: '3',
    name: 'SilkSleep Travel Set',
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop',
    roas: 6.7,
    cpa: 4.5,
    orders: 3102,
    profit: 71200,
    supplierUrl: 'https://example.com/supplier/silksleep',
    adsStrategy:
      'ASMR unboxing, “sleep hack” angles, limited bundles for AOV lift.',
    audienceTargeting:
      'Frequent travelers, wellness, premium bedding buyers. Broad + creative testing.',
    costBreakdown: {
      cogs: 14,
      shipping: 3.8,
      platformFees: 1.9,
      adSpendShare: 19,
    },
  },
  {
    id: '4',
    name: 'PeakForm Resistance Kit',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    roas: 5.4,
    cpa: 5.8,
    orders: 1288,
    profit: 35600,
    supplierUrl: 'https://example.com/supplier/peakform',
    adsStrategy:
      'Before/after mobility clips, trainer endorsements, BOGO on accessories.',
    audienceTargeting:
      'Fitness 22–50, gym-goers and home workout, exclude students under 22.',
    costBreakdown: {
      cogs: 26,
      shipping: 6,
      platformFees: 2.6,
      adSpendShare: 30,
    },
  },
  {
    id: '5',
    name: 'BloomScent Diffuser',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    roas: 6.3,
    cpa: 4.7,
    orders: 2156,
    profit: 48900,
    supplierUrl: 'https://example.com/supplier/bloomscent',
    adsStrategy:
      'Seasonal scent drops, gifting angles Q4, influencer whitelisting.',
    audienceTargeting:
      'Lifestyle & self-care, homeowners, gift buyers. Advantage+ shopping with strict exclusions.',
    costBreakdown: {
      cogs: 16,
      shipping: 4,
      platformFees: 2,
      adSpendShare: 22,
    },
  },
  {
    id: '6',
    name: 'ClearView Blue-Light Frames',
    image:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop',
    roas: 5.6,
    cpa: 5.1,
    orders: 743,
    profit: 15800,
    supplierUrl: 'https://example.com/supplier/clearview',
    adsStrategy:
      'Screen-time pain points, try-on AR where available, student back-to-school push.',
    audienceTargeting:
      'Remote workers, students 18–35, gaming adjacent. Narrow by device usage interests.',
    costBreakdown: {
      cogs: 9.5,
      shipping: 2.5,
      platformFees: 1.5,
      adSpendShare: 35,
    },
  },
]

/** Shown above the feature matrix — site uses black / gold, not the reference blues. */
export const pricingPlanCards = [
  {
    key: 'free',
    badge: 'Free',
    tagline: 'For experts',
    price: '$0',
    period: '/month',
    tone: 'neutral',
  },
  {
    key: 'gold',
    badge: 'Gold',
    tagline: 'For Beginners',
    price: '$69',
    period: '/month',
    tone: 'gold',
  },
  {
    key: 'diamond',
    badge: 'Diamond',
    tagline: 'Super Saver',
    price: '$299',
    period: '/6 months',
    tone: 'diamond',
  },
]

/**
 * Free vs Gold plan comparison (non-table UI).
 * `variant: 'text'` uses freeLabel / goldLabel; `variant: 'bool'` is ✗ Free / ✓ Gold.
 * Diamond column mirrors Gold (same goldLabel / ticks). Optional `highlight: true` for row emphasis.
 */
export const planComparisonFeatures = [
  {
    key: 'account-manager',
    label: 'Account manager',
    variant: 'text',
    freeLabel: 'Junior',
    goldLabel: 'Senior',
  },
  {
    key: 'response-time',
    label: 'Response time',
    variant: 'text',
    freeLabel: '4 hours',
    goldLabel: '30 mnts',
  },
  {
    key: 'dropshipping-markets',
    label: 'Dropshipping available in',
    variant: 'text',
    freeLabel: 'PAK, KSA, UAE',
    goldLabel: 'All available markets',
    highlight: true,
  },
  { key: 'whatsapp', label: 'Whatsapp group access', variant: 'bool' },
  { key: 'exclusive-product', label: 'Exclusive winning product', variant: 'bool' },
  { key: 'creatives', label: 'Winning creatives & strategy', variant: 'bool' },
  { key: 'bumper', label: 'Bumper trending products', variant: 'bool' },
  { key: 'consultant', label: 'Senior business consultant', variant: 'bool' },
  { key: 'packaging', label: 'Customised packaging', variant: 'bool' },
  { key: 'financing', label: 'Product financing', variant: 'bool' },
]

export const heroSlides = [
  {
    id: 1,
    headline: 'Stop wasting money on product testing — we’ve already found the winners for you.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
  },
  {
    id: 2,
    headline: 'Don’t test products. Sell what’s already winning',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
  },
  {
    id: 3,
    headline: 'Sell smarter, subscribe to Gold plan',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
  },
]
