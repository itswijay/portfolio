'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loading from './Loading'

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    // Set minimum loading time
    const minLoadTime = setTimeout(() => {
      setContentLoaded(true)
    }, 1500)

    // Check for images
    const checkImages = () => {
      const images = document.querySelectorAll('img')
      const imageArray = Array.from(images)

      if (imageArray.length === 0) {
        setImagesLoaded(true)
        return
      }

      let loadedCount = 0
      const totalImages = imageArray.length

      const handleLoad = () => {
        loadedCount += 1
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }

      imageArray.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          handleLoad()
        } else {
          img.addEventListener('load', handleLoad)
          img.addEventListener('error', handleLoad) // Count errors as loaded
        }
      })

      // Cleanup
      return () => {
        imageArray.forEach((img) => {
          img.removeEventListener('load', handleLoad)
          img.removeEventListener('error', handleLoad)
        })
      }
    }

    // Wait for DOM to be ready then check images
    const timer = setTimeout(() => {
      checkImages()
    }, 100)

    return () => {
      clearTimeout(minLoadTime)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // When both content and images are loaded, hide loading screen
    if (contentLoaded && imagesLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300) // Small delay for smooth transition

      return () => clearTimeout(timer)
    }
  }, [contentLoaded, imagesLoaded])

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
