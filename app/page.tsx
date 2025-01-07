import { Suspense } from 'react'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Loading from './loading'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  )
}

