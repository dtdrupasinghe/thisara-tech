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
      'Became an authorised UGREEN reseller in Sri Lanka',
      'Resell tech accessories from UGREEN, Anker, LDNIO and Logitech, all with warranty',
      'Run marketing and content on Facebook, Instagram and TikTok, including Sinhala video scripts',
    ],
    highlights: ['Authorised UGREEN reseller', 'Anker', 'LDNIO', 'Logitech', 'SME', 'Social commerce'],
    url: 'https://zyntekgear.com',
    urlLabel: 'Visit zyntekgear.com',
  },
];
