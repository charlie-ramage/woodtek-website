'use client'

import { Quote } from 'lucide-react'

export default function Testimonial() {
  return (
    <section className="bg-navy-700 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-navy-500/30 to-navy-700 p-8 sm:p-12 lg:p-16">
          <Quote
            className="absolute -right-4 -top-6 h-40 w-40 text-orange-400/15"
            strokeWidth={1}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            From the crew
          </span>
          <blockquote className="relative mt-6 font-display text-2xl font-semibold leading-[1.25] text-white sm:text-3xl lg:text-4xl">
            &ldquo;The CLT midfloor made ease of our services install by only
            using tek screws and no predrilling or concrete dust. We completed
            the install in less time than we estimated.&rdquo;
          </blockquote>
          <footer className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 font-display text-lg font-extrabold text-navy-700">
              C
            </div>
            <div>
              <div className="font-semibold text-white">Craig</div>
              <div className="text-sm text-white/70">Services Technician</div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
