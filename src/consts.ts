// Site-wide settings. Edit these to change the name, tagline and links everywhere.
export const SITE_TITLE = 'Thisara';
export const SITE_TAGLINE = 'Cloud, Azure & FinOps - notes from Sri Lanka';
export const SITE_DESCRIPTION =
  'Practical write-ups on Azure, cloud cost (FinOps), DevOps and free tools for students and engineers in Sri Lanka.';
export const AUTHOR = 'Thisara Rupasinghe';

// Default image for the home hero and for posts without their own cover.
export const DEFAULT_COVER = '/images/hero-network.jpg';

// Categories shown on the home page. Each one is a tag: /tags/<tag>/
export const CATEGORIES = [
  { tag: 'tech-updates', label: 'Tech Updates', desc: 'News and changes worth knowing about.' },
  { tag: 'azure', label: 'Azure', desc: 'Hands-on guides for Microsoft Azure.' },
  { tag: 'finops', label: 'FinOps', desc: 'Keeping cloud bills under control.' },
  { tag: 'free-tools', label: 'Free Tools', desc: 'Free tools and perks for students and devs.' },
];

// Roles typed one after another under the name on the home page.
export const ROLES = ['Cloud Support Engineer', 'Content Creator', 'FinOps Practitioner', 'Tech Speaker'];

// Shown as an "Email me" button in the home page contact section. Leave empty to hide it.
export const CONTACT_EMAIL = '';

// Replace the placeholder usernames with your real profiles (or delete a line to hide it).
export const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://www.youtube.com/@your-channel' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
  { label: 'GitHub', href: 'https://github.com/your-username' },
];
