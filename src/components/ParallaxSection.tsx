"use client";
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

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
  const parallax = useParallax<HTMLDivElement>({
    speed: -50,
  });

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        ref={parallax.ref}
        className="absolute left-0 right-0 z-0"
        style={{ top: '-50%', bottom: '-50%' }}
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-${objectFit} object-center ${height}`}
          />
        ) : (
          <img
            src={imageUrl}
            alt="Parallax background"
            className={`w-full h-full object-${objectFit} object-center ${height}`}
          />
        )}
        {useFade && !videoUrl && <div className="absolute inset-0 bg-black/40" />}
      </div>

      <div className="relative z-10 flex items-center justify-center py-12">
        {children}
      </div>
    </section>
  );
};