// Talks and workshops on the About page, newest first.
// Values like '[TALK TOPIC]' are placeholders: they never show on the site, so fill them in when you know them.

export interface Talk {
  title: string;
  /** Type pill, e.g. 'Workshop'. */
  type: string;
  description?: string;
  /** Organiser, place and date, shown in small mono text. */
  meta?: string;
  /** Badge in public/images. If the file isn't there yet, a "Badge coming soon" box shows instead. */
  badge?: string;
  badgeAlt: string;
}

export const talks: Talk[] = [
  {
    title: 'AzureX 2026',
    type: 'Workshop',
    description:
      'Hands-on Azure workshop with a live site deployed on Azure Static Web Apps and GitHub Actions. Received a Token of Appreciation.',
    meta: 'CompuVate · NSBM Green University · 2026',
    badge: '/images/azurex-2026-badge.png',
    badgeAlt: 'AzureX 2026 workshop badge',
  },
  {
    title: 'Early Achievers Meetup',
    type: 'Meetup talk',
    description: '[TALK TOPIC AND ONE LINE ABOUT IT]',
    meta: 'CertDirectory · February 2026',
    badge: '/images/certdirectory-meetup-speaker-2026.png',
    badgeAlt: 'CertDirectory Meetup Speaker badge, February 2026',
  },
];
