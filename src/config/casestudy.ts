export interface CaseStudyResult {
  num: string;
  desc: string;
}

export interface CaseStudyConfig {
  eyebrow?: string;
  title?: string;
  companyLogo?: string;
  quote?: string;
  authorInitials?: string;
  authorName?: string;
  authorRole?: string;
  resultsLabel?: string;
  results?: CaseStudyResult[];
}

export const giftCardCaseStudy: CaseStudyConfig = {
  eyebrow: 'Customer Story',
  title: 'How Northwind cut refunds by 41%.',
  companyLogo: 'NORTHWIND',
  quote: '"Within 90 days of switching to 99minds, our refund-to-credit conversion hit 64%. We saved $1.2M in cash that would\'ve left the business — and our customers were happier because they got value back instantly."',
  authorInitials: 'RC',
  authorName: 'Rachel Chen',
  authorRole: 'VP Customer Experience, Northwind Retail',
  resultsLabel: 'Results in first 90 days',
  results: [
    { num: '$1.2M',  desc: 'In refunds converted to store credit' },
    { num: '64%',    desc: 'Of customers chose credit + 15% bonus' },
    { num: '1.4×',   desc: 'LTV uplift on credit-redeeming customers' },
    { num: '12 days', desc: 'From kickoff to live in production' },
  ],
};

export const loyaltyCaseStudy: CaseStudyConfig = {
  eyebrow: 'Customer Story',
  title: 'How Lumen & Co tripled their VIP cohort.',
  companyLogo: 'LUMEN&CO',
  quote: '"We migrated off Yotpo Loyalty in five weeks. The visual builder meant our merchandising team owns the program — they ship a new challenge every Friday without filing a single ticket. VIP cohort tripled in nine months."',
  authorInitials: 'MJ',
  authorName: 'Marcus Johnson',
  authorRole: 'Head of CRM, Lumen & Co',
  resultsLabel: 'Results in first 9 months',
  results: [
    { num: '3.1×',   desc: 'Growth in Gold + Platinum cohort' },
    { num: '+38%',   desc: 'Repeat purchase rate among members' },
    { num: '52',     desc: 'Rules shipped by marketing without engineering' },
    { num: '5 wks',  desc: 'From kickoff to full member migration' },
  ],
};

export const promotionsCaseStudy: CaseStudyConfig = {
  eyebrow: 'Customer Story',
  title: 'How Verdant grew incremental margin 31%.',
  companyLogo: 'VERDANT',
  quote: '"We were quoted nine months for Talon.One. We launched on 99minds in three weeks. The ML personalization alone paid for the platform in the first quarter — we stopped throwing 25% at customers who would have bought at full price."',
  authorInitials: 'PP',
  authorName: 'Priya Patel',
  authorRole: 'Director of Growth, Verdant',
  resultsLabel: 'Results in first 6 months',
  results: [
    { num: '+31%',  desc: 'Incremental margin on promoted orders' },
    { num: '-42%',  desc: 'Discount cost per order via ML targeting' },
    { num: '147',   desc: 'A/B tests run in 6 months — most by marketing alone' },
    { num: '3 wks', desc: 'From contract signed to first live campaign' },
  ],
};

export const walletCaseStudy: CaseStudyConfig = {
  eyebrow: 'Customer Story',
  title: 'How Sagehaus drove 4.2x repeat visits.',
  companyLogo: 'SAGEHAUS',
  quote: '"Wallet passes felt like marketing magic. Our customers see their balance every time they pull out their phone -- that\'s a brand impression we used to pay for. The geo-push when they\'re a block from one of our cafes has been an instant win for foot traffic."',
  authorInitials: 'EC',
  authorName: 'Eli Chen',
  authorRole: 'Director of Retention, Sagehaus Coffee',
  resultsLabel: 'Results in first 6 months',
  results: [
    { num: '4.2x',   desc: 'Repeat visit rate among wallet pass holders' },
    { num: '68%',    desc: 'Of newly issued cards installed to wallet within 24h' },
    { num: '$0',     desc: 'Spent on Apple Developer account or Pass Type ID setup' },
    { num: '9 days', desc: 'From kickoff to first live pass on a customer\'s phone' },
  ],
};
