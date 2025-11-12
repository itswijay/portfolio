'use client'
import React from 'react'

const BlogCardSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl border border-border bg-card relative shadow-2xl overflow-hidden animate-pulse">
      <div className="w-full h-full flex flex-col p-6 relative z-10">
        {/* Header - Featured Badge placeholder */}
        <div className="flex items-center justify-between mb-3">
          <div className="h-6 bg-muted rounded-full w-24"></div>
          <div className="h-5 w-5 bg-muted rounded"></div>
        </div>

        {/* Title placeholder */}
        <div className="space-y-2 mb-3">
          <div className="h-6 bg-muted rounded w-full"></div>
          <div className="h-6 bg-muted rounded w-3/4"></div>
        </div>

        {/* Excerpt placeholder */}
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>

        {/* Tags placeholder */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-muted rounded-md w-16"></div>
          <div className="h-6 bg-muted rounded-md w-20"></div>
          <div className="h-6 bg-muted rounded-md w-14"></div>
        </div>

        {/* Footer placeholder */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="h-4 bg-muted rounded w-20"></div>
            <div className="h-4 bg-muted rounded w-16"></div>
          </div>
          <div className="h-4 bg-muted rounded w-16"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardSkeleton
