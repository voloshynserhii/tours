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
          <h2 className="text-sm mb-4 border-b border-white/30 inline-block pb-2">Castellon Cycling Co</h2>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Just Ride. Epic routes from the first kilometre'
          events={[
            'Quiet roads. No traﬃc. No transfers.',
            'Discover one of Spain’s last truly undiscovered cycling regions - right from your doorstep.',
          ]}
          buttonText='View Tours'
          link='/contact'
          features={{
            title: '',
            features: [
              'Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads. Ride without the crowds or logistics of traditional cycling destinations.',
            ],
          }}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <ContentBlock
          orientation='right'
          title='Start Where The Real Route Begins'
          events={[
            'Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit” - here we focus on qualitiy and less on crowds. Step outside the hotel and ride straight into the mountains.',
          ]}
          buttonText='Discover our tours'
          link='/tours'
          features={{
            title: "",
            features: [
              'Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit” - here we focus on qualitiy and less on crowds. Step outside the hotel and ride straight into the mountains. No vans, no busy approach roads, no wasted time.',
            ],
          }}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='No traﬃc. No pelotons. Just riding.'
          events={[
            'While other cycling destinations are becoming increasingly busy, Castellón remains largely untouched.',
            'Expect the same immaculate Spanish tarmac, epic climbs, and incredible views.',
            'But often with the road entirely to yourself. Uninterrupted riding from the very first kilometre.',
          ]}
          buttonText='Ask us to support you'
          link='/contact'
        />
      </ParallaxSection>
      <Slider slides={experienceSlides} />

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <ContentBlock
          orientation='left'
          title='Ride More. Waste Less.'
          events={[
            'Every detail is designed to maximise your time on the bike.',
          ]}
          buttonText='Ask us to support you'
          link='/contact'
          features={{
            title: '',
            features: [
              'More riding, fewer interruptions, and a setting that lets you fully switch oﬀ when the day is done.',
              'This is cycling, stripped back to what matters.'
            ],
          }}
        />
      </ParallaxSection>

      <AboutUs />
      <FinalCta />
    </div>
  );
}