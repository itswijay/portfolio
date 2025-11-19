import AnimatedText from '@/components/AnimatedText'
import FuturisticImage from '@/components/FuturisticImage'
import Layout from '@/components/Layout'
import AnimatedNumbers from '@/components/AnimateNumbers'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'About | Pubudu Wijesundara - Full Stack Developer',
  description:
    "Learn about Pubudu Wijesundara's journey as a DevOps enthusiast, full-stack developer, and tech educator. Discover skills, experience, and educational background in software engineering and web development.",
  keywords: [
    'About Pubudu Wijesundara',
    'Software Engineer',
    'DevOps',
    'Full Stack Developer',
    'Biography',
    'Skills',
    'Experience',
    'Education',
  ],
  openGraph: {
    title: 'About | Pubudu Wijesundara - Full Stack Developer',
    description:
      'Building solutions, sharing knowledge, and creating impact through technology. Learn about my journey as a full-stack developer and DevOps enthusiast.',
    type: 'profile',
    url: 'https://www.itswijay.me/about',
    images: [
      {
        url: '/logos/logo.png',
        alt: 'Pubudu Wijesundara Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Pubudu Wijesundara - Full Stack Developer',
    description:
      'Building solutions, sharing knowledge, and creating impact through technology.',
    images: ['/logos/logo.png'],
  },
}

const about = () => {
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: 'Pubudu Wijesundara',
      alternateName: 'Wijay',
      description:
        'DevOps enthusiast, full-stack developer, and tech educator who loves exploring new technologies and sharing knowledge.',
      image: 'https://www.itswijay.me/logos/logo.png',
      sameAs: [
        'https://github.com/thewijay',
        'https://www.linkedin.com/in/pubudu-wijesundara',
        'https://blog.itswijay.me',
      ],
    },
  }

  return (
    <>
      <StructuredData data={profilePageSchema} />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimatedText
            text="Building solutions, sharing knowledge, and creating impact through technology."
            className="!mb-6 md:!mb-8 !text-lg sm:!text-xl md:!text-2xl"
          />
          <section
            className="grid w-full grid-cols-1 md:grid-cols-8 gap-8 md:gap-16"
            aria-label="Biography and statistics"
          >
            <article className="col-span-1 md:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-3 md:mb-4 text-base md:text-lg font-bold uppercase text-foreground/80 transition-colors duration-300">
                Biography
              </h2>
              <p className="text-sm md:text-base font-medium text-muted-foreground text-justify transition-colors duration-300">
                I&#39;m a DevOps enthusiast, full-stack developer, and tech
                educator who loves exploring new technologies, experimenting
                with tools, and building solutions that matter. A proud Linux
                fan, I bring creativity, curiosity, and hands-on expertise to
                every project. I believe that knowledge multiplies when it&#39;s
                shared and that technology is at its best when it serves people
                and communities.
              </p>
              <p className="my-3 md:my-4 text-sm md:text-base font-medium text-muted-foreground text-justify transition-colors duration-300">
                Throughout my journey, I&#39;ve developed solutions that bridge
                the gap between complex backend systems and intuitive user
                interfaces. I enjoy writing about what I learn, creating
                educational content, and contributing to the tech community. My
                goal is to continue growing as a developer while helping others
                discover the joy of building with code.
              </p>
            </article>
            <FuturisticImage
              src="/profile/4.png"
              alt="Pubudu Wijesundara"
              size="lg"
            />
            <aside className="col-span-1 md:col-span-2 flex flex-col items-center md:items-end justify-center md:justify-around py-6 md:py-0 text-foreground/85 transition-colors duration-300">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-5xl font-bold mb-2">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-lg sm:text-xl md:text-xl font-medium capitalize text-muted-foreground transition-colors duration-300">
                  Projects Completed
                </h2>
              </div>
            </aside>
          </section>
          <Skills />
          <Experiences />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
