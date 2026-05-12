export interface CodeCallout {
  icon: string;
  title: string;
  body: string;
}

export interface DeveloperSectionConfig {
  eyebrow: string;
  headingBefore: string;
  gradientText: string;
  headingAfter?: string;
  lede: string;
  callouts: CodeCallout[];
  tabs: string[];
  activeTab?: number;
  codeHtml: string;
}

// ─── token color helpers (inline styles, no CSS classes) ─────────────────────
const K  = (s: string) => `<span style="color:#c4b5fd">${s}</span>`;           // keyword/var
const S  = (s: string) => `<span style="color:#7ef0c5">${s}</span>`;           // string
const N  = (s: string) => `<span style="color:#fbbf6e">${s}</span>`;           // number
const F  = (s: string) => `<span style="color:#82d4ff">${s}</span>`;           // function
const P  = (s: string) => `<span style="color:rgba(255,255,255,0.5)">${s}</span>`;  // punct
const C  = (s: string) => `<span style="color:rgba(255,255,255,0.35);font-style:italic">${s}</span>`; // comment
const L  = (s: string) => `<span class="block">${s}</span>`;                   // line

// ─── Homepage / Index ─────────────────────────────────────────────────────────
const homepageCode = [
  L(C('# Issue a $50 branded eGift, push to wallet, log to ledger')),
  L(`${F('curl')} https://api.99minds.com/v1/gift_cards ${P('\\')}`),
  L(`  -u ${S('sk_live_•••:')} ${P('\\')}`),
  L(`  -H ${S('"99minds-Version: 2026-04-01"')} ${P('\\')}`),
  L(`  -d ${S('amount=5000')} ${P('\\')}`),
  L(`  -d ${S('currency=usd')} ${P('\\')}`),
  L(`  -d ${S('recipient_email=ada@example.com')} ${P('\\')}`),
  L(`  -d ${S('design=brand_default')} ${P('\\')}`),
  L(`  -d ${S('wallet_pass=true')}`),
  L('&nbsp;'),
  L(C('# → 201 Created')),
  L(P('{')),
  L(`  ${K('"id"')}${P(':')} ${S('"gc_8KPq2x9LmZ"')}${P(',')}`),
  L(`  ${K('"amount"')}${P(':')} ${N('5000')}${P(',')}`),
  L(`  ${K('"currency"')}${P(':')} ${S('"usd"')}${P(',')}`),
  L(`  ${K('"status"')}${P(':')} ${S('"active"')}${P(',')}`),
  L(`  ${K('"wallet_pass_url"')}${P(':')} ${S('"https://w.99m.co/p/8K..."')}${P(',')}`),
  L(`  ${K('"created"')}${P(':')} ${N('1746230400')}`),
  L(P('}')),
].join('\n');

// ─── Gift Cards ───────────────────────────────────────────────────────────────
const giftCardCode = [
  L(C('// Issue a $50 branded eGift, push to wallet, log to ledger')),
  L(`${K('import')} NinetyNine ${K('from')} ${S("'99minds'")}${P(';')}`),
  L(`${K('const')} client ${P('=')} ${K('new')} ${F('NinetyNine')}${P('(')}${S("'sk_live_•••'")}${P(');')}`),
  L('&nbsp;'),
  L(`${K('const')} giftCard ${P('=')} ${K('await')} client${P('.')}giftCards${P('.')}${F('create')}${P('({"')}`),
  L(`  amount${P(':')}    ${N('5000')}${P(',')}                       ${C('// $50.00')}`),
  L(`  currency${P(':')}  ${S("'usd'")}${P(',')}`),
  L(`  recipient${P(':')} ${P('{')}`),
  L(`    email${P(':')} ${S("'ada@example.com'")}${P(',')}`),
  L(`    name${P(':')}  ${S("'Ada Lovelace'")}`),
  L(`  ${P('},')} `),
  L(`  design${P(':')}      ${S("'birthday_purple'")}${P(',')}`),
  L(`  message${P(':')}     ${S("'Happy birthday, Ada!'")}${P(',')}`),
  L(`  wallet_pass${P(':')} ${K('true')}${P(',')}`),
  L(`  delivery${P(':')}    ${S("'email'")}`),
  L(`${P('}, {')} idempotencyKey${P(':')} ${S("'birthday-ada-2026'")} ${P('});')}`),
  L('&nbsp;'),
  L(`console${P('.')}${F('log')}${P('(')}giftCard${P('.')}id${P(');')} ${C('// gc_8KPq2x9LmZ')}`),
].join('\n');

