export interface CapabilityBullet {
  html: string;
}

export type CapabilityVisualSlot =
  | 'ml-personalization'
  | 'ab-testing'
  | 'couponless'
  | 'bulk-gifting'
  | 'refunds-as-credit'
  | 'omnichannel'
  | 'tiers'
  | 'challenges'
  | 'rewards';

export interface CapabilityRowConfig {
  eyebrow: string;
  title: string;
  description: string;
  bullets: CapabilityBullet[];
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  visualSlot: CapabilityVisualSlot;
}

// ── Promotions ───────────────────────────────────────────────────────────────

export const promotionsCapabilityRows: CapabilityRowConfig[] = [
  {
    eyebrow: 'ML Personalization',
    title: "Stop discounting customers who'd buy anyway.",
    description:
      "The biggest waste in promotions: 25% off the customer who would have paid full price. Our ML engine scores every customer's discount sensitivity in real time, so your most loyal buyers see “early access” instead of “25% off” — and your wavering carts see exactly the nudge they need to convert.",
    bullets: [
      { html: '<strong>Per-customer discount sensitivity score</strong> updated nightly from your full order history' },
      { html: '<strong>Predicted incremental margin</strong> — see if a discount is paying for itself before you offer it' },
      { html: '<strong>Auto-tune offer strength</strong> per segment, per customer, per cart context' },
      { html: '<strong>Same engine that powers Talon.One Predict</strong> — without the six-month onboarding' },
    ],
    ctaLabel: 'Explore Predict',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'ml-personalization',
  },
  {
    eyebrow: 'Built-in A/B Testing',
    title: 'Test like Netflix, not like a Shopify app.',
    description:
      'Every campaign is an A/B test by default. Pick a baseline. Pick a variant. Watch the engine auto-detect statistical significance, declare a winner, and roll out the winning variant to 100% of your audience — without a single ticket to your data team.',
    bullets: [
      { html: '<strong>Auto-significance detection</strong> using sequential testing — no peeking penalty' },
      { html: '<strong>Multi-arm bandit mode</strong> for faster convergence on winning offers' },
      { html: '<strong>Holdout groups</strong> measured against revenue, AOV, and downstream LTV' },
      { html: '<strong>Audit log</strong> of every test, every result — defensible decisions for your CFO' },
    ],
    ctaLabel: 'Learn about A/B testing',
    ctaHref: '#',
    reverse: true,
    visualSlot: 'ab-testing',
  },
  {
    eyebrow: 'Couponless Redemption',
    title: 'Stop leaking your margin to coupon sites.',
    description:
      'Coupon codes get scraped, shared on Honey and RetailMeNot, and end up discounting customers who never qualified. Couponless redemption ties promotions directly to customer identity — so the right person gets the right discount, automatically, with nothing to leak.',
    bullets: [
      { html: '<strong>Customer-bound promotions</strong> evaluate at cart time — no code, no leak' },
      { html: '<strong>Hybrid mode</strong> for legacy use cases that still need codes (influencer drops, magazine ads)' },
      { html: '<strong>Single-use unique codes</strong> generated at scale, tied to identity, expire on first use' },
    ],
    ctaLabel: 'See couponless flow',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'couponless',
  },
];

// ── Gift Cards ────────────────────────────────────────────────────────────────

