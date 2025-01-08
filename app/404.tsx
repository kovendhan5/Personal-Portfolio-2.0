'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

export default function NotFoundPage() {
  const searchParams = useSearchParams();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </Suspense>
  );
}
