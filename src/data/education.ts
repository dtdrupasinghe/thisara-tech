// Education on the About page.
// Values like '[START YEAR]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Education {
  degree: string;
  /** Small pill next to the degree, e.g. 'Final year'. */
  status?: string;
  school: string;
  /** Logo in public/images. If the file isn't there yet, a graduation cap icon shows instead. */
  logo?: string;
  location?: string;
  start?: string;
  end?: string;
  research: string[];
}

export const education: Education[] = [
  {
    degree: 'BSc in Management Information Systems',
    status: 'Final year',
    school: 'NSBM Green University',
    logo: '/images/nsbm-logo.png',
    location: 'Sri Lanka',
    start: '2022',
    end: '2026',
    research: ['Explainable AI for Azure cloud cost anomaly detection'],
  },
];
