import AnimatedText from '@/components/AnimatedText'
import { GitHubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const Project = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-border bg-card relative shadow-2xl text-card-foreground transition-colors duration-300">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-2xl"
      >
        <Image
          src={img}
          width={500}
          height={500}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between p-4">
        <span className="text-primary font-medium text-md">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-1 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-justify text-muted-foreground">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <GitHubIcon className="w-8 h-8" />
          </Link>
          <Link href={link} target="_blank">
            <Button className="font-semibold ml-4 cursor-pointer">
              Visit Project
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-border bg-card shadow-2xl text-card-foreground transition-colors duration-300">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-3xl"
      >
        <Image
          src={img}
          width={500}
          height={500}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between px-6">
        <span className="text-primary font-medium text-md">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-muted-foreground text-justify">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <GitHubIcon className="w-8 h-8" />
          </Link>
          <Link href={link} target="_blank">
            <Button className="font-semibold ml-4 cursor-pointer">
              Visit Project
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

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
              <FeaturedProject
                type="Web App"
                title="GPA Calculator"
                summary="A lightweight web app that lets university students calculate GPA instantly. Auto-loads courses based on degree & semester with data stored locally in browser."
                img="/fashion-studio-website.jpg"
                link="https://gpacalsusl.vercel.app"
                github="https://github.com/itswijay/gpa-calculator"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Full-Stack"
                title="Next.js Markdown Blog"
                summary="A blog platform built with Next.js, Markdown, and Tailwind CSS. Supports dynamic routing, SEO optimization, and Vercel deployment."
                img="/fashion-studio-website.jpg"
                link="https://itswijay-blog.vercel.app"
                github="https://github.com/itswijay/blog-platform"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Web Development"
                title="Personal Portfolio Website"
                summary="A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, project showcase, and smooth animations."
                img="/fashion-studio-website.jpg"
                link="https://itswijay.vercel.app"
                github="https://github.com/itswijay/portfolio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="AI / Healthcare"
                title="Intima – AI Sexual & Wellness Healthcare Assistant"
                summary="A conversational AI bot that provides guidance on sexual, obstetrics, and gynecology healthcare topics. Built with vector databases and OpenAI API."
                img="/fashion-studio-website.jpg"
                link="https://intima-ai.vercel.app"
                github="https://github.com/itswijay/intima"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="AI / Productivity"
                title="Mentora – AI Time Management Assistant"
                summary="An AI-powered platform that generates personalized study/work calendars, analyzes productivity, and helps students manage time efficiently."
                img="/fashion-studio-website.jpg"
                link="https://mentora.vercel.app"
                github="https://github.com/itswijay/mentora"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="AI / Productivity"
                title="Mentora – AI Time Management Assistant"
                summary="An AI-powered platform that generates personalized study/work calendars, analyzes productivity, and helps students manage time efficiently."
                img="/fashion-studio-website.jpg"
                link="https://mentora.vercel.app"
                github="https://github.com/itswijay/mentora"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
