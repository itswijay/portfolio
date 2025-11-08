import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PageLoader from '@/components/PageLoader'
import { ThemeProvider } from '@/components/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'monospace'],
})

export const metadata = {
  metadataBase: new URL('https://www.itswijay.me'),
  title: 'Pubudu Wijesundara - Portfolio',
  description:
    'Full Stack Developer Portfolio - DevOps enthusiast, full-stack developer, and tech educator specializing in React, Next.js, Django, and cloud technologies.',
  alternates: {
    canonical: 'https://www.itswijay.me/',
  },
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'DevOps',
    'React',
    'Next.js',
    'Portfolio',
    'Pubudu Wijesundara',
  ],
  authors: [{ name: 'Pubudu Wijesundara' }],
  creator: 'Pubudu Wijesundara',
  publisher: 'Pubudu Wijesundara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Pubudu Wijesundara - Full Stack Developer',
    description: 'Full Stack Developer Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pubudu Wijesundara - Full Stack Developer',
    description: 'Full Stack Developer Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <PageLoader>
            <NavBar />
            {children}
            <Footer />
          </PageLoader>
        </ThemeProvider>
      </body>
    </html>
  )
}
