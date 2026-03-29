'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDictionary } from '@/context/DictionaryContext';

export function Header() {
  const dict = useDictionary();
  const navigation = dict.Navigation;
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: navigation.tours, href: `/${lang}/tours` },
/*     { label: navigation.routes, href: `/${lang}/routes` }, */
    { label: navigation.accomodation, href: `/${lang}/accomodation` },
    { label: navigation.contact, href: `/${lang}/contact` },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[9999]
        h-[90px] md:h-[120px]
        transition-all duration-700
        text-sm uppercase tracking-wider
        ${scrolled ? 'bg-black/60' : 'transparent'}`}
    >
      <div className="max-w-auto mx-auto h-full px-5 md:px-20 flex items-center justify-start relative gap-20">
        <Link
          href={`/${lang}`}
          className="text-white 
          text-xl 
          tracking-wide mr-10"
        >
          <Image src="/images/logo2.svg" alt="Castellon Cycling Co" width={200} height={200} className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]' />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-lg font-bold uppercase tracking-wider transition border-b-2 border-transparent hover:border-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white absolute right-[50px] top-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className="h-[1px] bg-white w-full" />
            <span className="h-[1px] bg-white w-full" />
            <span className="h-[1px] bg-white w-full" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            xl:hidden
            fixed inset-0 w-full h-screen bg-black text-white z-[10000]
          "
        >
          <div
            className="
              relative
              h-full w-full
              flex flex-col items-center justify-center
            "
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="h-[1px] bg-white w-full rotate-45 absolute" />
                <span className="h-[1px] bg-white w-full -rotate-45 absolute" />
              </div>
            </button>

            {/* Logo */}
            <Link
              href={`/${lang}`}
              className="absolute top-0 left-5 text-white text-xl font-serif tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/images/logo2.svg" alt="The Pines Hotel" width={100} height={40} />
            </Link>

            {/* Navigation */}
            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-bold uppercase tracking-wider hover:opacity-80 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}