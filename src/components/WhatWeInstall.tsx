'use client'

import { motion } from 'framer-motion'
import { Layers, Columns3, Frame, Combine } from 'lucide-react'

const items = [
  {
    icon: Layers,
    title: 'CLT panels',
    body: 'Floors, walls, lift shafts and roofs — landed and screwed to engineer-specified centres.',
  },
  {
    icon: Columns3,
    title: 'Glulam beams & columns',
    body: 'Long-span engineered timber elements for commercial and architectural frames.',
  },
  {
    icon: Frame,
    title: 'LVL framing',
    body: 'High-strength laminated veneer lumber where straight, stiff structural members are needed.',
  },
  {
    icon: Combine,
    title: 'Hybrid structures',
    body: 'Timber + steel and timber + concrete — combined to leverage the strength of each material.',
  },
]

export default function WhatWeInstall() {
  return (
    <section id="about" className="bg-cream-50 bg-grain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              What we install
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Mass timber, end to end.
            </h2>
          </div>
          <p className="text-base text-ink-soft sm:text-lg">
            We&apos;re manufacturer-agnostic — we work with whichever supplier
            best fits the project. Our job is to make sure the panels land on
            site safely, on programme, and to the engineer&apos;s spec.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-navy-700/5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elev)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-orange-400 transition group-hover:bg-orange-400 group-hover:text-navy-700">
                <it.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
