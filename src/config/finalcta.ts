export interface CtaButton {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost';
}

export interface FinalCTAConfig {
  titleLead: string;
  titleHighlight: string;
  titleTail: string;
  description: string;
  buttons: CtaButton[];
}

export const promotionsCTA: FinalCTAConfig = {
  titleLead: 'Ready to ship promotions that ',
  titleHighlight: 'actually pay back',
  titleTail: '?',
  description: 'Start with a sandbox key in 30 seconds. Run the simulator on your own data this afternoon.',
  buttons: [
    { label: 'Start free trial →', href: '#', variant: 'primary' },
    { label: 'Book a demo',        href: '#', variant: 'ghost' },
  ],
};

export const homepageCTA: FinalCTAConfig = {
  titleLead: 'Ship your reward program in ',
  titleHighlight: 'a sprint',
  titleTail: ', not a year.',
  description: 'Start with a sandbox key in 30 seconds. Talk to sales when you\'re ready to scale.',
  buttons: [
    { label: 'Start building →', href: '#', variant: 'primary' },
    { label: 'Book a 30-min demo', href: '#', variant: 'ghost' },
  ],
};

export const giftCardCTA: FinalCTAConfig = {
  titleLead: 'Launch gift cards in ',
  titleHighlight: 'a sprint',
  titleTail: ', not a quarter.',
  description: 'Start with sandbox keys. Talk to sales when you\'re ready to go live.',
  buttons: [
    { label: 'Start building →', href: '#', variant: 'primary' },
    { label: 'See pricing', href: '#', variant: 'ghost' },
  ],
};

export const loyaltyCTA: FinalCTAConfig = {
  titleLead: 'Ready to ship loyalty your ',
  titleHighlight: 'marketing team owns',
  titleTail: '?',
  description: 'Start with a sandbox key in 30 seconds. Talk to sales when you\'re ready to migrate.',
  buttons: [
    { label: 'Start free trial →', href: '#', variant: 'primary' },
    { label: 'Book a demo', href: '#', variant: 'ghost' },
  ],
};
