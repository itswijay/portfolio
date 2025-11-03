'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loading from './Loading'

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Maximum loading time - CRITICAL: Prevents infinite loading
    const maxLoadTimeout = setTimeout(() => {
      if (mounted) {
        console.log('PageLoader: Max timeout reached, hiding loader')
        setIsLoading(false)
      }
    }, 5000) // 5 seconds max

    // Minimum loading time for smooth UX
    const minLoadTimeout = setTimeout(() => {
      if (!mounted) return

      // Check if critical above-the-fold images are loaded
      const checkCriticalImages = () => {
        // Only check for priority/eager images (above the fold)
        const criticalImages = document.querySelectorAll(
          'img[loading="eager"], img[fetchpriority="high"]'
        )

        // If no critical images found, check document ready state
        if (criticalImages.length === 0) {
          if (document.readyState === 'complete') {
            console.log('PageLoader: No critical images, document complete')
            if (mounted) setIsLoading(false)
          } else {
            // Wait for document to be fully loaded
            const onLoad = () => {
              console.log('PageLoader: Document load complete')
              if (mounted) setIsLoading(false)
            }
            window.addEventListener('load', onLoad, { once: true })
            return () => window.removeEventListener('load', onLoad)
          }
          return
        }

        // Check critical images
        let loadedCount = 0
        const totalCritical = criticalImages.length

        const checkComplete = () => {
          loadedCount++
          if (loadedCount >= totalCritical && mounted) {
            console.log('PageLoader: Critical images loaded')
            setIsLoading(false)
          }
        }

        criticalImages.forEach((img) => {
          if (img.complete && img.naturalHeight !== 0) {
            checkComplete()
          } else {
            img.addEventListener('load', checkComplete, { once: true })
            img.addEventListener('error', checkComplete, { once: true })
          }
        })
      }

      // Wait a bit for DOM to settle, then check images
      setTimeout(checkCriticalImages, 200)
    }, 1000) // Wait minimum 1 second before checking

    return () => {
      mounted = false
      clearTimeout(maxLoadTimeout)
      clearTimeout(minLoadTimeout)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      {/* Always render children but with conditional opacity */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PageLoader
