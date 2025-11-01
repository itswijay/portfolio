'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const HireMe = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect if device is mobile/touch-enabled
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = (e) => {
    if (isMobile && !isExpanded) {
      // First tap on mobile - expand the button
      e.preventDefault()
      setIsExpanded(true)

      // Auto-collapse after 3 seconds if not clicked again
      setTimeout(() => {
        setIsExpanded(false)
      }, 3000)
    }
    // Second tap or desktop - allow normal link behavior
  }

  return (
    <div
      className={`fixed left-2 bottom-5 sm:left-4 sm:bottom-4 flex items-center justify-center z-50 ${
        isExpanded ? 'expanded' : 'group'
      }`}
    >
      <div className="relative">
        {/* Main button container */}
        <Link
          href="mailto:pubuduwijes@gmail.com"
          onClick={handleClick}
          className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary-light rounded-full border-2 border-border/20 hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer hover:shadow-primary/20 ${
            isExpanded
              ? 'w-28 sm:w-32 md:w-36'
              : 'group-hover:w-28 sm:group-hover:w-32 md:group-hover:w-36'
          }`}
        >
          {/* Inner highlight */}
          <div className="absolute inset-1 bg-gradient-to-br from-background/20 to-transparent rounded-full pointer-events-none"></div>

          {/* Icon/Text container */}
          <div className="relative flex items-center justify-center text-primary-foreground pointer-events-none">
            {/* Hire Me Icon (when collapsed) */}
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-opacity duration-300 ${
                isExpanded ? 'opacity-0' : 'group-hover:opacity-0'
              }`}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Hire Me Text (when expanded) */}
            <span
              className={`absolute whitespace-nowrap text-xs sm:text-sm font-semibold transition-all duration-300 delay-100 ${
                isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              Hire Me
            </span>
          </div>
        </Link>

        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/50 scale-110 animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default HireMe
