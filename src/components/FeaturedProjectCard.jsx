'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { GitHubIcon } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const FeaturedProjectCard = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  index = 0,
}) => {
  return (
    <motion.article
      className="w-full h-full flex items-center justify-between rounded-3xl border border-border bg-card shadow-2xl text-card-foreground overflow-hidden group relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        initial={false}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        initial={false}
      />

      <motion.div
        className="w-1/2 h-full cursor-pointer overflow-hidden relative leading-[0]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Link href={link} target="_blank" className="block h-full">
          <Image
            src={img}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover block"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />

          {/* Image overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
        </Link>
      </motion.div>

      <div className="w-1/2 h-full flex flex-col items-start justify-between px-8 py-6 relative z-10">
        <div>
          <motion.span
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          >
            ⭐ {type}
          </motion.span>

          <Link href={link} target="_blank" className="w-full">
            <motion.h2
              className="mt-2 mb-2 w-full text-left text-dark/90 text-3xl font-bold leading-tight group-hover:text-darken transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              {title}
            </motion.h2>
          </Link>

          <motion.p
            className="mt-2 mb-4 font-medium text-muted-foreground text-justify leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          >
            {summary}
          </motion.p>
        </div>

        <motion.div
          className="mt-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={github}
              target="_blank"
              //   className="hover:text-primary transition-colors duration-300"
            >
              <GitHubIcon className="w-9 h-9" />
            </Link>
          </motion.div>

          <Link href={link} target="_blank">
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="font-semibold cursor-pointer px-6 py-3 text-base">
                Visit Project
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </div>

      {/* Bottom highlight line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
        initial={false}
      />
    </motion.article>
  )
}

export default FeaturedProjectCard
