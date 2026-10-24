// Follower counts in the small stats section on the home page. Use a rounded number with a plus, e.g. '4800+'.
// Values like '[TIKTOK FOLLOWERS]' are placeholders and stay hidden. The section shows once at least two are filled in.

export interface Stat {
  value: string;
  label: string;
  /** Logo and profile link, matching an `icon` in SOCIAL_LINKS. */
  icon: 'linkedin' | 'youtube' | 'tiktok';
}

export const stats: Stat[] = [
  { value: '[LINKEDIN FOLLOWERS]', label: 'LinkedIn followers', icon: 'linkedin' },
  { value: '4800+', label: 'YouTube subscribers', icon: 'youtube' },
  { value: '[TIKTOK FOLLOWERS]', label: 'TikTok followers', icon: 'tiktok' },
];
