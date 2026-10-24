// Follower counts in the small stats section on the home page. Use a rounded number with a plus, e.g. '4.8K+'.
// Values like '[TIKTOK FOLLOWERS]' are placeholders and stay hidden. The section shows once at least two are filled in.

export interface Stat {
  value: string;
  label: string;
  /** Logo and profile link, matching an `icon` in SOCIAL_LINKS. */
  icon: 'linkedin' | 'youtube' | 'tiktok' | 'facebook';
}

export const stats: Stat[] = [
  { value: '5.3K+', label: 'LinkedIn followers', icon: 'linkedin' },
  { value: '4.8K+', label: 'YouTube subscribers', icon: 'youtube' },
  { value: '1.4K+', label: 'TikTok followers', icon: 'tiktok' },
  { value: '1K+', label: 'Facebook followers', icon: 'facebook' },
];
