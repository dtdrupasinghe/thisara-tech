// Education on the About page.
// Values like '[START YEAR]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Education {
  degree: string;
  /** Small pill next to the degree, e.g. 'Final year'. */
  status?: string;
  school: string;
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
    location: 'Sri Lanka',
    start: '[START YEAR]',
    end: 'Nov 2026',
    research: [
      'ML recommendation system for plantation fixed deposit investments (Flask web app)',
      'Explainable AI for Azure cloud cost anomaly detection',
    ],
  },
];
