import { filled } from './placeholders';

// Site-wide settings. Edit these to change the name, tagline and links everywhere.
export const SITE_TITLE = 'Thisara';
export const SITE_TAGLINE = 'Cloud, Azure & FinOps - notes from Sri Lanka';
export const SITE_DESCRIPTION =
  'Practical write-ups on Azure, cloud cost (FinOps), DevOps and free tools for students and engineers in Sri Lanka.';
export const AUTHOR = 'Thisara Rupasinghe';
// Browser tab title (and og:title) of the home page. Other pages use "<Page title> | AUTHOR".
export const HOME_TITLE = 'Thisara Rupasinghe | Cloud, Azure & Tech Updates';

// Social previews (Open Graph). Pages without their own image, like posts without a cover, use OG_IMAGE.
export const OG_SITE_NAME = 'thisara.tech';
export const OG_IMAGE = '/images/og-default.jpg';
export const OG_IMAGE_ALT = 'Thisara Rupasinghe: Azure, FinOps and free tools';

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

// Social profiles: icons in the footer and on the About page, buttons on the home and contact pages.
// `icon` picks the logo in components/SocialIcons.astro. Links still holding a [placeholder] are left out.
const ALL_SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thisararupasinghe', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/@thisararupsinghe', icon: 'youtube' },
  { label: 'GitHub', href: 'https://github.com/[GITHUB USERNAME]', icon: 'github' },
  { label: 'Medium', href: '[MEDIUM URL]', icon: 'medium' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@thisararupasinghe', icon: 'tiktok' },
  { label: 'Facebook', href: 'https://www.facebook.com/thisara.devops', icon: 'facebook' },
];
export const SOCIAL_LINKS = ALL_SOCIAL_LINKS.filter((link) => filled(link.href));

// Newsletter on beehiiv. Until subscribeUrl or formId is filled in, it stays off: no signup cards, no footer line,
// no "Newsletter" nav link and no /newsletter/ page. With formId set, the beehiiv form shows instead of the button.
export const NEWSLETTER = {
  name: "Thisara's Tech Updates",
  subscribeUrl: '', // beehiiv subscribe page URL, e.g. https://xxxx.beehiiv.com/subscribe
  formId: '7fb7dc4a-d89a-431f-868e-0eb7a4729d43', // data-beehiiv-form value from beehiiv's embed code (optional)
};
export const NEWSLETTER_ON = Boolean(filled(NEWSLETTER.subscribeUrl) || filled(NEWSLETTER.formId));
