/**
 * Blog utility functions to fetch blog posts from the API
 * These functions are designed for server-side use in Next.js 15
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

/**
 * Fetch blog posts from the API
 * @param {string} type - Type of posts to fetch ('latest', 'popular', 'all')
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of blog post objects
 */
async function fetchBlogPosts(type = 'latest', limit = 6) {
  try {
    const url = `${API_BASE_URL}/api/blogs?type=${type}&limit=${limit}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache for 1 hour, revalidate in background
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error(
        `Failed to fetch blog posts: ${response.status} ${response.statusText}`
      )
      return []
    }

    const data = await response.json()

    if (data.success && Array.isArray(data.posts)) {
      return data.posts
    }

    return []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Get latest blog posts
 * @param {number} limit - Number of posts to return (default: 6)
 * @returns {Promise<Array>} Array of latest blog post objects
 */
export async function getLatestBlogs(limit = 6) {
  return fetchBlogPosts('latest', limit)
}

/**
 * Get popular blog posts (sorted by views)
 * @param {number} limit - Number of posts to return (default: 6)
 * @returns {Promise<Array>} Array of popular blog post objects
 */
export async function getPopularBlogs(limit = 6) {
  return fetchBlogPosts('popular', limit)
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatBlogDate(dateString) {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

/**
 * Format date for display (short version)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatBlogDateShort(dateString) {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

/**
 * Get reading time text
 * @param {number} minutes - Reading time in minutes
 * @returns {string} Formatted reading time
 */
export function getReadingTimeText(minutes) {
  if (!minutes || minutes < 1) return '1 min read'
  return `${minutes} min read`
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 150) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Get the blog post URL
 * @param {string} slug - Blog post slug
 * @returns {string} Full blog post URL
 */
export function getBlogPostUrl(slug) {
  return `https://blog.itswijay.me/blog/${slug}`
}

/**
 * Format view count for display
 * @param {number} views - Number of views
 * @returns {string} Formatted view count
 */
export function formatViewCount(views) {
  if (!views || views === 0) return '0 views'
  if (views === 1) return '1 view'
  if (views < 1000) return `${views} views`
  if (views < 1000000) return `${(views / 1000).toFixed(1)}K views`
  return `${(views / 1000000).toFixed(1)}M views`
}
