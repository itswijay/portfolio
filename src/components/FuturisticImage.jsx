'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const sizeClasses = {
  sm: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64', // Responsive: 192px -> 224px -> 256px
  md: 'w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80', // Responsive: 224px -> 256px -> 320px
  lg: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96', // Responsive: 256px -> 320px -> 384px
  xl: 'w-80 h-80 sm:w-96 sm:h-96 md:w-120 md:h-120', // Responsive: 320px -> 384px -> 480px
}

export default function FuturisticImage({
  src,
  alt,
  width = 320,
  height = 320,
  className = '',
  size = 'md',
}) {
  return (
    <motion.div
      className="col-span-1 md:col-span-3 p-4 sm:p-6 md:p-8 flex items-center justify-center md:block transition-colors duration-600"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`relative ${sizeClasses[size]} group ${className}`}>
        {/* Main container with subtle glow */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl border border-slate-300/50">
          {/* Clean border accent */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-500/20 to-purple-500/20 bg-clip-border"></div>

          {/* Image container */}
          <div className="relative w-full h-full p-2">
            <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-inner">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-full object-cover filter brightness-105 contrast-110 hover:scale-105 transition-all duration-700 ease-out"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Subtle outer glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl blur-sm transition-all duration-500 -z-10"></div>
      </div>
    </motion.div>
  )
}
