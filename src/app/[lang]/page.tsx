import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, Slider, ContentBlock } from '@/components';
import { rooms } from '@/content/rooms';
import { experiences } from '@/content/experiences';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  const sliderImages = [
    '/images/hotel/1.png',
    '/images/hotel/2.png',
    '/images/hotel/3.png',
    '/images/hotel/4.png',
    '/images/hotel/5.png',
    '/images/hotel/6.png',
  ];


  const slides = rooms
    .filter((room) => room.images && room.images.length > 0)
    .map((room) => {
      const roomText = dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data];
      return {
        image: room.images[0],
        title: roomText?.name,
        subtitle: roomText?.shortDescription,
        link: `/${locale}/rooms/${room.slug}`,
      };
    });

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
            { name: 'Quiet roads. No traﬃc. No transfers.' },
            { name: 'Discover one of Spain’s last truly undiscovered cycling regions - right from your doorstep.' },
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
            { name: 'Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit” - here we focus on qualitiy and less on crowds. Step outside the hotel and ride straight into the mountains.' },
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
            { name: 'While other cycling destinations are becoming increasingly busy, Castellón remains largely untouched.' },
            { name: 'Expect the same immaculate Spanish tarmac, epic climbs, and incredible views.' },
            { name: 'But often with the road entirely to yourself. Uninterrupted riding from the very first kilometre.' },
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
            { name: 'Every detail is designed to maximise your time on the bike.' },
          ]}
          buttonText='Ask us to support you'
          link='/contact'
          features={{
            title: 'Special features',
            features: [
              'More riding, fewer interruptions, and a setting that lets you fully switch oﬀ when the day is done.',
              'This is cycling, stripped back to what matters.'
            ],
          }}
        />
      </ParallaxSection>

      <section className=" max-w-7xl mx-auto py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white items-center">
        <div className="">
          <h2 className="text-2xl font-bold mb-6 underline decoration-1 underline-offset-8 uppercase">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Castellón Cycling Co. is built by riders, for riders.
            Combining years of experience in hosting and outdoor experiences, we’ve created
            a cycling destination that balances performance with comfort.
            Our mission was to create a one-stop Spanish cycling experience that can
            combine tours, events and training with a 4 star rural hotel experience, with on-site
            restaurant dining, bike storage and maintenance facilities all in one place.
            The focus is simple — epic riding from your door with no traﬃc, no transfers and
            no boring connecting routes. Just perfect Spanish tarmac, quiet undiscovered
            routes, incredible views and a well-run experience you’ll want to return to.
          </p>
        </div>
        <div className="h-96 bg-gray-200">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" className="w-full h-full object-cover" alt="Rider" />
        </div>
      </section>
    </div>
  );
}