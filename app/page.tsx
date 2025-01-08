'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Suspense>
  );
}
