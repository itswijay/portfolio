import { NextResponse } from 'next/server'

// Blog API base URL
const BLOG_API_URL = 'https://blog.itswijay.me/api/posts'

/**
 * Fetch posts from the blog API
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of post objects
 */
async function fetchBlogPosts(endpoint, limit = 6) {
  try {
    const url = `${BLOG_API_URL}${endpoint}?limit=${limit}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Revalidate every hour
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from blog API: ${response.status}`)
    }

    const data = await response.json()

    if (data.success && data.posts) {
      console.log(`Fetched ${data.posts.length} posts from ${endpoint}`)
      console.log(
        'First post:',
        data.posts[0]?.title,
        'Views:',
        data.posts[0]?.views
      )

      // Transform the posts to include the full blog URL
      return data.posts.map((post) => ({
        ...post,
        url: `https://blog.itswijay.me${post.url}`,
      }))
    }

    return []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * API Route Handler
 * GET /api/blogs?type=latest|popular&limit=6
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'latest'
    const limit = parseInt(searchParams.get('limit') || '6', 10)

    let posts = []

    if (type === 'latest') {
      posts = await fetchBlogPosts('/latest', limit)
    } else if (type === 'popular') {
      console.log('Fetching popular posts...')
      posts = await fetchBlogPosts('/popular', limit)
      console.log(`Received ${posts.length} popular posts`)
      if (posts.length > 0) {
        console.log(
          'Popular posts order:',
          posts.slice(0, 3).map((p) => ({ title: p.title, views: p.views }))
        )
      }
    } else if (type === 'all') {
      posts = await fetchBlogPosts('', limit)
    } else {
      return NextResponse.json(
        { error: 'Invalid type parameter. Use: latest, popular, or all' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        count: posts.length,
        posts,
      },
      {
        status: 200,
        headers: {
          'Cache-Control':
            'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        message: error.message,
      },
      { status: 500 }
    )
  }
}
