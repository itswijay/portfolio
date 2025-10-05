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
          <h3 className="capitalize font-bold text-2xl text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {position}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-primary">@</span>
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-lg hover:underline transition-all duration-200 hover:opacity-80"
            >
              {company}
            </a>
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
            {work}
          </p>
        </div>

        {achievements.length > 0 && (
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

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-muted-foreground mr-2 transition-colors duration-300">
              Technologies:
            </span>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
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
    <div className="my-64 text-foreground transition-colors duration-300">
      <motion.h2
        className="font-bold text-6xl w-full text-center mb-32 transition-colors duration-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-primary to-primaryDark origin-top rounded-full shadow-sm"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-0">
          <Details
            position="Senior Software Engineer"
            company="Microsoft"
            companyLink="https://www.microsoft.com"
            time="2023 - Present"
            address="Redmond, WA"
            work="Lead development of real-time collaboration features for Microsoft Teams, serving millions of concurrent users. Architected scalable chat infrastructure and integrated AI-driven transcription services to enhance user productivity and meeting accessibility."
            technologies={[
              'TypeScript',
              'React',
              'Azure',
              'C#',
              '.NET',
              'SignalR',
              'Redis',
              'Docker',
            ]}
            achievements={[
              'Reduced message latency by 40% through infrastructure optimization',
              'Led a team of 5 engineers to deliver AI transcription feature ahead of schedule',
              'Improved system reliability from 99.5% to 99.9% uptime',
            ]}
          />
          <Details
            position="Backend Software Developer"
            company="Netflix"
            companyLink="https://www.netflix.com"
            time="2021 - 2023"
            address="Los Gatos, CA"
            work="Engineered and optimized backend systems for Netflix's recommendation engine, enhancing personalization algorithms and content delivery performance. Developed comprehensive monitoring solutions for streaming reliability across global infrastructure."
            technologies={[
              'Java',
              'Python',
              'Apache Kafka',
              'Elasticsearch',
              'AWS',
              'Microservices',
              'GraphQL',
            ]}
            achievements={[
              'Improved recommendation accuracy by 25% through algorithm optimization',
              'Reduced content delivery latency by 30% across global CDN',
              'Implemented monitoring system that decreased incident response time by 50%',
            ]}
          />
          <Details
            position="Software Engineering Intern"
            company="Airbnb"
            companyLink="https://www.airbnb.com"
            time="Summer 2020"
            address="San Francisco, CA"
            work="Developed innovative virtual tour features enabling hosts to showcase properties remotely during the pandemic. Built video streaming pipeline and created intuitive host management dashboards, significantly improving user engagement."
            technologies={[
              'React',
              'Node.js',
              'WebRTC',
              'MongoDB',
              'Express.js',
              'AWS S3',
            ]}
            achievements={[
              'Delivered virtual tour feature used by 10,000+ hosts within first month',
              'Increased host engagement by 35% through improved dashboard UX',
              'Contributed to $2M additional revenue during pandemic period',
            ]}
          />
          <Details
            position="Full Stack Developer"
            company="Spotify"
            companyLink="https://www.spotify.com"
            time="2019 - 2020"
            address="New York, NY"
            work="Enhanced Spotify's web application with focus on social features and performance optimization. Implemented playlist-sharing functionality and contributed to backend microservices handling user authentication and data management."
            technologies={[
              'React',
              'Redux',
              'Node.js',
              'PostgreSQL',
              'Docker',
              'Kubernetes',
              'REST APIs',
            ]}
            achievements={[
              'Reduced web app load time by 45% through performance optimizations',
              'Launched playlist-sharing feature adopted by 2M+ users',
              'Improved authentication system security and reduced login failures by 60%',
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experiences