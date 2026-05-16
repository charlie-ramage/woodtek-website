'use client'

import Image from 'next/image'

export default function Suppliers() {
  return (
    <section className="border-y border-navy-100/60 bg-cream-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Suppliers & partners
            </span>
            <p className="mt-3 max-w-md text-base font-medium text-ink sm:text-lg">
              We work with all major NZ engineered timber manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:gap-x-12">
            <div className="flex h-12 items-center justify-center lg:justify-start">
              <span className="font-display text-xl font-extrabold tracking-tight text-navy-700">
                Red Stag <span className="text-orange-500">TimberLab</span>
              </span>
            </div>
            <div className="flex h-12 items-center justify-center">
              <Image
                src="/spax.svg"
                alt="Spax — fasteners"
                width={120}
                height={48}
                className="h-9 w-auto opacity-90"
              />
            </div>
            <div className="flex h-12 items-center justify-center lg:justify-end">
              <span className="font-display text-xl font-extrabold tracking-[0.04em] text-navy-700">
                XLam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
