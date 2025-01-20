'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';

function HomeContent() {
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    setSearchParams(useSearchParams());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}