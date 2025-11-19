import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import HomeImage from '@/components/HomeImage'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'Pubudu Wijesundara - Full Stack Developer & DevOps Engineer',
  description:
    'Portfolio of Pubudu Wijesundara - A skilled full-stack developer passionate about transforming complex problems into simple, scalable solutions. Specializing in React, Next.js, Django, DevOps, and modern web development.',
  keywords: [
    'Pubudu Wijesundara',
    'Full Stack Developer',
    'DevOps Engineer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'Django',
    'Portfolio',
    'Software Engineer',
  ],
  alternates: {
    canonical: 'https://www.itswijay.me',
  },
  openGraph: {
    title: 'Pubudu Wijesundara - Full Stack Developer & DevOps Engineer',
    description:
      'Portfolio of Pubudu Wijesundara - Building ideas into reality with precision and purpose. Skilled in full-stack development, DevOps, and cloud technologies.',
    type: 'website',
    url: 'https://www.itswijay.me',
    images: [
      {
        url: '/logos/logo.png',
        alt: 'Pubudu Wijesundara Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pubudu Wijesundara - Full Stack Developer & DevOps Engineer',
    description:
      'Portfolio of Pubudu Wijesundara - Building ideas into reality with precision and purpose.',
    images: ['/logos/logo.png'],
  },
}

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pubudu Wijesundara',
    url: 'https://www.itswijay.me',
    image: 'https://www.itswijay.me/logos/logo.png',
    jobTitle: 'Full Stack Developer & DevOps Engineer',
    description:
      'A skilled full-stack developer passionate about transforming complex problems into simple, scalable solutions.',
    email: 'pubuduwijes@gmail.com',
    sameAs: [
      'https://github.com/thewijay',
      'https://www.linkedin.com/in/pubudu-wijesundara',
      'https://blog.itswijay.me',
    ],
    knowsAbout: [
      'Full Stack Development',
      'DevOps',
      'React',
      'Next.js',
      'Django',
      'Web Development',
      'Cloud Technologies',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pubudu Wijesundara Portfolio',
    url: 'https://www.itswijay.me',
    description:
      'Portfolio of Pubudu Wijesundara - Full Stack Developer & DevOps Engineer',
    author: {
      '@type': 'Person',
      name: 'Pubudu Wijesundara',
    },
  }

  return (
    <>
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <main className="flex w-full min-h-screen bg-background text-foreground m-0 p-0 transition-colors duration-300">
        <Layout className="!pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
            <HomeImage />
            <div className="w-full md:w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Building ideas into reality, with precision and purpose."
                className="text-left text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
              />
              <p className="my-3 sm:my-4 md:my-5 text-sm sm:text-base md:text-base lg:text-lg font-medium text-muted-foreground text-justify">
                A skilled full-stack developer passionate about transforming
                complex problems into simple, scalable, and impactful solutions.
                Dedicated to clean code and creative design, delivering digital
                experiences that truly matter.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-center self-start mt-2 gap-3 sm:gap-0 w-full sm:w-auto">
                <Link
                  className="flex items-center justify-center bg-foreground text-background p-2.5 px-5 sm:p-2 sm:px-4 rounded-lg text-sm sm:text-md font-semibold border-2 border-solid border-transparent hover:border-foreground hover:bg-background hover:text-foreground transition-all duration-300 w-full sm:w-auto"
                  href="/Pubudu-Wijesundara-Software-Engineer-Intern.pdf"
                  target="_blank"
                  download={false}
                >
                  Resume
                  <LinkArrow className="ml-1 w-5.5" />
                </Link>
                <Link
                  className="text-base sm:text-lg underline capitalize text-foreground hover:text-primary sm:ml-4 transition-colors duration-300"
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
