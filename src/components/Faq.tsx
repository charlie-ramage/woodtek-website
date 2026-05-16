'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'What is Cross Laminated Timber?',
    a: 'Cross Laminated Timber (CLT) is made by stacking and pressing layers of dried wood together. The layers are bonded with adhesives. Each new layer is placed perpendicular to the previous one, which makes the panels much stronger than conventional wood structures.',
  },
  {
    q: 'What distance can CLT span between structural elements?',
    a: 'This depends what thickness of panel you choose to go with and how many bearers the panel will span across. Each factory supplying CLT has documents available for design engineers to calculate spans and cantilever distances.',
  },
  {
    q: 'How does Mass timber achieve code regulations for fire resistance?',
    a: 'When Mass timber is exposed to fire, it chars on the outside forming an insulated layer which protects the interior wood from damage. This allows it to achieve a fire rating higher than code requirements. One or two layers of GIB Fyreline plasterboard can be added to extend the fire resistance rating (FRR) for longer protection of the timber element.',
  },
  {
    q: "What does Woodtek's installation include?",
    a: 'Pre-planning with supplier, sequencing of panels and shop drawing reviews; SSSP and lift plan; experienced team to land the panels safely and efficiently and screw them as per the engineered design; Working at Heights certificates; Elevated platform certificates; NZQA Rigging / Dogman certificates; first aid kit held in every vehicle; fire extinguisher in every vehicle; First Aid certificates; Site Safe passports.',
  },
  {
    q: 'How long will it take to install?',
    a: "Elements go together quickly like Lego — this is dependent on site accessibility, the weather, and the main contractor's programme.",
  },
  {
    q: 'How does it compare environmentally against concrete / steel structures?',
    a: "Using timber lowers a building's environmental impact and carbon footprint, because trees sequester carbon during their lifecycle.",
  },
  {
    q: 'What fixings hold the timber elements together?',
    a: 'Screws installed at specified centres designed by the structural engineer. After installation Woodtek provides QA documents with photos to the main contractor for assurance.',
  },
]

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Common questions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Mass timber, answered.
          </h2>
        </div>
        <ul className="divide-y divide-navy-100 overflow-hidden rounded-[var(--radius-card)] border border-navy-100 bg-white">
          {faqs.map((f, i) => {
            const open = openIdx === i
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-cream-50 sm:px-7 sm:py-6"
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 flex-none text-orange-500 transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 text-sm leading-relaxed text-ink-soft sm:px-7 sm:text-base">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
