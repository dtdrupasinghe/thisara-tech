import { YOUTUBE_CHANNEL_ID } from './consts';
import snapshot from './data/youtube.json';

export interface Video {
  id: string;
  title: string;
  published: string;
  views: number;
}

const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

function decode(s: string) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function parse(xml: string): Video[] {
  return xml
    .split('<entry>')
    .slice(1)
    .map((e) => ({
      id: e.match(/<yt:videoId>([^<]+)/)?.[1] ?? '',
      title: decode(e.match(/<media:title>([^<]*)/)?.[1] ?? ''),
      published: e.match(/<published>([^<]+)/)?.[1] ?? '',
      views: Number(e.match(/<media:statistics views="(\d+)"/)?.[1] ?? 0),
    }))
    .filter((v) => v.id);
}

/**
 * Latest uploads, newest first. Read from the channel's RSS feed at build time.
 * The feed sometimes returns 404/500, so it retries and falls back to src/data/youtube.json.
 */
export async function getLatestVideos(limit = 10): Promise<Video[]> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(FEED, { headers: { 'user-agent': 'Mozilla/5.0 (thisara.tech build)' } });
      if (res.ok) {
        const videos = parse(await res.text());
        if (videos.length) return videos.slice(0, limit);
      }
    } catch {
      // network error: try again
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
  console.warn('[youtube] feed unavailable, using src/data/youtube.json');
  return (snapshot as Video[]).slice(0, limit);
}

export function formatViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K views`;
  return `${n} ${n === 1 ? 'view' : 'views'}`;
}
