"use client";
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

interface Props {
  imageUrl: string;
  children: React.ReactNode;
  className?: string
}

export const ParallaxSection = ({ imageUrl, children, className = "" }: Props) => {
  // Налаштування паралакса для фонового зображення
  const parallax = useParallax({
    speed: -60,
  });

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Контейнер для зображення */}
      <div 
        ref={parallax.ref} // Прив'язуємо паралакс до цього div
        className="absolute inset-0 z-0 h-[120%] w-full" // Робимо зображення вищим за секцію, щоб було куди скролити
      >
        <img 
          src={imageUrl} 
          alt="Parallax background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Оверлей для затемнення */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Контент, який скролиться швидко (z-10, щоб бути над зображенням) */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </section>
  );
};