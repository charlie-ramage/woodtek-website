'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    project: '',
    message: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Project enquiry${form.project ? `: ${form.project}` : ''}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Project: ${form.project}`,
        '',
        form.message,
      ].join('\n'),
    )
    window.location.href = `mailto:jeremy@woodtek.co.nz?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-navy-700 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Get in touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Talk to Jeremy.
            </h2>
            <p className="mt-5 max-w-md text-base text-white/80 sm:text-lg">
              Engineered mass timber is our specialty. Our team is equipped with
              international experience and knowledge — let&apos;s talk about your
              next project.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+64226733290"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 text-navy-700">
                  <Phone className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Phone
                  </span>
                  <span className="mt-1 block font-display text-xl font-bold text-white sm:text-2xl">
                    022 673 3290
                  </span>
                </span>
              </a>

              <a
                href="mailto:jeremy@woodtek.co.nz"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 text-navy-700">
                  <Mail className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Email
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-white sm:text-xl">
                    jeremy@woodtek.co.nz
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 text-navy-700">
                  <MapPin className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Workshop
                  </span>
                  <span className="mt-1 block font-display text-base font-semibold text-white sm:text-lg">
                    39 Whakakake Street, Tauriko, Tauranga 3116
                  </span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[var(--radius-card)] bg-white p-6 text-ink shadow-[var(--shadow-elev)] sm:p-8"
          >
            <h3 className="font-display text-xl font-extrabold text-navy-700 sm:text-2xl">
              Tell us about your project
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              We&apos;ll come back to you within one working day.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
              />
              <Field
                label="Company"
                name="company"
                value={form.company}
                onChange={onChange}
                autoComplete="organization"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="sm:col-span-2"
              />
              <Field
                label="Project name / location"
                name="project"
                value={form.project}
                onChange={onChange}
                className="sm:col-span-2"
              />
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                  className="mt-1.5 w-full resize-none rounded-xl border border-navy-100 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-400/30"
                  placeholder="Tell us about scope, programme, and what mass timber is being installed…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-500 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send enquiry
            </button>
            <p className="mt-3 text-xs text-ink-soft">
              Opens your email client — no data is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={className}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
        {label}
        {props.required && <span className="text-orange-500"> *</span>}
      </span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-navy-100 bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-400/30"
      />
    </label>
  )
}
