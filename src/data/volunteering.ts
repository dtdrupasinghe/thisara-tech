// Clubs and communities on the About page. List each organisation's roles newest first.
// Values like '[YEAR]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Volunteering {
  org: string;
  /** Muted line under the name, e.g. the university or full club name. */
  sub?: string;
  /** Logo in public/images. If the file isn't there yet, the initials show instead. */
  logo?: string;
  initials: string;
  /** Gives the card a stronger border. */
  featured?: boolean;
  roles: { role: string; dates?: string }[];
}

export const volunteering: Volunteering[] = [
  {
    org: 'CompuVate Association',
    sub: 'NSBM Green University',
    logo: '/images/logo-compuvate.png',
    initials: 'CV',
    featured: true,
    roles: [{ role: 'Vice President', dates: '[YEARS]' }],
  },
  {
    org: 'Computer Society of Sri Lanka',
    sub: 'CSSL',
    logo: '/images/logo-cssl.png',
    initials: 'CSSL',
    roles: [{ role: 'Volunteer', dates: '[YEAR]' }],
  },
  {
    org: 'IEEE',
    sub: '[STUDENT BRANCH NAME]',
    logo: '/images/logo-ieee.png',
    initials: 'IEEE',
    roles: [{ role: 'Finance Team Member', dates: '[YEAR]' }],
  },
  {
    org: 'CISS Club',
    sub: '[CISS FULL NAME]',
    logo: '/images/logo-ciss.png',
    initials: 'CISS',
    roles: [
      { role: 'Event Organiser', dates: '[YEAR]' },
      { role: 'Community Member', dates: '[YEAR]' },
    ],
  },
];
