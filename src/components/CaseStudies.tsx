'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const studies = [
  {
    title: 'Waipawa Substation',
    body: 'A landmark commercial CLT install delivered with Red Stag TimberLab — published case study.',
    href: 'https://redstagtimberlab.co.nz/waipawa-substation-case-study/',
    tag: 'Case study',
  },
  {
    title: 'Korora Road Project',
    body: 'CLT in a multi-residential development — programme savings and exposed-timber finishes.',
    href: 'https://redstagtimberlab.co.nz/korora-road-project-case-study/',
    tag: 'Case study',
  },
  {
    title: 'midrisewood.co.nz',
    body: 'NZ educational resource on mid-rise mass timber design, fire, acoustics and procurement.',
    href: 'https://midrisewood.co.nz',
    tag: 'Resource',
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Selected projects & reading
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Published case studies.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {studies.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-[var(--radius-card)] border border-navy-100 bg-cream-50 p-7 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:bg-white hover:shadow-[var(--shadow-elev)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-navy-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200">
                  {s.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-navy-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
              <span className="mt-6 text-sm font-semibold text-navy-600 transition group-hover:text-orange-500">
                Read more →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
