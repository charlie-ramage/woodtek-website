'use client'

import Image from 'next/image'
import { Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoFeature() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Watch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              See what we do.
            </h2>
            <p className="mt-4 max-w-md text-base text-ink-soft sm:text-lg">
              A short look at how a Woodtek crew lands mass timber on site —
              from shop drawings to the final screw.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-600 underline-offset-4 transition hover:text-orange-500 hover:underline"
            >
              Watch what we do →
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-card)] bg-navy-700 shadow-[var(--shadow-elev)] ring-1 ring-navy-700/10 transition hover:shadow-[0_24px_60px_rgba(11,38,64,0.28)]"
            aria-label="Play Woodtek intro video"
          >
            <Image
              src="/video-poster.jpg"
              alt="Woodtek intro video"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-700/60 transition group-hover:to-navy-700/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400 text-navy-700 shadow-[0_12px_40px_rgba(232,147,34,0.5)] transition group-hover:scale-110 sm:h-24 sm:w-24">
                <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium backdrop-blur">
                Woodtek NZ · Mass Timber
              </span>
              <span className="hidden text-sm text-white/90 sm:block">
                Click to play
              </span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setOpen(false)}
          >
            <button
              aria-label="Close video"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/KSKxgGtZYIg?autoplay=1&rel=0"
                title="Woodtek NZ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
