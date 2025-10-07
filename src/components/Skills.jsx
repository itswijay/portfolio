'use client'
import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Django', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MYSQL', level: 99 },
        { name: 'MongoDB', level: 75 },
        { name: 'Python', level: 75 },
        { name: 'Express.js', level: 55 },
      ],
    },
    {
      category: 'Tools & Technologies',
      technologies: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Supabase', level: 75 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux', level: 75 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <>
      <AnimatedText
        text="Skills & Expertise"
        className="text-5xl text-center mb-16 mt-20"
      />

      <motion.div
        className="w-full max-w-6xl mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={categoryVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center transition-colors duration-300">
                {skillCategory.category}
              </h3>

              <div className="space-y-4">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="space-y-2"
                    variants={skillVariants}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    custom={techIndex}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-card-foreground font-medium text-sm transition-colors duration-300">
                        {tech.name}
                      </span>
                      <span className="text-card-foreground/70 text-sm transition-colors duration-300">
                        {tech.level}%
                      </span>
                    </div>

                    <div className="w-full bg-muted/30 rounded-full h-2 transition-colors duration-300">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + techIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          variants={categoryVariants}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 transition-colors duration-300">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Team Leadership',
              'Agile Methodologies',
              'Code Review',
              'Technical Writing',
              'Mentoring',
              'Project Management',
              'UI/UX Design',
              'Performance Optimization',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.5 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 block px-6 py-2 bg-card/80 backdrop-blur-sm text-card-foreground rounded-full text-sm font-medium border border-border/50 cursor-pointer transition-all duration-300 group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                  
                  {/* Background gradient on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  {/* Shimmer effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full" />

                  <span className="relative z-10">{skill}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Skills
