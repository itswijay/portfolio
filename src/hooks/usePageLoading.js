'use client'
import { useState, useEffect } from 'react'

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(0)
  const [totalImages, setTotalImages] = useState(0)

  useEffect(() => {
    // Get all images in the document
    const images = document.querySelectorAll('img')
    const imageArray = Array.from(images)

    setTotalImages(imageArray.length)

    if (imageArray.length === 0) {
      // No images to load, set loading to false after a minimum time
      const timer = setTimeout(() => setIsLoading(false), 1000)
      return () => clearTimeout(timer)
    }

    let loadedCount = 0

    const handleImageLoad = () => {
      loadedCount += 1
      setLoadedImages(loadedCount)

      if (loadedCount === imageArray.length) {
        // All images loaded, wait a bit more for other resources
        setTimeout(() => setIsLoading(false), 500)
      }
    }

    const handleImageError = () => {
      loadedCount += 1
      setLoadedImages(loadedCount)

      if (loadedCount === imageArray.length) {
        setTimeout(() => setIsLoading(false), 500)
      }
    }

    // Add event listeners to existing images
    imageArray.forEach((img) => {
      if (img.complete) {
        handleImageLoad()
      } else {
        img.addEventListener('load', handleImageLoad)
        img.addEventListener('error', handleImageError)
      }
    })

    // Clean up event listeners
    return () => {
      imageArray.forEach((img) => {
        img.removeEventListener('load', handleImageLoad)
        img.removeEventListener('error', handleImageError)
      })
    }
  }, [])

  return { isLoading, loadedImages, totalImages }
}
