import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { filled } from './placeholders';

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function readingTime(body: string | undefined) {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

/** Published posts, newest first. Drafts show only while running `npm run dev`. */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** The path (e.g. '/images/logo.png') when that file exists in public/, otherwise undefined. Checked at build time. */
export function publicImage(path?: string): string | undefined {
  const p = filled(path);
  return p && existsSync(join(process.cwd(), 'public', p)) ? p : undefined;
}
