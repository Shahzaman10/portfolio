'use client';
import TextReveal from '@/components/motion/text-reveal';
import { getAboutPageData } from '@/lib/aboutPage';
import React from 'react';
import Line from '@/components/motion/line';
import Image from 'next/image';

export default function About() {
  const [aboutData, setAboutData] = React.useState<{
    title: string;
    imageUrl: string;
  } | null>(null);

  React.useEffect(() => {
    getAboutPageData().then((data) => {
      setAboutData(data);
    });
  }, []);

  return (
    <main className="my-24 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] flex-col items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-start gap-10 md:max-w-7xl">
          {/* Optimized Image */}
          {aboutData?.imageUrl && (
            <div className="mt-12 flex w-full max-w-[300px]">
              <Image
                src={aboutData.imageUrl}
                alt={aboutData.title || 'About Page Image'}
                width={300} // Set desired width
                height={200} // Set desired height
                className="rounded-md shadow-lg"
                priority={true} // Optional: Preload image for better performance
              />
            </div>
          )}
          {/* Title */}
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextReveal delay={0.1}>
              {aboutData?.title || 'Loading...'}
            </TextReveal>
          </h1>

          {/* Separator */}
          <Line className="mt-16" />
        </div>
      </section>
    </main>
  );
}
