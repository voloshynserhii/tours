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
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <div className="text-center text-white uppercase absolute left-[50%] top-[50%] -translate-x-[50%]">
          <h1 className="text-xl mb-4 border-b border-white/30 inline-block pb-2">Choose Your Experience</h1>
          <h3 className="text-sm mb-4 border-b border-white/30 inline-block pb-2">Whether you’re here to explore, train, or take on an event — every ride starts
            straight from the hotel front door.</h3>
        </div>
      </ParallaxSection>

      <div className="bg-white text-center py-[100px]">
        <p className="text-lg">
          Quiet mountain roads, smooth tarmac, and endless routes - more time riding, less
          time getting there.
        </p>
      </div>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
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
          features={{
            title: '',
            features: [
              'Structured weeks designed for riders looking to improve.',
              'Consistent climbs, quiet roads, and the perfect environment to focus on performance and progression.'
            ],
          }}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Events'
          events={[
            { text: 'Mediterranean Epic Gran Fondo', link: '/tours/mediterranean' },
            { text: 'La Vuelta Experiences', link: '/tours/la-vuelta' },
          ]}
          features={{
            title: '',
            features: [
              'Take part in carefully selected cycling events, with full support and local expertise.',
              'Experience iconic rides without the usual stress and logistics.'
            ],
          }}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Custom Tours'
          buttonText='More details'
          link='/contact'
        />
      </ParallaxSection>
    </div>
  );
}
