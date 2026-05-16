'use client'

import Image from 'next/image'
import { ExternalLink, Instagram } from 'lucide-react'
import posts from '@/data/instagram.json'

type Post = {
  shortcode: string
  post_url: string
  local: string
  caption: string
  size: number
}

export default function Work() {
  const items = (posts as Post[]).slice(0, 16)

  return (
    <section id="work" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Recent work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              From the site.
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-soft sm:text-lg">
              Follow{' '}
              <a
                href="https://www.instagram.com/woodteknz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy-600 underline-offset-4 hover:text-orange-500 hover:underline"
              >
                @woodteknz
              </a>{' '}
              for live updates from the crew.
            </p>
          </div>
          <a
            href="https://www.instagram.com/woodteknz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 transition hover:border-orange-400 hover:text-orange-500"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {items.map((p) => {
            const cap = p.caption.trim()
            const excerpt = cap.length > 110 ? `${cap.slice(0, 110)}…` : cap
            return (
              <li key={p.shortcode} className="group relative">
                <a
                  href={p.post_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Instagram post: ${excerpt}`}
                  className="relative block aspect-square overflow-hidden rounded-xl bg-navy-100"
                >
                  <Image
                    src={p.local}
                    alt={excerpt || 'Woodtek project photo'}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700/85 via-navy-700/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition duration-300 group-hover:opacity-100 sm:p-4">
                    <div className="flex justify-end">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                        <Instagram className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="line-clamp-3 text-xs font-medium leading-snug text-white sm:text-sm">
                      {excerpt}
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
