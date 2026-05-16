'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Factory, Truck, HardHat } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: ClipboardCheck,
    title: 'Procurement',
    body: 'Constructability review, panel selection, supplier coordination and shop-drawing review with the design team.',
  },
  {
    n: '02',
    icon: Factory,
    title: 'Manufacture',
    body: 'Working alongside Red Stag TimberLab, XLam and others — laminating, CNC machining, QA and sequence packing for site.',
  },
  {
    n: '03',
    icon: Truck,
    title: 'Delivery',
    body: 'Cartage planning, crane scheduling and lift plans — so the right panel is at the right place, in the right order.',
  },
  {
    n: '04',
    icon: HardHat,
    title: 'Installation',
    body: 'Specialist crew lands, fixes and screws each element per the engineered design. A full photo-documented QA pack is delivered to the main contractor.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Four phases. One specialist crew.
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            From the first constructability review through to handover of the
            QA pack, Woodtek owns the mass-timber package.
          </p>
        </div>

        <div className="relative">
          {/* connecting line, hidden on mobile */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent lg:block"
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-2xl bg-navy-700 text-orange-400 shadow-[var(--shadow-card)]">
                  <s.icon className="h-9 w-9" strokeWidth={1.6} />
                  <span className="absolute -right-2 -top-2 inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-orange-400 px-1.5 font-display text-xs font-bold text-navy-700">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-center text-lg font-bold text-ink lg:text-left">
                  {s.title}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-ink-soft lg:text-left">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
