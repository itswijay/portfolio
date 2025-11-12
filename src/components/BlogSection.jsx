import React, { Suspense } from 'react'
import BlogCardSkeleton from './BlogCardSkeleton'

const BlogSection = ({ children, title, description, count = 6 }) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        {children}
      </Suspense>
    </section>
  )
}

export default BlogSection
