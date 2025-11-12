import BlogCard from '@/components/BlogCard'
import { getPopularBlogs } from '@/lib/blogs'

const PopularBlogPosts = async () => {
  const popularPosts = await getPopularBlogs(6)

  if (popularPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <svg
            className="mx-auto h-12 w-12 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <p className="text-muted-foreground text-lg mb-2">
          No popular posts yet
        </p>
        <p className="text-muted-foreground text-sm">
          Popular posts will appear here based on reader engagement
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {popularPosts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  )
}

export default PopularBlogPosts
