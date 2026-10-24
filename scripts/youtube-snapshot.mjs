// Refreshes src/data/youtube.json with every long-form video on the channel: id, title, publish date and views.
// Run it now and then:  npm run youtube:snapshot
// It reads YouTube's public web endpoints (no API key). Builds add newer uploads from the RSS feed on top of this list.
import { writeFile } from 'node:fs/promises';

const CHANNEL_ID = 'UCIHC7vgPYJNEFiEngDKsrsA';
const OUT = new URL('../src/data/youtube.json', import.meta.url);
const HEADERS = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'accept-language': 'en-US,en',
};

/** Every value stored under `key`, anywhere in a nested JSON object. */
function find(node, key, out = []) {
  if (Array.isArray(node)) node.forEach((n) => find(n, key, out));
  else if (node && typeof node === 'object') {
    if (key in node) out.push(node[key]);
    Object.values(node).forEach((n) => find(n, key, out));
  }
  return out;
}

const page = await (await fetch(`https://www.youtube.com/channel/${CHANNEL_ID}/videos`, { headers: HEADERS })).text();
const apiKey = page.match(/"INNERTUBE_API_KEY":"([^"]+)"/)?.[1];
const clientVersion = page.match(/"INNERTUBE_CLIENT_VERSION":"([^"]+)"/)?.[1];
const initialData = page.match(/var ytInitialData = (\{.*?\});<\/script>/s)?.[1];
if (!apiKey || !clientVersion || !initialData) throw new Error('Could not read the channel page; YouTube may have changed it.');
const context = { client: { clientName: 'WEB', clientVersion, hl: 'en', gl: 'US' } };

async function api(endpoint, body) {
  const res = await fetch(`https://www.youtube.com/youtubei/v1/${endpoint}?key=${apiKey}&prettyPrint=false`, {
    method: 'POST',
    headers: { ...HEADERS, 'content-type': 'application/json' },
    body: JSON.stringify({ context, ...body }),
  });
  if (!res.ok) throw new Error(`${endpoint} returned ${res.status}`);
  return res.json();
}

// 1. Every video id on the Videos tab (Shorts live on their own tab), following "load more".
const ids = [];
let items = find(JSON.parse(initialData), 'richGridRenderer')[0]?.contents;
while (items) {
  let next;
  for (const item of items) {
    const video = item.richItemRenderer?.content?.lockupViewModel;
    if (video?.contentType === 'LOCKUP_CONTENT_TYPE_VIDEO' && !ids.includes(video.contentId)) ids.push(video.contentId);
    next ??= item.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
  }
  if (!next) break;
  items = find(await api('browse', { continuation: next }), 'appendContinuationItemsAction')[0]?.continuationItems;
}
console.log(`Found ${ids.length} videos, reading details...`);

// 2. Exact publish date, title and views for each one.
const videos = [];
for (const id of ids) {
  const player = await api('player', { videoId: id });
  const title = player.videoDetails?.title;
  const published = player.microformat?.playerMicroformatRenderer?.publishDate;
  if (!title || !published) {
    console.warn(`Skipped ${id}: no title or date`);
    continue;
  }
  videos.push({ id, title, published, views: Number(player.videoDetails?.viewCount ?? 0) });
}

videos.sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
await writeFile(OUT, `${JSON.stringify(videos, null, 2)}\n`);
console.log(`Saved ${videos.length} videos to src/data/youtube.json`);
