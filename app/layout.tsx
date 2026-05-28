import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FeaturePin — In-App Announcements and Nudges for SaaS',
  description: 'Announce feature launches and nudge users who missed them. No engineering required after the first install.',
  metadataBase: new URL('https://featurepin.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-accent="cyan" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
