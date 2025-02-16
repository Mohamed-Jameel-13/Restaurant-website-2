import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function About() {
  const containerRef = React.useRef(null);
  const milestones = [
    {
      year: 1995,
      title: 'Grand Opening',
      description: 'Spice Symphony opens its doors in the heart of the city.',
    },
    {
      year: 2005,
      title: 'First Michelin Star',
      description: 'Recognized for exceptional culinary excellence.',
    },
    {
      year: 2015,
      title: 'Expansion',
      description: 'Opened our second location with a modern dining concept.',
    },
    {
      year: 2023,
      title: 'Innovation Award',
      description: 'Received the prestigious Culinary Innovation Award.',
    },
  ];

  useGSAP(() => {
    gsap.from('.milestone', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="container mx-auto px-4">
      <h2 className="text-4xl font-playfair text-primary dark:text-accent text-center mb-12">
        Our Story
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-secondary/30"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="milestone relative">
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="text-xl font-playfair text-secondary">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-xl font-playfair text-primary dark:text-accent mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-accent/80">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}