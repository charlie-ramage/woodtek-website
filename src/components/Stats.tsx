'use client'

import { motion } from 'framer-motion'
import { Leaf, Timer, Weight, TreePine } from 'lucide-react'

const stats = [
  {
    icon: Leaf,
    big: 'Up to 75%',
    label: 'Lower embodied carbon',
    body: 'Versus equivalent concrete and steel structures.',
  },
  {
    icon: Timer,
    big: 'Hours',
    label: 'Not days, per floor',
    body: 'Pre-fabricated panels land like Lego on site.',
  },
  {
    icon: Weight,
    big: 'Lighter',
    label: 'Smaller foundations',
    body: 'Reduced load, easier transport, lower cost downstream.',
  },
  {
    icon: TreePine,
    big: 'Stores',
    label: 'Carbon for the building life',
    body: 'Sequestered carbon stays locked up — for decades.',
  },
]

export default function Stats() {
  return (
    <section className="bg-navy-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            Why mass timber
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Faster, lighter, and dramatically lower carbon.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition-colors duration-300 hover:border-orange-400/40 hover:from-white/[0.08]"
            >
              <s.icon className="h-7 w-7 text-orange-400" strokeWidth={1.6} />
              <div className="mt-5 font-display text-3xl font-extrabold leading-none text-white sm:text-4xl">
                {s.big}
              </div>
              <div className="mt-2 text-sm font-semibold text-orange-200">
                {s.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
