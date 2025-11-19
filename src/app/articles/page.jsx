import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import BlogCardSkeleton from '@/components/BlogCardSkeleton'
import LatestBlogPosts from '@/components/LatestBlogPosts'
import PopularBlogPosts from '@/components/PopularBlogPosts'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = {
  title: 'Articles | Pubudu Wijesundara - Tech Blog & DevOps Insights',
  description:
    'Explore latest articles and most popular blog posts by Pubudu Wijesundara about Technology, DevOps, Cyber Security, and web development. Stay updated with industry insights and tutorials.',
  keywords: [
    'Tech Articles',
    'DevOps Blog',
    'Cyber Security',
    'Web Development',
    'Technology Blog',
    'Programming Tutorials',
    'Pubudu Wijesundara Blog',
  ],
  openGraph: {
    title: 'Articles | Pubudu Wijesundara - Tech Blog & DevOps Insights',
    description:
      'Words can change the world! Explore latest articles and most popular blog posts about Technology, DevOps, Cyber Security, and web development.',
    type: 'website',
    url: 'https://www.itswijay.me/articles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Pubudu Wijesundara - Tech Blog & DevOps Insights',
    description:
      'Explore latest articles and blog posts about Technology, DevOps, Cyber Security, and web development.',
  },
}

const articles = () => {
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

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </div>
            }
          >
            <LatestBlogPosts />
          </Suspense>
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

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </div>
            }
          >
            <PopularBlogPosts />
          </Suspense>
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
