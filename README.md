# Woodtek — NZ mass timber installation specialists

Single-page marketing site for Woodtek. Next.js 15 (App Router) + Tailwind v4 + Framer Motion, deployed on Vercel.

## Local dev

```bash
npm install
npm run dev
```

Build verification (what CI / Vercel runs):

```bash
npm run build
```

## Project layout

- `src/app/page.tsx` — single page, composes every section component.
- `src/components/*` — section components (Hero, Stats, Why, Work, …).
- `src/data/instagram.json` — static fallback for the "Recent Work" grid.
- `public/ig/*` — bundled fallback images referenced by the JSON.
- `assets/CONTENT.md` — canonical copy reference.
- `PROJECT.md` — full positioning / strategy brief.

## Live Instagram feed

The "Recent Work" grid (`src/components/Work.tsx`) can render either a
bundled static feed **or** a live feed from [Behold.so](https://behold.so/),
which proxies `@woodteknz` Instagram media for us.

The fetch + adapter lives in `src/lib/getInstagramFeed.ts` and is awaited
by the root server component in `src/app/page.tsx`.

### Default — static fallback

If `NEXT_PUBLIC_BEHOLD_FEED_ID` is **not** set, the helper returns
`src/data/instagram.json` and the grid renders images from `public/ig/`.
Nothing external is fetched. This is the default state until Jeremy
authorises the Instagram → Behold connection.

### Switching to the live feed

1. In the Behold dashboard, copy the Feed ID for the connected
   `@woodteknz` source.
2. In Vercel → Project → Settings → Environment Variables, add:
   - **Name:** `NEXT_PUBLIC_BEHOLD_FEED_ID`
   - **Value:** the Behold feed id
   - **Environments:** Production (and Preview if you want previews to use it)
3. Redeploy (or push any commit).

The helper caches the Behold response for 6 hours on the edge
(`revalidate: 60 * 60 * 6`). Any fetch error, non-2xx response, or empty
`posts` array transparently falls back to the static feed, so the grid
will never render blank.

### Plan notes

- **Free tier:** 6 posts max, daily refresh — enough for a hero row but
  the grid currently displays up to 16 tiles, so most will come from
  fallback until we upgrade.
- **Starter ($10/mo):** 50 posts, hourly refresh — recommended once the
  live feed is the primary source.

### Allowed image hosts

`next.config.ts` whitelists the hosts Behold returns image URLs from:
`feeds.behold.so`, `*.cdninstagram.com`, `scontent.cdninstagram.com`.
Local `/ig/*` images keep working unchanged.

## Deploy

Push to `main`. Vercel project `woodtek-website` (team `blake-8230`) is
linked and auto-deploys. Production URL: <https://woodtek-website.vercel.app/>.
