import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://woodtek-website.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Woodtek — Mass Timber Construction NZ',
  description:
    "New Zealand's specialist mass timber installation crew. CLT, glulam, and hybrid structures installed nationwide.",
  applicationName: 'Woodtek',
  authors: [{ name: 'Woodtek Mass Timber Construction' }],
  keywords: [
    'mass timber',
    'CLT',
    'cross laminated timber',
    'glulam',
    'New Zealand',
    'NZ',
    'timber construction',
    'installer',
    'Tauranga',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Woodtek — Mass Timber Construction NZ',
    description:
      "New Zealand's specialist mass timber installation crew. CLT, glulam, and hybrid structures installed nationwide.",
    url: siteUrl,
    siteName: 'Woodtek',
    locale: 'en_NZ',
    type: 'website',
    images: [
      {
        url: '/youtube-thumb.jpg',
        width: 1280,
        height: 720,
        alt: 'Woodtek installing CLT panels on site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woodtek — Mass Timber Construction NZ',
    description:
      "New Zealand's specialist mass timber installation crew. CLT, glulam, and hybrid structures installed nationwide.",
    images: ['/youtube-thumb.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