// ─── Loyalty ──────────────────────────────────────────────────────────────────
const loyaltyCode = [
  L(C('# Birthday reward rule — same as visual builder')),
  L(`${K('name')}${P(':')} ${S('birthday_gold_platinum')}`),
  L(`${K('version')}${P(':')} ${N('3')}`),
  L(`${K('enabled')}${P(':')} ${K('true')}`),
  L('&nbsp;'),
  L(`${K('trigger')}${P(':')}`),
  L(`  ${K('event')}${P(':')} ${S('customer.birthday')}`),
  L(`  ${K('timezone')}${P(':')} ${S('customer.local')}`),
  L(`  ${K('fires_at')}${P(':')} ${S('"08:00"')}`),
  L('&nbsp;'),
  L(`${K('conditions')}${P(':')}`),
  L(`  ${P('-')} ${K('customer.tier')}${P(':')}`),
  L(`      ${K('in')}${P(':')} ${P('[')}${S('gold')}${P(',')} ${S('platinum')}${P(']')}`),
  L('&nbsp;'),
  L(`${K('actions')}${P(':')}`),
  L(`  ${P('-')} ${K('type')}${P(':')} ${S('issue_gift_card')}`),
  L(`    ${K('amount')}${P(':')} ${N('2500')}            ${C('# $25.00')}`),
  L(`    ${K('currency')}${P(':')} ${S('usd')}`),
  L(`    ${K('delivery')}${P(':')} ${P('[')}${S('email')}${P(',')} ${S('wallet')}${P(']')}`),
  L(`  ${P('-')} ${K('type')}${P(':')} ${S('award_points')}`),
  L(`    ${K('amount')}${P(':')} ${N('500')}`),
  L(`    ${K('reason')}${P(':')} ${S('"Birthday bonus"')}`),
].join('\n');

// ─── Promotions ───────────────────────────────────────────────────────────────
const promotionsCode = [
  L(C('// Evaluate every applicable promo for this cart')),
  L(`${K('const')} result ${P('=')} ${K('await')} client${P('.')}promotions${P('.')}${F('evaluate')}${P('({"')}`),
  L(`  customer${P(':')} ${S("'cus_8KPq2x'")}${P(',')}`),
  L(`  cart${P(':')} ${P('{')}`),
  L(`    items${P(':')} ${P('[')}`),
  L(`      ${P('{')} sku${P(':')} ${S("'LIN-OS-M'")}${P(',')} price${P(':')} ${N('16500')}${P(',')} qty${P(':')} ${N('1')} ${P('},')} `),
  L(`      ${P('{')} sku${P(':')} ${S("'WLT-28'")}${P(',')}   price${P(':')} ${N('14500')}${P(',')} qty${P(':')} ${N('1')} ${P('},')} `),
  L(`      ${P('{')} sku${P(':')} ${S("'CTOTE'")}${P(',')}   price${P(':')} ${N('5800')}${P(',')}  qty${P(':')} ${N('1')}  ${P('}')}`),
  L(`    ${P('],')} `),
  L(`    currency${P(':')} ${S("'usd'")}`),
  L(`  ${P('},')} `),
  L(`  context${P(':')} ${P('{')} channel${P(':')} ${S("'web'")}${P(',')} region${P(':')} ${S("'us-east'")} ${P('}')}`),
  L(`${P('});')}`),
  L('&nbsp;'),
  L(C('// ✓ 38ms response')),
  L(P('{')),
  L(`  ${K('applied')}${P(':')} ${P('[{')}`),
  L(`    ${K('id')}${P(':')} ${S("'promo_spring_refresh'")}${P(',')}`),
  L(`    ${K('discount')}${P(':')} ${N('9200')}${P(',')} ${C('// $92.00')}`),
  L(`    ${K('points_bonus')}${P(':')} ${N('1000')}${P(',')}`),
  L(`    ${K('reason')}${P(':')} ${S("'Gold tier + spring collection'")}`),
  L(`  ${P('}],')} `),
  L(`  ${K('eval_id')}${P(':')} ${S("'eval_38xK9q'")} ${C('// for replay/audit')}`),
  L(P('}')),
].join('\n');

