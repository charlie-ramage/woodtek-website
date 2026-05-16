'use client'

import Image from 'next/image'
import { Instagram, Youtube, Facebook, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-800 py-14 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Woodtek"
              width={180}
              height={56}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm text-white/65">
              Local and renewable — less embodied carbon emissions. New
              Zealand&apos;s specialist mass timber installation crew.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="tel:+64226733290"
                  className="hover:text-orange-300"
                >
                  022 673 3290
                </a>
              </li>
              <li>
                <a
                  href="mailto:jeremy@woodtek.co.nz"
                  className="hover:text-orange-300"
                >
                  jeremy@woodtek.co.nz
                </a>
              </li>
              <li className="text-white/65">
                39 Whakakake Street
                <br />
                Tauriko, Tauranga 3116
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#work" className="hover:text-orange-300">Work</a></li>
              <li><a href="#process" className="hover:text-orange-300">Process</a></li>
              <li><a href="#about" className="hover:text-orange-300">About</a></li>
              <li><a href="#faq" className="hover:text-orange-300">FAQ</a></li>
              <li><a href="#contact" className="hover:text-orange-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Follow
            </h4>
            <ul className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-3 lg:flex lg:flex-col lg:gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-orange-300"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] transition group-hover:bg-orange-400/15">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Woodtek Mass Timber Construction. Local
            and renewable — less embodied carbon emissions.
          </p>
          <p className="text-white/45">Aotearoa New Zealand</p>
        </div>
      </div>
    </footer>
  )
}

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/woodteknz/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCclBu7Dd3kbpZ7UilFeoxJw', icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/woodteknz', icon: Facebook },
  { label: 'Google', href: 'https://www.google.com/search?q=woodtek+nz', icon: Globe },
]
