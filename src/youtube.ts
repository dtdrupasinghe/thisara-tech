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

/** Long-form videos from the RSS feed. Shorts link to /shorts/ there, so they're left out. */
function parse(xml: string): Video[] {
  return xml
    .split('<entry>')
    .slice(1)
    .filter((e) => !e.match(/<link rel="alternate" href="([^"]+)"/)?.[1]?.includes('/shorts/'))
    .map((e) => ({
      id: e.match(/<yt:videoId>([^<]+)/)?.[1] ?? '',
      title: decode(e.match(/<media:title>([^<]*)/)?.[1] ?? ''),
      published: e.match(/<published>([^<]+)/)?.[1] ?? '',
      views: Number(e.match(/<media:statistics views="(\d+)"/)?.[1] ?? 0),
    }))
    .filter((v) => v.id);
}

/** The channel's 15 latest uploads. The feed sometimes returns 404/500, so it retries. */
async function fetchFeed(): Promise<Video[] | undefined> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(FEED, { headers: { 'user-agent': 'Mozilla/5.0 (thisara.tech build)' } });
      if (res.ok) return parse(await res.text());
    } catch {
      // network error: try again
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
}

async function loadVideos(): Promise<Video[]> {
  const feed = await fetchFeed();
  if (!feed) console.warn('[youtube] feed unavailable, using src/data/youtube.json only');
  const byId = new Map((snapshot as Video[]).map((v) => [v.id, v]));
  for (const v of feed ?? []) byId.set(v.id, v); // newer uploads and fresher titles/views
  return [...byId.values()]
    .map((v) => ({ ...v, title: v.title.replace(/\s*[\u2013\u2014]\s*/g, ' - ') })) // site text uses plain hyphens
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
}

let videos: Promise<Video[]> | undefined;

/**
 * Every long-form video, newest first: src/data/youtube.json (refresh with `npm run youtube:snapshot`)
 * plus anything newer from the RSS feed at build time.
 */
export function getVideos(): Promise<Video[]> {
  return (videos ??= loadVideos());
}

export async function getLatestVideos(limit = 10): Promise<Video[]> {
  return (await getVideos()).slice(0, limit);
}

export function formatViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K views`;
  return `${n} ${n === 1 ? 'view' : 'views'}`;
}