// ─── Exports ──────────────────────────────────────────────────────────────────
export const homepageDeveloper: DeveloperSectionConfig = {
  eyebrow: 'For developers',
  headingBefore: "Built like you'd ",
  gradientText: 'build it yourself',
  headingAfter: '.',
  lede: "Idempotent endpoints. Predictable errors. SDKs in seven languages. Sandbox parity. The kind of API you actually want to integrate.",
  callouts: [
    {
      icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
      title: 'SDKs in 7 languages',
      body: 'Node, Python, Go, Ruby, PHP, Java, .NET. Plus Shopify, Salesforce Commerce, and BigCommerce plugins.',
    },
    {
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
      title: 'Sandbox = production',
      body: 'Test environment is byte-identical to live. Same latency profile. Same webhook timing. Test wallet passes on real devices.',
    },
    {
      icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/>',
      title: 'Versioning that respects your time',
      body: 'API versions are date-pinned. Breaking changes never auto-apply. 18-month deprecation windows, minimum.',
    },
  ],
  tabs: ['cURL', 'Node', 'Python', 'Go', 'Ruby'],
  activeTab: 0,
  codeHtml: homepageCode,
};

export const giftCardDeveloper: DeveloperSectionConfig = {
  eyebrow: 'For developers',
  headingBefore: 'Issue your first gift card in ',
  gradientText: 'five lines of code',
  headingAfter: '.',
  lede: "Idempotent endpoints. Webhooks for every state change. Sandbox parity. SDKs in seven languages. The kind of API your team won't dread.",
  callouts: [
    {
      icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
      title: 'Seven SDKs, one mental model',
      body: 'Node, Python, Go, Ruby, PHP, Java, .NET. Same shape, same idioms, same docs.',
    },
    {
      icon: '<path d="M12 2v6m0 0l3-3m-3 3l-3-3"/><rect x="3" y="10" width="18" height="11" rx="2"/>',
      title: 'Idempotency keys built in',
      body: 'Retry safely. Network blips never double-issue a card. Distributed-systems hygiene by default.',
    },
    {
      icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/>',
      title: '60+ webhook event types',
      body: 'Subscribe to exactly the events you need. Signed payloads. At-least-once delivery. Exponential retry.',
    },
  ],
  tabs: ['Node', 'Python', 'Ruby', 'cURL'],
  activeTab: 0,
  codeHtml: giftCardCode,
};

export const loyaltyDeveloper: DeveloperSectionConfig = {
  eyebrow: 'For developers',
  headingBefore: 'Visual and code stay ',
  gradientText: 'in lockstep',
  headingAfter: '.',
  lede: "Every rule built in the visual editor is a typed config you can review in a PR. Every API-driven rule shows up in the visual editor for your marketing team to inspect. One source of truth. No drift.",
  callouts: [
    {
      icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
      title: 'Typed rule configs',
      body: 'JSON or YAML. Versioned in your repo. Diffable in PRs. Roll back any rule to any prior state in one click.',
    },
    {
      icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/>',
      title: 'Dry-run before deploy',
      body: 'Test any rule against your last 30 days of customer events. See exactly which members would have triggered it.',
    },
    {
      icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      title: 'Hooks at every step',
      body: 'Subscribe to tier.changed, points.earned, reward.redeemed and 30+ more events.',
    },
  ],
  tabs: ['Rule (YAML)', 'Award (Node)', 'Webhook'],
  activeTab: 0,
  codeHtml: loyaltyCode,
};

export const promotionsDeveloper: DeveloperSectionConfig = {
  eyebrow: 'For developers',
  headingBefore: 'Evaluate any cart in ',
  gradientText: 'under 50ms',
  headingAfter: '.',
  lede: "A single endpoint takes a cart and a customer ID, returns every applicable promotion sorted by best-fit. Idempotent. Edge-deployed. Designed to live inside your checkout's hot path.",
  callouts: [
    {
      icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>',
      title: 'Edge-deployed evaluation',
      body: 'Multi-region edge nodes mean p50 of 38ms anywhere on Earth. Your checkout never blocks waiting on a promo decision.',
    },
    {
      icon: '<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>',
      title: 'Stackable & exclusive logic',
      body: 'Built-in stacking rules. Tier-protected exclusives. No more two coupons accidentally combining for free product.',
    },
    {
      icon: '<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/>',
      title: 'Replay any decision',
      body: "Every evaluation is logged with the full inputs. Reproduce a customer's exact discount calculation months later for audits or disputes.",
    },
  ],
  tabs: ['Evaluate (Node)', 'Rule (YAML)', 'Webhook'],
  activeTab: 0,
  codeHtml: promotionsCode,
};
