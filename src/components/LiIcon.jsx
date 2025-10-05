import { motion, useScroll } from 'framer-motion'
import React from 'react'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-0 stroke-foreground transition-colors duration-300">
      <svg
        className="-rotate-90 !mt-0"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-muted-foreground/30 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-[5px] fill-none transition-colors duration-300"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary/20 stroke-primary"
        />
      </svg>
    </figure>
  )
}

export default LiIcon
