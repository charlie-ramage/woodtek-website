'use client'

import { CheckCircle2, Flame, ShieldCheck } from 'lucide-react'

const certs = [
  'Working at Heights',
  'Elevated Work Platform (EWP)',
  'NZQA Rigging / Dogman',
  'Site Safe passport',
  'First Aid certified',
  'Photo-documented QA reports',
]

export default function Safety() {
  return (
    <section className="bg-cream-50 bg-grain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Safety & certifications
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Cert boxes ticked — every site, every time.
            </h2>
            <p className="mt-4 max-w-md text-base text-ink-soft sm:text-lg">
              First aid kit and fire extinguisher in every vehicle. Photo-evidenced
              sign-off delivered with every project.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-navy-700 px-4 py-2 text-sm font-medium text-white">
              <Flame className="h-4 w-4 text-orange-400" />
              First aid kit + fire extinguisher in every vehicle
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(11,38,64,0.04)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold text-ink">{c}</span>
                <CheckCircle2 className="ml-auto h-5 w-5 text-navy-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
