export interface Stat {
  value: string;
  label: string;
}

export interface StatsBandConfig {
  stats: Stat[];
}

export const promotionsStats: StatsBandConfig = {
  stats: [
    { value: '38ms',    label: 'p50 promotion evaluation latency at the edge, globally' },
    { value: '+22%',    label: 'Avg incremental margin from ML-personalized offers vs flat discounts' },
    { value: '~21 days',label: 'From kickoff to first live campaign — Talon.One averages 6 months' },
    { value: '0%',      label: 'Of customers say they miss filling in coupon codes' },
  ],
};

export const homepageStats: StatsBandConfig = {
  stats: [
    { value: '$2.4B',   label: 'Stored value processed annually across our platform' },
    { value: '99.99%',  label: 'Uptime over the last 12 months. Multi-region active-active.' },
    { value: '142ms',   label: 'Median API latency at the p50, measured from your edge' },
    { value: '600+',    label: 'Brands trust 99minds for their loyalty & rewards rails' },
  ],
};

export const giftCardStats: StatsBandConfig = {
  stats: [
    { value: '$1.8B',   label: 'Gift card value issued through our platform annually' },
    { value: '12M+',    label: 'Gift cards issued across retail, F&B, and travel brands' },
    { value: '<0.1%',   label: 'Fraud rate — industry average is 3-5%' },
    { value: '99.99%',  label: 'Uptime over the last 12 months. Multi-region active-active.' },
  ],
};

export const loyaltyStats: StatsBandConfig = {
  stats: [
    { value: '3.2x',      label: 'Repeat purchase rate for tiered members vs non-members' },
    { value: '42%',       label: 'Average LTV uplift after 12 months in a 99minds program' },
    { value: '68%',       label: 'Of Gold+ members redeem rewards within 30 days' },
    { value: '~30 days',  label: 'From kickoff to live program. Antavo takes 3-6 months.' },
  ],
};

export const walletStats: StatsBandConfig = {
  stats: [
    { value: '92%',  label: 'Avg open rate on wallet push notifications vs 22% for email' },
    { value: '1.2s', label: 'Median time from balance change to wallet pass update' },
    { value: '73%',  label: 'Of installed passes are still active 12 months later' },
    { value: '3.8x', label: 'In-store visit lift among customers with the wallet pass installed' },
  ],
};
