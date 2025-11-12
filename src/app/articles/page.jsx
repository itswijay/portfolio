import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import BlogCard from '@/components/BlogCard'
import { getLatestBlogs, getPopularBlogs } from '@/lib/blogs'
import Link from 'next/link'

export const metadata = {
  title: 'Articles | Pubudu Wijesundara',
  description:
    'Explore my latest articles and most popular blog posts about Technology, DevOps, Cyber Security, and web development.',
  openGraph: {
    title: 'Articles | Pubudu Wijesundara',
    description:
      'Explore my latest articles and most popular blog posts about Technology, DevOps, Cyber Security, and web development.',
  },
}

const articles = async () => {
  // Fetch blog posts from the API
  const latestPosts = await getLatestBlogs(6)
  const popularPosts = await getPopularBlogs(6)

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300">
      <Layout className="pt-16">
        <AnimatedText text="Words can change the world!" className="mb-16" />

        {/* Latest Blog Posts Section */}
        <section className="w-full mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Latest Blog Posts
              </h2>
              <p className="text-muted-foreground">
                Recently published articles from my blog
              </p>
            </div>
            <Link
              href="https://blog.itswijay.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
            >
              View all articles
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found. Check back soon!
              </p>
            </div>
          )}
        </section>

        {/* Most Popular Posts Section */}
        <section className="w-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Most Popular Posts
              </h2>
              <p className="text-muted-foreground">
                Top articles based on reader engagement
              </p>
            </div>
          </div>

          {popularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No popular posts available yet.
              </p>
            </div>
          )}
        </section>

        {/* Mobile "View all" link */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="https://blog.itswijay.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            View all articles
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Layout>
    </main>
  )
}

export default articles
