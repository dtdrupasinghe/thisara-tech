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

// Access key for the /contact/ form (free key from web3forms.com, sent to the email you sign up with).
// It's safe to publish; it only lets people send messages to you. Leave empty and the form shows a notice instead.
export const WEB3FORMS_KEY = '54b4f6a2-afa1-4009-9838-7cc93914aef7';

// YouTube channel whose latest uploads show on the home page (from youtube.com/channel/<id>).
export const YOUTUBE_CHANNEL_ID = 'UCIHC7vgPYJNEFiEngDKsrsA';

// Shown in the footer and the home page contact section.
export const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://www.youtube.com/@thisararupsinghe' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thisararupasinghe' },
];
