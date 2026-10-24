// Businesses on the About page.
// Values like '[TAGLINE]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Venture {
  name: string;
  tagline?: string;
  /** Logo in public/images. If the file isn't there yet, the initials show instead. */
  logo?: string;
  initials: string;
  role: string;
  start?: string;
  end?: string;
  bullets: string[];
  highlights: string[];
  url?: string;
  urlLabel?: string;
}

export const ventures: Venture[] = [
  {
    name: 'Zyntek Gear',
    tagline: '[TAGLINE]',
    logo: '/images/zyntek-gear-logo.png',
    initials: 'ZG',
    role: 'Founder',
    start: 'Mar 2026',
    end: 'present',
    bullets: [
      'Built the Shopify store from scratch: catalogue, collections, policies and local payment integration',
      'Became an authorised UGREEN reseller in Sri Lanka',
      'Run marketing and content on Facebook, Instagram and TikTok, including Sinhala video scripts',
      'Set up Microsoft 365 for the business: mailboxes, mail flow rules and DNS',
    ],
    highlights: ['Authorised UGREEN reseller', 'Shopify', 'Microsoft 365', 'Social commerce'],
    url: 'https://zyntekgear.com',
    urlLabel: 'Visit zyntekgear.com',
  },
];
