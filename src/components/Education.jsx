'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({
  degree,
  school,
  time,
  address,
  description,
  achievements = [],
}) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between group"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 10 }}
        className="w-full bg-card rounded-lg shadow-lg p-6 border border-border/20 hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-4">
          <h3 className="capitalize font-bold text-2xl text-card-foreground/85 mb-2 group-hover:text-darken transition-colors duration-300">
            {degree}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-primary">@</span>
            <span className="text-primary font-semibold text-lg">{school}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium transition-colors duration-300">
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

        <div className="mb-4">
          <p className="font-medium text-card-foreground/85 leading-relaxed text-justify transition-colors duration-300">
            {description}
          </p>
        </div>

        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-card-foreground mb-2 text-sm uppercase tracking-wide transition-colors duration-300">
              Key Achievements
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64 text-foreground transition-colors duration-300">
      <motion.h2
        className="font-bold text-6xl w-full text-center mb-32 transition-colors duration-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-primary to-primaryDark origin-top rounded-full shadow-sm"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            degree="Bachelor of Science (Honours) in Computing and Information Systems"
            school="Sabaragamuwa University of Sri Lanka"
            time="2023 – Present"
            address="Belihuloya, Sri Lanka"
            description="Pursuing a rigorous undergraduate degree with a strong foundation in computer science, software engineering, and information systems. Developing hands-on expertise in full-stack development, AI integration, database design, and modern web technologies through academic coursework and real-world projects."
            achievements={[
              'Developing an AI-based sexual and wellness healthcare assistant as the final-year capstone project',
              'Volunteered in coding and technology workshops organized by the STEMUp Educational Foundation',
              'Active member of the IEEE Student Branch and IT Society design team',
              'Engaged in multiple team-based software and AI projects focusing on innovation and practical problem-solving',
            ]}
          />

          <Details
            degree={
              <>
                Advanced Level in Physical Science
                <br />
                <span className="normal-case">(with Information Technology)</span>
              </>
            }
            school="D.S. Senanayake National School"
            time="2018-2020"
            address="Mirigama, Sri Lanka"
            description="Completed Advanced Level studies in Physical Science stream with Mathematics, Physics, and Information Technology. Developed strong analytical and problem-solving skills that form the foundation of my technical career."
            achievements={[
              'Achieved excellent results in all three subjects',
              'Participated in inter-school science competitions',
              'Member of the science society',
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
