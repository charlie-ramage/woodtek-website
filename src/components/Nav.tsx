'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700/95 backdrop-blur supports-[backdrop-filter]:bg-navy-700/85 shadow-[0_2px_24px_rgba(11,38,64,0.18)]'
          : 'nav-top-fade'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#top" aria-label="Woodtek home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Woodtek — Mass Timber Construction"
            width={160}
            height={48}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+64226733290"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-orange-300 hover:shadow-[0_8px_24px_rgba(232,147,34,0.35)]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            022 673 3290
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-700 transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+64226733290"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-base font-semibold text-navy-700"
          >
            <Phone className="h-4 w-4" />
            022 673 3290
          </a>
        </div>
      </div>
    </header>
  )
}
