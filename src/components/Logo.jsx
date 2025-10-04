import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import motion to avoid SSR issues
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

const Logo = () => {
//   const { theme } = useTheme()
//   const logoSrc =
//     theme === 'light' ? '/logos/wijaytb.png' : '/logos/wijaytw.png'

  return (
    <div className="flex items-center justify-center">
      <MotionDiv
        whileHover={{ scale: 1.15 }}
        className="relative block w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
      >
        <Link href="/" className="relative block w-full h-full">
          <Image
            src='/logos/wijaytb.png'
            alt="Logo"
            fill
            className="object-contain transition-opacity duration-200 hover:opacity-90"
            sizes="(max-width: 768px) 48px, 64px"
            priority
          />
        </Link>
      </MotionDiv>
    </div>
  )
}

export default Logo
