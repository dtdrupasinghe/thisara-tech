// Follower counts in the small stats section on the home page. Use a rounded number with a plus, e.g. '4,800+'.
// Values like '[TIKTOK FOLLOWERS]' are placeholders and stay hidden. The section shows once at least two are filled in.

export interface Stat {
  value: string;
  label: string;
  /** Logo and profile link, matching an `icon` in SOCIAL_LINKS. */
  icon: 'linkedin' | 'youtube' | 'tiktok' | 'facebook';
}

export const stats: Stat[] = [
  { value: '5,300+', label: 'LinkedIn followers', icon: 'linkedin' },
  { value: '4,800+', label: 'YouTube subscribers', icon: 'youtube' },
  { value: '1,400+', label: 'TikTok followers', icon: 'tiktok' },
  { value: '1,400+', label: 'Facebook followers', icon: 'facebook' },
];
