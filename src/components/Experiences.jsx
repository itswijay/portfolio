'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  technologies = [],
  achievements = [],
}) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className="my-8 sm:my-10 md:my-12 first:mt-0 last:mb-0 w-[98%] sm:w-[75%] md:w-[65%] mx-0 md:mx-auto flex flex-col items-center justify-between group"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 10 }}
        className="w-full bg-card rounded-lg shadow-lg p-4 sm:p-5 md:p-6 border border-border/20 hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-3 sm:mb-3.5 md:mb-4">
          <h3 className="capitalize font-bold text-xl sm:text-xl md:text-2xl text-card-foreground/85 mb-2 group-hover:text-darken transition-colors duration-300">
            {position}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base sm:text-lg md:text-lg font-semibold text-primary-light">
              @
            </span>
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light font-semibold text-base sm:text-lg md:text-lg hover:underline transition-all duration-200 hover:opacity-80"
            >
              {company}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-4 text-xs sm:text-sm md:text-sm text-muted-foreground font-medium transition-colors duration-300">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {time}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {address}
            </span>
          </div>
        </div>

        <div className="mb-3 sm:mb-3.5 md:mb-4">
          <p className="font-medium text-sm sm:text-base md:text-base text-card-foreground/85 leading-relaxed text-justify transition-colors duration-300">
            {work}
          </p>
        </div>

        {achievements && achievements.length > 0 && (
          <div className="mb-3 sm:mb-3.5 md:mb-4">
            <h4 className="font-semibold text-card-foreground mb-2 text-xs sm:text-sm md:text-sm uppercase tracking-wide transition-colors duration-300">
              Key Achievements
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-muted-foreground text-xs sm:text-sm md:text-sm leading-relaxed transition-colors duration-300"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <span className="text-xs sm:text-xs md:text-sm font-semibold text-muted-foreground mr-1 sm:mr-2 transition-colors duration-300">
              Technologies:
            </span>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs sm:text-xs md:text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  )
}

const Experiences = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-32 sm:my-48 md:my-64 text-foreground transition-colors duration-300">
      <motion.h2
        className="font-bold text-4xl sm:text-5xl md:text-6xl w-full text-center mb-16 sm:mb-24 md:mb-32 transition-colors duration-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>
      <div ref={ref} className="w-[95%] sm:w-[85%] md:w-[80%] mx-auto relative">
        <motion.div
          className="absolute left-[-12px] sm:left-[28px] md:left-[45px] top-0 w-[2px] sm:w-[3px] md:w-[4px] h-full bg-gradient-to-b from-primary-light/60 to-white/10 origin-top rounded-full shadow-md shadow-primary/20"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-0">
          <Details
            position="Associate Image Processor"
            company="OREL IT"
            companyLink="https://www.orelit.com"
            time="Aug 2022 – Dec 2022"
            address="Kadawatha, Western Province, Sri Lanka"
            work="Ensured accuracy and consistency in image tagging and labeling to support computer vision projects. Collaborated with the quality control team to maintain data integrity and meet production deadlines."
            technologies={[
              'Image Processing',
              'Data Labeling',
              'Quality Control',
              'Computer Vision',
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experiences
