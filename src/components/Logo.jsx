import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc =
    mounted && theme === 'light' ? '/logos/wijaytb.png' : '/logos/wijaytw.png'

  return (
    <div className="flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="relative block w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
      >
        <Link href="/" className="relative block w-full h-full">
          <Image
            src={logoSrc}
            alt="Logo"
            fill
            className="object-contain transition-opacity duration-200 hover:opacity-90"
            sizes="(max-width: 768px) 48px, 64px"
            priority
          />
        </Link>
      </motion.div>
    </div>
  )
}

export default Logo
