import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, ContentBlock } from '@/components';

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
      <ParallaxSection height='h-[80%]' imageUrl="https://images.unsplash.com/photo-1715223445441-0a1bae6c3616?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="text-center text-white uppercase min-h-[80vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Choose Your Experience</h1>
            <h3 className="text-lg mb-4 lg:border-b lg:border-white/30 inline-block pb-2 px-8">Whether you’re here to explore, train, or take on an event — every ride starts
              straight from the hotel front door.
            </h3>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/background.svg">
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
      </ParallaxSection>
    </div>
  );
}
