import Image from 'next/image';
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
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" videoUrl="/videos/hero.mp4" height="h-[80%]">
        <div className="w-full text-white font-light uppercase min-h-[70vh] flex justify-start items-end px-5 md:px-20">
          <h1 className="text-5xl md:text-7xl mb-2 md:mb-10 leading-[50px] md:leading-[70px]">Castellón<br />Cycling<br />Co</h1>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1675213442157-f6feba921d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpZGUlMjBiaWN5Y2xlfGVufDB8MHwwfHx8MA%3D%3D">
        <ContentBlock
          orientation='left'
          title='Just Ride. Epic routes from the first kilometre'
          texts={['Quiet roads. No traﬃc. No transfers.', 'Discover one of Spain’s last truly undiscovered cycling regions - right from your doorstep.', 'Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads. Ride without the crowds or logistics of traditional cycling destinations.']}
          buttonText='View Tours'
          link='/tours'
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1675213131942-0735b90312bb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='right'
          title='Start Where The Real Route Begins'
          texts={['Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit” - here we focus on qualitiy and less on crowds.', 'Step outside the hotel and ride straight into the mountains.', 'No vans, no busy approach roads, no wasted time.']}
        />
      </ParallaxSection>

      <ParallaxSection imageUrl="https://plus.unsplash.com/premium_photo-1661344207352-557c11bfa802?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='left'
          title='No traﬃc. No pelotons. Just riding.'
          texts={['While other cycling destinations are becoming increasingly busy, Castellón remains largely untouched.', 'Expect the same immaculate Spanish tarmac, epic climbs, and incredible views.', 'But often with the road entirely to yourself. Uninterrupted riding from the very first kilometre.']}
        />
      </ParallaxSection>

      <Slider slides={experienceSlides} backgroundImage="/images/background.svg" />

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1715223445399-adc8a1032ac8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <ContentBlock
          orientation='left'
          title='Ride More. Waste Less.'
          texts={['Every detail is designed to maximise your time on the bike.', 'More riding, fewer interruptions, and a setting that lets you fully switch oﬀ when the day is done.', 'This is cycling, stripped back to what matters.']}
        />
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/background.svg">
        <div>
          <AboutUs />
          <FinalCta title="Ready to Ride?" subtitle="Start your journey today." />
        </div>
      </ParallaxSection>
    </div>
  );
}