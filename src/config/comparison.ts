export interface ComparisonRow {
  feature: string;
  us: string | boolean;
  competitors: (string | boolean)[];
  highlight?: boolean;
}

export interface ComparisonConfig {
  eyebrow: string;
  title: string;
  lede: string;
  usLabel: string;
  competitorLabels: string[];
  rows: ComparisonRow[];
}

export const promotionsComparison: ComparisonConfig = {
  eyebrow: 'Why teams switch from Talon.One',
  title: 'The same depth. None of the implementation pain.',
  lede: 'Talon.One is the gold standard for enterprise promotions — and we respect it. But for most mid-market and DTC brands, it\'s overpriced, overscoped, and over a year to deploy. We built the same engine you can ship in weeks.',
  usLabel: '99minds',
  competitorLabels: ['Talon.One', 'Voucherify'],
  rows: [
    { feature: 'Rule-based promotions engine',               us: true,         competitors: [true,              true] },
    { feature: 'ML personalization (per-customer offers)',   us: true,         competitors: ['Predict add-on',  false] },
    { feature: 'Native A/B testing with auto-significance',  us: true,         competitors: [true,              'Manual'] },
    { feature: '30-day dry-run on real data',                us: true,         competitors: ['Sandbox only',    false] },
    { feature: 'Couponless redemption',                      us: true,         competitors: [true,              'Limited'] },
    { feature: 'Native gift cards + loyalty in same ledger', us: true,         competitors: [false,             false] },
    { feature: 'Self-serve sandbox',                         us: true,         competitors: ['Sales call req.', true] },
    { feature: 'Time-to-launch',                             us: '~21 days',   competitors: ['3-9 months',      '~30 days'], highlight: true },
  ],
};

export const homepageComparison: ComparisonConfig = {
  eyebrow: 'Why teams switch',
  title: 'One vendor instead of four.',
  lede: 'See how 99minds compares to running point solutions for each capability.',
  usLabel: '99minds',
  competitorLabels: ['Rise.ai', 'Antavo', 'Talon.One'],
  rows: [
    { feature: 'Gift cards & store credit',  us: true,      competitors: [true,      false,     false] },
    { feature: 'Loyalty & tiers',            us: true,      competitors: ['Limited', true,      'Limited'] },
    { feature: 'Promotions engine',          us: true,      competitors: [false,     'Limited', true] },
    { feature: 'Mobile wallet passes',       us: true,      competitors: [false,     false,     false] },
    { feature: 'Unified customer ledger',    us: true,      competitors: [false,     false,     false] },
    { feature: 'Single API + SDK',           us: true,      competitors: ['Partial', true,      true] },
    { feature: 'One contract, one invoice',  us: true,      competitors: [false,     false,     false] },
  ],
};

export const loyaltyComparison: ComparisonConfig = {
  eyebrow: 'Why teams switch from Antavo & Yotpo',
  title: 'Loyalty depth without the loyalty silo.',
  lede: 'Antavo is a great loyalty platform — that does not do gift cards, store credit, or wallet passes. Yotpo bolted loyalty onto a reviews company. We built the whole reward stack from day one.',
  usLabel: '99minds',
  competitorLabels: ['Antavo', 'Yotpo'],
  rows: [
    { feature: 'Visual rules builder',                us: true,        competitors: [true,        'Templated'] },
    { feature: 'Programmable via typed configs',      us: true,        competitors: ['Limited',   false] },
    { feature: 'Native gift card issuance',           us: true,        competitors: ['3rd party', '3rd party'] },
    { feature: 'Store credit & refunds-as-credit',    us: true,        competitors: [false,       false] },
    { feature: 'Apple + Google Wallet passes',        us: true,        competitors: [false,       false] },
    { feature: 'Unified customer ledger',             us: true,        competitors: [false,       'Partial'] },
    { feature: 'Dry-run rules on real data',          us: true,        competitors: ['Sandbox',   false] },
    { feature: 'Time-to-launch',                      us: '~30 days',  competitors: ['3-6 months', '~60 days'], highlight: true },
  ],
};

export const giftCardComparison: ComparisonConfig = {
  eyebrow: 'Why teams switch from Rise.ai & Blackhawk',
  title: 'Built for the modern stack.',
  lede: 'Rise.ai built for Shopify. Blackhawk built for retail at the dawn of plastic cards. We built for what comes next.',
  usLabel: '99minds',
  competitorLabels: ['Rise.ai', 'Blackhawk'],
  rows: [
    { feature: 'Modern REST API + 7 SDKs',              us: true,        competitors: ['Limited',     'Legacy'] },
    { feature: 'Apple + Google Wallet passes',          us: true,        competitors: [false,         'Add-on'] },
    { feature: 'Refunds-as-credit native flow',         us: true,        competitors: [true,          false] },
    { feature: 'Bulk B2B gifting (10k+)',               us: true,        competitors: ['Limited',     true] },
    { feature: 'Loyalty + promotions on same platform', us: true,        competitors: ['Limited',     false] },
    { feature: 'Multi-currency (140+)',                 us: true,        competitors: ['USD/EUR/GBP', true] },
    { feature: 'Self-serve sandbox',                    us: true,        competitors: [true,          false] },
    { feature: 'Time-to-launch',                        us: '~14 days',  competitors: ['~30 days',    '3-6 months'], highlight: true },
  ],
};
