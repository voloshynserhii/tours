"use client";
import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  videoUrl?: string;
  children: React.ReactNode;
  className?: string;
  useFade?: boolean;
  height?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const ParallaxSection = ({ imageUrl, videoUrl, children, className = "", useFade = true, height = "h-full", objectFit = "cover" }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parallax = useParallax<HTMLDivElement>({
    speed: -50,
  });

  const isMobile = windowWidth > 0 && windowWidth < 1200;
  const currentObjectFit = isMobile ? 'cover' : objectFit;

  const backgroundContent = (
    <>
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover md:object-${objectFit} object-center ${height}`}
        />
      ) : (
        <Image
          src={imageUrl}
          alt="Parallax background"
          fill
          objectFit={currentObjectFit}
          className={`object-cover md:object-${objectFit} object-center ${height}`}
          priority
        />
      )}
      {useFade && !videoUrl && <div className="absolute inset-0 bg-black/40 z-10" />}
    </>
  );

  return (
    <section className={`relative overflow-hidden h-[60vh] md:h-[80vh] ${className}`}>
      {/* Desktop Parallax */}
      <div
        ref={parallax.ref}
        className="absolute left-0 right-0 z-0 hidden md:block"
        style={{ top: '-50%', bottom: '-50%' }}
      >
        {backgroundContent}
      </div>

      {/* Mobile Non-Parallax */}
      <div className="absolute inset-0 z-0 block md:hidden">
        {backgroundContent}
      </div>

      <div className="relative z-20 flex items-center justify-center py-12 h-full w-full">
        {children}
      </div>
    </section>
  );
};