export const giftCardCapabilityRows: CapabilityRowConfig[] = [
  {
    eyebrow: 'Corporate & B2B Gifting',
    title: 'Send 10,000 gift cards by Friday.',
    description:
      'Upload a CSV, schedule the send, watch them deliver. Custom branding per program, per-recipient personalisation, and white-glove approval workflows when finance needs to sign off.',
    bullets: [
      { html: '<strong>Programmatic CSV upload</strong> with field mapping and dry-run preview' },
      { html: '<strong>Multi-step approval</strong> — finance signs off before mass-issuance' },
      { html: '<strong>Volume pricing &amp; invoicing</strong> for orders of 1,000+ at a time' },
      { html: '<strong>Real-time delivery dashboard</strong> with bounce/open/redemption tracking' },
    ],
    ctaLabel: 'Learn about bulk gifting',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'bulk-gifting',
  },
  {
    eyebrow: 'Refunds-as-Credit',
    title: 'Recover 60% of refund revenue.',
    description:
      'When a customer wants a refund, offer them store credit instead — with a small bonus. Most accept. Cash stays in your business, lifetime value goes up, and customer satisfaction climbs because you said "yes" to credit instead of "wait 5–7 days" to a refund.',
    bullets: [
      { html: '<strong>Dynamic incentives</strong> — offer +10%, +15%, or +20% bonus tuned to LTV' },
      { html: '<strong>Embedded in returns flow</strong> — Shopify, Loop, Returnly, custom portals' },
      { html: '<strong>Auto-credit instead of refund</strong> for damaged or late shipments' },
      { html: '<strong>Full audit trail</strong> from return reason to credit issuance to redemption' },
    ],
    ctaLabel: 'Learn about refunds-as-credit',
    ctaHref: '#',
    reverse: true,
    visualSlot: 'refunds-as-credit',
  },
  {
    eyebrow: 'Omnichannel',
    title: 'Issue anywhere. Redeem everywhere.',
    description:
      'One balance, one ledger. A card sold online redeems at the POS. A refund issued by support shows up in the wallet. No reconciliation hell. No "sorry, we can\'t see that on this system."',
    bullets: [
      { html: '<strong>Real-time balance sync</strong> across web, mobile, POS, support, and wallet' },
      { html: '<strong>Pre-built integrations</strong> with Shopify, BigCommerce, Salesforce, Square, Toast' },
      { html: '<strong>Customer service tools</strong> — issue, void, reissue, transfer in two clicks' },
    ],
    ctaLabel: 'See all integrations',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'omnichannel',
  },
];

// ── Loyalty ───────────────────────────────────────────────────────────────────

export const loyaltyCapabilityRows: CapabilityRowConfig[] = [
  {
    eyebrow: 'Tier Architecture',
    title: 'Four tiers. Infinite configuration.',
    description:
      'Define thresholds, reset cadences, earning multipliers, and benefit packages per tier. Roll tiers out progressively or flip the whole program at once with our safe-mode deploy.',
    bullets: [
      { html: '<strong>Flexible thresholds:</strong> Points, spend, visit count, or any custom metric.' },
      { html: '<strong>Tier benefits API:</strong> Query eligibility and unlock brand experiences on the fly.' },
      { html: '<strong>Qualification windows:</strong> Annual reset, rolling 12-month, or lifetime — your call.' },
    ],
    ctaLabel: 'Read tier docs',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'tiers',
  },
  {
    eyebrow: 'Challenges & Campaigns',
    title: 'Gamification that drives real behavior.',
    description:
      'Time-boxed challenges with progress tracking drive urgency. A/B test challenge variants natively — no extra tooling, no sampling headaches.',
    bullets: [
      { html: '<strong>Progress widgets:</strong> Embeddable via our JS SDK or React components.' },
      { html: '<strong>Segment targeting:</strong> Ship challenges to Bronze-only or Platinum-at-risk cohorts.' },
      { html: '<strong>Native A/B testing:</strong> Split traffic across earning rates and measure lift.' },
    ],
    ctaLabel: 'Explore challenges',
    ctaHref: '#',
    reverse: true,
    visualSlot: 'challenges',
  },
  {
    eyebrow: 'Rewards Catalog',
    title: "Redemption that doesn't leak value.",
    description:
      'Connect your Shopify or custom catalog, or use our built-in digital rewards (gift cards, discount codes, digital goods). Set minimum redemption thresholds, expiry policies, and per-tier visibility.',
    bullets: [
      { html: '<strong>Catalog sync:</strong> Pull from your existing product library or curate manually.' },
      { html: '<strong>Expiry policies:</strong> Keep your liability clean with configurable redemption windows.' },
      { html: '<strong>Partial redemption:</strong> Let members redeem points + pay the rest — higher conversion.' },
    ],
    ctaLabel: 'See catalog options',
    ctaHref: '#',
    reverse: false,
    visualSlot: 'rewards',
  },
];
