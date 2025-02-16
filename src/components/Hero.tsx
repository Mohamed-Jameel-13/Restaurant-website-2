import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Hero() {
  const containerRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.hero-button', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.2');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto"> {/* Increased z-index */}
        <h2 className="hero-subtitle text-orange-500 uppercase tracking-[0.3em] text-sm mb-6 font-medium">
          Welcome to
        </h2>
        <h1 className="hero-title text-6xl text-white transition-colors duration-300 hover:text-orange-500 md:text-7xl lg:text-8xl font-playfair font-bold mb-8">
          Spice Symphony
        </h1>
        <p className="hero-description text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Experience the finest Indian dining with a modern twist, where tradition meets innovation
          in every carefully crafted dish.
        </p>
        <a
          href="#reservations"
          className="hero-button inline-block px-8 py-4 bg-orange-500 text-white font-medium rounded-full
                   hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
        >
          Reserve Your Table
        </a>
      </div>


      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20"> {/* Increased z-index */}
        <a href="#menu" className="text-white/60 hover:text-orange-500 transition-colors duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}