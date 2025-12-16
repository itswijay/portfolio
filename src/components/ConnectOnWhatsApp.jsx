'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ConnectOnWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const whatsappNumber = '94710320357'

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
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full border-2 border-[#25D366]/20 hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer hover:shadow-[#25D366]/30 ${
            isExpanded
              ? 'w-36 sm:w-40 md:w-44'
              : 'group-hover:w-36 sm:group-hover:w-40 md:group-hover:w-44'
          }`}
        >
          {/* Inner highlight */}
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none"></div>

          {/* Icon/Text container */}
          <div className="relative flex items-center justify-center text-white pointer-events-none">
            {/* WhatsApp Icon (when collapsed) */}
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-opacity duration-300 ${
                isExpanded ? 'opacity-0' : 'group-hover:opacity-0'
              }`}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            {/* Connect Text (when expanded) */}
            <span
              className={`absolute whitespace-nowrap text-xs sm:text-sm font-semibold transition-all duration-300 delay-100 px-3 ${
                isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              Connect on WhatsApp
            </span>
          </div>
        </Link>

        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366]/50 scale-110 animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default ConnectOnWhatsApp
