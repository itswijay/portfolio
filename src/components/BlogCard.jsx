'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  formatBlogDateShort,
  formatViewCount,
  getReadingTimeText,
} from '@/lib/blogs'

const BlogCard = ({ post, index = 0 }) => {
  const {
    title,
    excerpt,
    date,
    tags = [],
    views = 0,
    readingTime,
    url,
    featured,
  } = post

  return (
    <motion.article
      className="w-full h-full flex flex-col rounded-2xl border border-border bg-card relative shadow-2xl text-card-foreground overflow-hidden group origin-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={false}
      />

      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex flex-col p-6 relative z-10"
      >
        {/* Header - Featured Badge and Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {featured && (
              <motion.span
                className="inline-flex items-center gap-1 bg-primary/10 text-primary font-medium text-xs px-2.5 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </motion.span>
            )}
          </div>

          {/* External link icon */}
          <motion.div
            className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {title}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-3 flex-grow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {excerpt}
        </motion.p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="inline-block text-muted-foreground text-xs px-2.5 py-1">
                +{tags.length - 3} more
              </span>
            )}
          </motion.div>
        )}

        {/* Footer - Meta Info */}
        <motion.div
          className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          <div className="flex items-center gap-3">
            <time dateTime={date} className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatBlogDateShort(date)}
            </time>

            {readingTime && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {getReadingTimeText(readingTime)}
              </span>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}

export default BlogCard
