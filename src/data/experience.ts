// Work experience on the About page, newest first.
// Values like '[MONTH]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Experience {
  role: string;
  company: string;
  location?: string;
  start?: string;
  end?: string;
  /** Shown after the dates in brackets, e.g. '27 weeks'. */
  note?: string;
  /** Shows the orange "Now" pill. */
  current?: boolean;
  /** Type pill above the role, e.g. 'Internship'. */
  type?: string;
  icon: 'cloud' | 'code';
  bullets: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    role: 'Cloud Support Engineer Intern',
    company: 'Cloudeli',
    location: 'Singapore',
    start: '[MONTH] 2026',
    end: 'present',
    current: true,
    icon: 'cloud',
    bullets: [
      'Resolve customer support tickets for Azure and Microsoft 365',
      'Microsoft 365 Admin Center work for customer tenants',
      'Support Azure architecture reviews and cost estimates',
    ],
    skills: ['Azure', 'Microsoft 365', 'FinOps'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Axiata Digital Labs',
    location: 'Sri Lanka',
    start: '2026',
    type: 'Internship',
    icon: 'code',
    bullets: ['CI/CD pipelines on Azure with SonarQube quality checks'],
    skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Kubernetes', 'Terraform', 'AWS'],
  },
];
