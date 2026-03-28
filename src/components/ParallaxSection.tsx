"use client";
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

interface Props {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  useFade?: boolean;
}

export const ParallaxSection = ({ imageUrl, children, className = "", useFade = true }: Props) => {
  const parallax = useParallax<HTMLDivElement>({
    speed: -50,
  });

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      <div 
        ref={parallax.ref}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <img 
          src={imageUrl} 
          alt="Parallax background" 
          className="w-full h-full object-cover object-center"
        />
        {useFade && <div className="absolute inset-0 bg-black/40"></div>}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </section>
  );
};