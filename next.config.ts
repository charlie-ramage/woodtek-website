import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Behold.so live feed payload (some image URLs come back as direct CDN
      // links to feeds.behold.so).
      { protocol: 'https', hostname: 'feeds.behold.so' },
      // Instagram CDN — Behold returns media hosted on these hosts.
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
    ],
  },
}

export default nextConfig
