'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-destructive mb-4">
              Oops!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Something went wrong
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              We encountered an unexpected error. Don&apos;t worry, our team has
              been notified and we&apos;re working on it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-background bg-foreground rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground bg-muted rounded-lg transition-all duration-300 hover:bg-muted/70 hover:scale-105"
              >
                Go Home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
