import staticFeed from '@/data/instagram.json'

export type IGPost = {
  shortcode: string
  post_url: string
  /** Image URL — local /ig/ path for fallback data, or remote CDN URL for live Behold data. */
  local: string
  caption: string
  size?: number
}

/**
 * Fetches the Instagram feed for the site.
 *
 * Behaviour:
 *  - If NEXT_PUBLIC_BEHOLD_FEED_ID is unset, returns the bundled static feed
 *    (src/data/instagram.json + images in public/ig/). This is the default
 *    state until Jeremy completes the Behold ↔ @woodteknz auth handshake.
 *  - If the env var is set, fetches the live feed from Behold (revalidated
 *    every 6h via the Next.js fetch cache). Any error or empty response
 *    falls back to the static feed so the grid never breaks.
 *
 * To switch to the live feed: set NEXT_PUBLIC_BEHOLD_FEED_ID in Vercel
 * (value from the Behold dashboard after @woodteknz is connected).
 */
export async function getInstagramFeed(): Promise<IGPost[]> {
  const feedId = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID
  if (!feedId) return staticFeed as IGPost[]

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      // Behold's free tier updates once a day; cache for 6h on the edge.
      next: { revalidate: 60 * 60 * 6 },
    })
    if (!res.ok) throw new Error(`Behold feed responded ${res.status}`)
    const data = await res.json()

    // Behold returns { posts: [{ id, permalink, mediaUrl, prunedCaption, ... }] }
    // Adapt to our IGPost shape.
    const posts = Array.isArray(data?.posts) ? data.posts : []
    if (posts.length === 0) return staticFeed as IGPost[]

    return posts.map((p: any): IGPost => ({
      shortcode:
        p.id ??
        p.permalink?.split('/p/')[1]?.replace(/\/$/, '') ??
        '',
      post_url: p.permalink ?? 'https://www.instagram.com/woodteknz/',
      local:
        p.sizes?.medium?.mediaUrl ??
        p.mediaUrl ??
        p.thumbnailUrl ??
        '',
      caption: p.prunedCaption ?? p.caption ?? '',
    }))
  } catch (err) {
    console.warn('[behold] feed fetch failed, falling back to static data', err)
    return staticFeed as IGPost[]
  }
}
