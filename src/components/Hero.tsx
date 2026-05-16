'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-700 text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ig/ig-13-CrsTNp5u5I8.jpg"
          alt="Woodtek crew installing a CLT subfloor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:min-h-[88vh] lg:px-8 lg:pb-40 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Aotearoa · Mass timber installation
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(6,22,38,0.55)] sm:text-5xl lg:text-7xl">
            New Zealand&apos;s mass timber installation{' '}
            <span className="text-orange-400">specialists.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 drop-shadow-[0_1px_12px_rgba(6,22,38,0.45)] sm:text-lg lg:text-xl">
            Cross-laminated timber, glulam, and hybrid structures — installed
            faster, with less embodied carbon, by Aotearoa&apos;s most experienced
            specialist crew.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3.5 text-sm font-semibold text-navy-700 transition hover:bg-orange-300 hover:shadow-[0_12px_30px_rgba(232,147,34,0.4)] sm:text-base"
            >
              See our work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10 sm:text-base"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Talk to Jeremy
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative metrics row at bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 text-white/90 sm:grid-cols-4 lg:mt-auto"
        >
          {[
            { k: 'Nationwide', v: 'NZ-wide commercial' },
            { k: 'Manufacturer', v: 'Agnostic / neutral' },
            { k: 'QA', v: 'Photo-documented' },
            { k: 'Based', v: 'Tauranga, BoP' },
          ].map((m) => (
            <div key={m.k}>
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-orange-300">
                {m.k}
              </div>
              <div className="mt-1 text-base font-semibold text-white sm:text-lg">
                {m.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
