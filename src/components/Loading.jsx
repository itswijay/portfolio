'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                y: [-10, 0, -10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 mx-auto px-4 sm:px-0">
          <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary-light"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-sm text-muted-foreground mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Preparing your experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loading
