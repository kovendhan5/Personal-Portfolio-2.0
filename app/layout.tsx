import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import ErrorBoundaryComponent from '@/components/error-boundary'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kovendhan - Cloud & DevOps Engineer',
  description: 'Personal portfolio of Kovendhan, showcasing expertise in Cloud Computing, DevOps, and Cyber Security',
  keywords: ['Cloud Computing', 'DevOps', 'Cyber Security', 'AWS', 'Azure', 'GCP', 'Kovendhan'],
  authors: [{ name: 'Kovendhan' }],
  creator: 'Kovendhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kovendhan-portfolio.vercel.app',
    siteName: 'Kovendhan Portfolio',
    title: 'Kovendhan - Cloud & DevOps Engineer',
    description: 'Personal portfolio of Kovendhan, showcasing expertise in Cloud Computing, DevOps, and Cyber Security',
    images: [
      {
        url: 'https://kovendhan-portfolio.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kovendhan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovendhan - Cloud & DevOps Engineer',
    description: 'Personal portfolio of Kovendhan, showcasing expertise in Cloud Computing, DevOps, and Cyber Security',
    images: ['https://kovendhan-portfolio.vercel.app/og-image.jpg'],
    creator: '@kovendhan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ErrorBoundary errorComponent={ErrorBoundaryComponent}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

