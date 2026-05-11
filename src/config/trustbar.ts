export interface TrustItem {
  icon: string; // SVG path(s) as raw HTML string
  label: string;
  sublabel: string;
}

export const giftCardTrustItems: TrustItem[] = [
  {
    icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>',
    label: 'Sub-14-day launches',
    sublabel: 'Avg time-to-go-live',
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    label: 'SOC 2 Type II',
    sublabel: 'Continuous compliance',
  },
  {
    icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    label: 'Apple + Google Wallet',
    sublabel: 'Native pass delivery',
  },
  {
    icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/>',
    label: 'Real-time redemption',
    sublabel: 'Sub-second evaluation',
  },
  {
    icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    label: '7 SDKs',
    sublabel: '+ Shopify, Salesforce',
  },
];

export const promotionsTrustItems: TrustItem[] = [
  {
    icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>',
    label: 'Sub-50ms eval',
    sublabel: 'Promo decisions at the edge',
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    label: 'Couponless',
    sublabel: 'No codes to leak or coupon',
  },
  {
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/>',
    label: 'Native A/B testing',
    sublabel: 'Stat-sig auto-detection',
  },
  {
    icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/>',
    label: 'ML personalization',
    sublabel: 'Per-customer discount',
  },
  {
    icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    label: '30-day dry-run',
    sublabel: 'Test before launch',
  },
];

export const loyaltyTrustItems: TrustItem[] = [
  {
    icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>',
    label: 'Sub-30-day launches',
    sublabel: 'Avg time-to-go-live',
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
    label: 'SOC 2 Type II',
    sublabel: 'Continuous compliance',
  },
  {
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/>',
    label: 'Unified ledger',
    sublabel: 'Points + cards + credit',
  },
  {
    icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/>',
    label: 'Real-time tier-up',
    sublabel: 'Sub-second evaluation',
  },
  {
    icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    label: '7 SDKs',
    sublabel: '+ Shopify, Salesforce',
  },
];
