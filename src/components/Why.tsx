'use client'

import { motion } from 'framer-motion'
import { Compass, Globe2, FileCheck2 } from 'lucide-react'

const pillars = [
  {
    icon: Compass,
    title: 'Independent specialist',
    body: 'We&rsquo;re not tied to a single CLT manufacturer. We work with the supplier that best fits your project — Red Stag TimberLab, XLam, or others.',
  },
  {
    icon: Globe2,
    title: 'International experience',
    body: 'Our crew brings overseas mass timber know-how to Aotearoa — applied to the way NZ sites, codes and supply chains actually work.',
  },
  {
    icon: FileCheck2,
    title: 'Full QA documentation',
    body: 'Every install ships with photo-evidenced sign-off — fixings, panel placement, sequence — for your main contractor and engineer.',
  },
]

export default function Why() {
  return (
    <section className="bg-navy-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Why Woodtek
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The specialist installer main contractors call first.
            </h2>
          </div>
          <p className="text-base text-white/80 sm:text-lg">
            We don&apos;t build the whole structure — we&apos;re the crew you
            trust to land the mass timber package safely, fast, and to spec.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-orange-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 text-navy-700">
                <p.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
              <p
                className="mt-3 text-sm leading-relaxed text-white/75"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
