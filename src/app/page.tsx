import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import VideoFeature from '@/components/VideoFeature'
import Stats from '@/components/Stats'
import WhatWeInstall from '@/components/WhatWeInstall'
import Process from '@/components/Process'
import Why from '@/components/Why'
import Suppliers from '@/components/Suppliers'
import Work from '@/components/Work'
import CaseStudies from '@/components/CaseStudies'
import Safety from '@/components/Safety'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getInstagramFeed } from '@/lib/getInstagramFeed'

export default async function Home() {
  const posts = await getInstagramFeed()

  return (
    <main>
      <Nav />
      <Hero />
      <VideoFeature />
      <Stats />
      <WhatWeInstall />
      <Process />
      <Why />
      <Suppliers />
      <Work posts={posts} />
      <CaseStudies />
      <Safety />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
