import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kovendhan - Cloud & DevOps Engineer',
  description: 'Personal portfolio showcasing cloud computing, DevOps, and cybersecurity expertise',
  keywords: ['Cloud Computing', 'DevOps', 'Cyber Security', 'AWS', 'Azure', 'GCP'],
  authors: [{ name: 'Kovendhan' }],
  creator: 'Kovendhan',
  publisher: 'Kovendhan',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

