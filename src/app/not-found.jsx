'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl md:text-[12rem] font-bold bg-gradient-to-br from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold text-foreground mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-md mx-auto"
        >
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Let&apos;s get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-background bg-foreground rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Home
            </span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground bg-muted rounded-lg transition-all duration-300 hover:bg-muted/70 hover:scale-105"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-4">
            You might be interested in:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
            >
              About Me
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/articles"
              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
            >
              Blog Articles
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="mailto:pubuduwijes@gmail.com"
              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
        </div>
      </motion.div>
    </main>
  )
}
