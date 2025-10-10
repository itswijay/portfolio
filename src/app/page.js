import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import Image from 'next/image'
import HomeImage from '@/components/HomeImage'

export default function Home() {
  return (
    <>
      <main className="flex w-full min-h-screen bg-background text-foreground m-0 p-0 transition-colors duration-300">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <HomeImage />
            <div className="w-1/2 flex flex-col items-center self-center">
              <h1></h1>
              <AnimatedText
                text="Building ideas into reality, with precision and purpose."
                className="text-left text-xl md:text-3xl lg:text-5xl"
              />
              <p className="my-4 text-base font-medium text-muted-foreground">
                A skilled full-stack developer passionate about transforming
                complex problems into simple, scalable, and impactful solutions.
                Dedicated to clean code and creative design, delivering digital
                experiences that truly matter.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  className="flex items-center bg-foreground text-background p-2 px-4 rounded-lg text-md font-semibold border-2 border-solid border-transparent hover:border-foreground hover:bg-background hover:text-foreground transition-all duration-300"
                  href="/SE.pdf"
                  target="_blank"
                  download={false}
                >
                  Resume
                  <LinkArrow className="ml-1 w-5.5" />
                </Link>
                <Link
                  className="text-lg underline capitalize text-foreground hover:text-primary ml-4 transition-colors duration-300"
                  href="mailto:pubuduwijes@gmail.com"
                  target="_blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
