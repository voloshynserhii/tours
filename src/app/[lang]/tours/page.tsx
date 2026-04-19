import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, ContentBlock } from '@/components';
import Link from 'next/link';

export default async function Tours({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  return (
    <div>
      <ParallaxSection height='h-[80%]' useFade={false} imageUrl="/images/optimized/tours-hero-black.jpg" objectFit='contain'>
        <div className="text-center text-white uppercase min-h-[80vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Tours</h1>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/optimized/tours-1.jpg" objectFit='cover'>
        <div className="text-center uppercase min-h-[80vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h2 className="text-5xl text-yellow-300 md:text-8xl mb-14 inline-block pb-2 px-8">Choose your ride</h2>
          </div>
        </div>
      </ParallaxSection>

      <div className="flex flex-col md:flex-row w-full h-[70vh]">
        <Link href={`/${lang}/tours/road`} className="relative w-full md:w-1/2 h-1/2 md:h-full block group overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: 'url(/images/experiences/2.png)' }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-yellow-300 text-4xl md:text-8xl uppercase tracking-wider">Road</h3>
          </div>
        </Link>
        <Link href={`/${lang}/tours/gravel`} className="relative w-full md:w-1/2 h-1/2 md:h-full block group overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: `url('/images/optimized/gravel-hero.png')` }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-yellow-300 text-4xl md:text-8xl uppercase tracking-wider">Gravel</h3>
          </div>
        </Link>
      </div>

      {/* <ParallaxSection useFade={false} imageUrl="/images/background.svg">
        <div className="text-center py-[100px] px-10">
          <p className="text-2xl font-bold">
            Quiet mountain roads, smooth tarmac, and endless routes - more time riding, less
            time getting there.
          </p>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://plus.unsplash.com/premium_photo-1726761725215-cca50b7d6ec7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='left'
          title='Tours'
          events={[
            { text: 'Self-Guided', link: '/tours/self-guided' },
            { text: 'Guided', link: '/tours/guided' },
            { text: 'Full Support', link: '/tours/full-support' }
          ]}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <ContentBlock
          orientation='right'
          title='Training Camp'
          events={[
            { text: 'More details ', link: '/tours/training-camp' },
          ]}
          features={[
            'Structured weeks designed for riders looking to improve.',
            'Consistent climbs, quiet roads, and the perfect environment to focus on performance and progression.'
          ]}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1675213131698-b3cd0b797eeb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='left'
          title='Events'
          events={[
            { text: 'Mediterranean Epic Gran Fondo', link: '/tours/mediterranean' },
            { text: 'La Vuelta Experiences', link: '/tours/la-vuelta' },
          ]}
          features={[
            'Take part in carefully selected cycling events, with full support and local expertise.',
            'Experience iconic rides without the usual stress and logistics.'
          ]}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1675213131942-0735b90312bb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='right'
          title='Custom Tours'
          buttonText='More details'
          link='/contact'
        />
      </ParallaxSection> */}
    </div>
  );
}
