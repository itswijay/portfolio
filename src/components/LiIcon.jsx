import { motion, useScroll } from 'framer-motion'
import React from 'react'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-[-37px] sm:left-[-42px] md:left-[9px] stroke-foreground transition-colors duration-300">
      <svg
        className="-rotate-90 !mt-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        {/* Background circle */}
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-border stroke-[2] fill-none transition-colors duration-300"
        />
        {/* Progress circle */}
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary-light stroke-[4] fill-none transition-colors duration-300 drop-shadow-[0_0_1px_currentColor]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        {/* Center dot */}
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-[2] fill-primary/30 stroke-primary transition-colors duration-300"
        />
      </svg>
    </figure>
  )
}

export default LiIcon
