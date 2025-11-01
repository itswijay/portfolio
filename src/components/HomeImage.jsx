'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HomeImage = ({ className = '' }) => {
  // Array of images for the gallery
  const images = [
    { src: '/images/home/1.jpg', alt: 'Pubudu Wijesundara - Profile 1' },
    { src: '/images/home/2.jpg', alt: 'Pubudu Wijesundara - Profile 1' },
    { src: '/images/home/3.jpg', alt: 'Pubudu Wijesundara - Profile 2' },
    { src: '/images/home/4.jpg', alt: 'profile 3' },
    { src: '/images/home/5.jpg', alt: 'profile 3' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now())
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return // Stop if hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, images.length])

  // Resume auto-play after 3 seconds of inactivity
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (!isAutoPlaying && Date.now() - lastInteractionTime > 3000) {
        setIsAutoPlaying(true)
      }
    }, 1000)

    return () => clearInterval(checkInactivity)
  }, [isAutoPlaying, lastInteractionTime])

  // Handle scroll event
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault() // Prevent page scroll
        e.stopPropagation() // Stop event from bubbling up
        setIsAutoPlaying(false)
        setLastInteractionTime(Date.now())
        if (e.deltaY > 0) {
          // Scroll down - next image
          setCurrentIndex((prev) => (prev + 1) % images.length)
        } else {
          // Scroll up - previous image
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      }
    }

    const container = document.getElementById('image-gallery-container')
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [images.length])

  // Calculate position for each card
  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const totalCards = images.length

    // Normalize difference to handle circular array
    let normalizedDiff = diff
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards
    }

    const absDiff = Math.abs(normalizedDiff)

    // Responsive offset values based on screen size
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
    const isTablet =
      typeof window !== 'undefined' &&
      window.innerWidth >= 640 &&
      window.innerWidth < 1024
    const offsetMultiplier = isMobile ? 30 : isTablet ? 40 : 55

    return {
      zIndex: totalCards - absDiff,
      scale: 1 - absDiff * 0.16, // Progressive size reduction for all cards
      y: -absDiff * offsetMultiplier, // Responsive upward movement
      x: -absDiff * offsetMultiplier, // Responsive leftward movement
      opacity: Math.max(0.4, 1 - absDiff * 0.12), // Keep minimum 40% opacity for all cards
      blur: absDiff * 0.6, // Minimal blur to keep all cards clear
      rotateY: normalizedDiff * 1.2, // Subtle rotation
    }
  }

  return (
    <motion.div
      className={`w-full md:w-1/2 flex justify-center items-center relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        id="image-gallery-container"
        className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center perspective-1000"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cards Stack */}
        <div className="relative w-[280px] h-[200px] sm:w-[340px] sm:h-[240px] md:w-[400px] md:h-[280px] lg:w-[450px] lg:h-[300px]">
          {images.map((image, index) => {
            const style = getCardStyle(index)
            const isActive = index === currentIndex

            return (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                style={{ zIndex: style.zIndex }}
                initial={false}
                animate={{
                  scale: style.scale,
                  y: style.y,
                  x: style.x,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                onClick={
                  isActive
                    ? undefined
                    : () => {
                        setIsAutoPlaying(false)
                        setLastInteractionTime(Date.now())
                        setCurrentIndex(index)
                      }
                }
                whileHover={isActive ? { scale: style.scale * 1.02 } : {}}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800"
                  style={{
                    filter: `blur(${style.blur}px)`,
                    transition: 'filter 0.5s ease',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-50">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setLastInteractionTime(Date.now())
                setCurrentIndex(index)
              }}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-6 sm:w-8'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          className="hidden sm:flex absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomeImage
