import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-300">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the world!" className="mb-16" />
          <ul className="grid grid-cols-4 text-foreground gap-12">
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 1
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 2
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 3
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 4
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 5
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 6
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 7
            </li>
            <li className="p-4 rounded-lg bg-card text-card-foreground hover:bg-muted transition-colors duration-300 cursor-pointer">
              Latest Article 8
            </li>
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles