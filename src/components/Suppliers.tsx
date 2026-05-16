'use client'

import Image from 'next/image'

/**
 * Logo wall for supplier/partner logos.
 *
 * Visual treatment: all logos are rendered in a muted state (grayscale +
 * reduced opacity) so the three brands — Red Stag (red + black), Spax
 * (green), XLam (navy) — read as a coherent set on the cream background.
 * On hover they lift back to full colour/opacity. This is the standard
 * "logo wall" pattern used by Vercel, Linear, etc.
 */
const logos = [
  {
    src: '/redstag-timberlab.png',
    alt: 'Red Stag TimberLab — NZ CLT manufacturer',
    width: 648,
    height: 316,
    // Tallest of the three; the stag illustration sits above the wordmark
    // so it needs the most vertical real estate.
    sizeClass: 'h-12',
    align: 'lg:justify-start',
  },
  {
    src: '/spax.svg',
    alt: 'Spax Pacific — fasteners',
    width: 342,
    height: 110,
    sizeClass: 'h-9',
    align: 'justify-center',
  },
  {
    src: '/xlam.svg',
    alt: 'XLam — CLT manufacturer',
    width: 134,
    height: 23,
    // Pure wordmark, very wide — keep small so it doesn't dominate.
    sizeClass: 'h-6',
    align: 'lg:justify-end',
  },
]

export default function Suppliers() {
  return (
    <section className="border-y border-navy-100/60 bg-cream-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Suppliers &amp; partners
            </span>
            <p className="mt-3 max-w-md text-base font-medium text-ink sm:text-lg">
              We work with all major NZ engineered timber manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:gap-x-12">
            {logos.map((l) => (
              <div
                key={l.src}
                className={`flex h-14 items-center justify-center ${l.align}`}
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.width}
                  height={l.height}
                  className={`${l.sizeClass} w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
