'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HomeImage = () => {
  return (
    <motion.div
      className="w-1/2 flex justify-center"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 5.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <Image
          className=""
          src="/profile/profile2.png"
          alt="Pubudu Wijesundara"
          width={800}
          height={800}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </motion.div>
    </motion.div>
  )
}

export default HomeImage
