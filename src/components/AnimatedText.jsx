'use client'
import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const AnimatedText = React.memo(({ text, className }) => {
  return (
    <div className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-foreground font-bold capitalize text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block "
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
})

AnimatedText.displayName = 'AnimatedText'

export default AnimatedText
