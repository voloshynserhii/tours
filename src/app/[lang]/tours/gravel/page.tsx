import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection } from '@/components';
import Link from 'next/link';

export default async function Gravel({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <ParallaxSection useFade={false} objectFit='contain' height='h-[80%]' imageUrl='/images/optimized/gravel-hero-black.png' >
        <div className="text-center text-white uppercase min-h-[65vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Gravel</h1>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/gravel.png' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[70vh] flex flex-col gap-20 px-10 py-10">
          <h2 className="w-full uppercase text-5xl md:text-9xl text-yellow-300 text-center">Coming soon</h2>

          <div className='flex justify-center min-w-[70vw] cursor-pointer mt-40'>
            <Link href={`/${lang}/tours/road`} className='border-2 border-black text-black hover:text-yellow-300 hover:border-yellow-300 bg-yellow-300 hover:bg-transparent rounded-xl px-16 py-4 md:max-w-xs'>
              <h3 className='uppercase text-3xl md:text-4xl mx-auto text-center'>Road</h3>
              <h3 className='uppercase text-3xl md:text-4xl mx-auto text-center'>Tours</h3>
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
