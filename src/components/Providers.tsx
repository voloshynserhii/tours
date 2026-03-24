"use client";

import { ParallaxProvider } from 'react-scroll-parallax';
import { DictionaryProvider } from '@/components';
import type { Dictionary } from '@/get-dictionary';

export function Providers({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryProvider dictionary={dictionary}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </DictionaryProvider>
  );
}
