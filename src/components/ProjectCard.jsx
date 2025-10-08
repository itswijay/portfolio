'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { GitHubIcon } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ProjectCard = ({
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
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-border bg-card relative shadow-2xl text-card-foreground overflow-hidden group"
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
        className="absolute inset-0 bg-gradient-to-br from-primary/1 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={false}
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-2xl relative block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="leading-[0]"
        >
          <Image
            src={img}
            width={500}
            height={500}
            alt={title}
            className="w-full h-auto block"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>

        {/* Image overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between p-6 relative z-10">
        <motion.span
          className="text-primary font-medium text-sm uppercase tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {type}
        </motion.span>

        <Link
          href={link}
          target="_blank"
        >
          <motion.h2
            className="my-2 w-full text-left text-dark/90 text-2xl font-bold group-hover:text-darken transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.p
          className="my-2 font-medium text-justify text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {summary}
        </motion.p>

        <motion.div
          className="mt-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={github}
              target="_blank"
              //   className="hover:text-primary transition-colors duration-300"
            >
              <GitHubIcon className="w-8 h-8" />
            </Link>
          </motion.div>

          <Link href={link} target="_blank">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="font-semibold cursor-pointer">
                Visit Project
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />
    </motion.article>
  )
}

export default ProjectCard
