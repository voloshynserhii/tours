import { getDictionary, Locale } from '@/get-dictionary';
import { AboutUs, FinalCta, ParallaxSection, Slider, ContentBlock } from '@/components';
import { experiences } from '@/content/experiences';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  const experienceSlides = experiences.map((experience) => {
    const experienceData = dict.Experiences.experiences.find((e: any) => e.id === experience.id);

    return {
      image: experience.image,
      mobileImage: experience.mobileImage,
      title: experienceData?.name,
      subtitle: experienceData?.description,
    };
  });

  return (
    <div>
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <div className="text-center text-white font-light tracking-widest uppercase">
          <h1 className="text-sm mb-4 border-b border-white/30 inline-block pb-2">Castellon Cycling Co</h1>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Just Ride. Epic routes from the first kilometre'
          events={[
            { text: 'Quiet roads. No traﬃc. No transfers.' },
            { text: 'Discover one of Spain’s last truly undiscovered cycling regions - right from your doorstep.' },
            { text: 'Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads. Ride without the crowds or logistics of traditional cycling destinations.' }
          ]}
          buttonText='View Tours'
          link='/tours'
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <ContentBlock
          orientation='right'
          title='Start Where The Real Route Begins'
          events={[
            { text: 'Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit” - here we focus on qualitiy and less on crowds.' },
            { text: 'Step outside the hotel and ride straight into the mountains.'},
            { text: 'No vans, no busy approach roads, no wasted time.' },
          ]}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='No traﬃc. No pelotons. Just riding.'
          events={[
            { text: 'While other cycling destinations are becoming increasingly busy, Castellón remains largely untouched.' },
            { text: 'Expect the same immaculate Spanish tarmac, epic climbs, and incredible views.' },
            { text: 'But often with the road entirely to yourself. Uninterrupted riding from the very first kilometre.' },
          ]}
        />
      </ParallaxSection>

      <Slider slides={experienceSlides} />

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Ride More. Waste Less.'
          events={[
            { text: 'Every detail is designed to maximise your time on the bike.' },
            { text: 'More riding, fewer interruptions, and a setting that lets you fully switch oﬀ when the day is done.' },
            { text: 'This is cycling, stripped back to what matters.' }
          ]}
        /*           features={{
                    title: '',
                    features: [
                      'More riding, fewer interruptions, and a setting that lets you fully switch oﬀ when the day is done.',
                      'This is cycling, stripped back to what matters.'
                    ],
                  }} */
        />
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="https://media.istockphoto.com/id/1430878163/es/vector/textura-negra-angustiada.jpg?s=2048x2048&w=is&k=20&c=Dn2p0Tee2L2B8QXFW8kfviC0mjFIhJEzYy9sTA5tAlE=">
        <div>
          <AboutUs />

          <FinalCta />
        </div>

      </ParallaxSection>
    </div>
  );
}