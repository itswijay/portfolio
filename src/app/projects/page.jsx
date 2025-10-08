import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProjectCard
                type="AI / Healthcare"
                title="Intima"
                summary="A conversational AI bot that provides guidance on sexual, obstetrics, and gynecology healthcare topics. Built with vector databases and OpenAI API."
                img="/projects/intima.png"
                link="https://github.com/thewijay/Intima_Front-End"
                github="https://github.com/thewijay/Intima_Front-End"
                index={0}
              />
            </div>
            <div className="col-span-6">
              <ProjectCard
                type="Full-Stack"
                title="Next.js Markdown Blog"
                summary="A blog platform built with Next.js, Markdown, and Tailwind CSS. Supports dynamic routing, SEO optimization, and Vercel deployment."
                img="/projects/gpa_cal.png"
                link="#"
                github="#"
                index={1}
              />
            </div>
            <div className="col-span-6">
              <ProjectCard
                type="Web Development"
                title="Personal Portfolio Website"
                summary="A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, project showcase, and smooth animations."
                img="/projects/gpa_cal.png"
                link="https://itswijay.vercel.app"
                github="https://github.com/thewijay/portfolio"
                index={2}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjectCard
                type="Laravel / Medical Management"
                title="MediTrack SUSL"
                summary="Dockerized medical management system built with Laravel, MySQL and phpMyAdmin. Features automated migrations & seeding, container orchestration, and documented local & production deployment workflows."
                img="/projects/meditrack.png"
                link="#"
                github="https://github.com/thewijay/meditrack-susl"
                index={4}
              />
            </div>
            <div className="col-span-6">
              <ProjectCard
                type="Web App"
                title="GPA Calculator"
                summary="A lightweight web app that lets university students calculate GPA instantly. Auto-loads courses based on degree & semester with data stored locally in browser."
                img="/projects/gpa_cal.png"
                link="https://gpacalsusl.vercel.app"
                github="https://github.com/thewijay/gpa-cal"
                index={5}
              />
            </div>
            <div className="col-span-6">
              <ProjectCard
                type="AI / Productivity"
                title="Mentora – AI Time Management Assistant"
                summary="An AI-powered platform that generates personalized study/work calendars, analyzes productivity, and helps students manage time efficiently."
                img="/projects/gpa_cal.png"
                link="#"
                github="#"
                index={6}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
