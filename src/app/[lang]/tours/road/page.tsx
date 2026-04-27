import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, Slider, TourContentBlock, ReadyToRide } from '@/components';
import { slides } from '@/content/slides';

export default async function Road({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <ParallaxSection useFade={false} objectFit='contain' height='h-[80%]' imageUrl='/images/optimized/road-hero-black.jpg' >
        <div className="text-center text-white uppercase min-h-[65vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Road</h1>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/road-10.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[70vh] w-full mr-[5%] flex flex-row justify-end gap-20 px-10 py-10">
          <h2 className="w-full md:w-[50%] xl:w-[30%] uppercase text-3xl md:text-7xl text-yellow-300 text-end">Choose your experience</h2>
        </div>
        <div className='relative md:absolute bottom-4 md:bottom-0 left-0 right-0 md:right-auto mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-lg bg-white p-8 flex flex-col gap-6'>
          <p className='text-lg font-bold'>Whether you are here to explore, train or take on an event - each and every tour is built around riding straight from your door.</p>
          <p className='text-lg font-bold'>All of our experiences are designed around one simple idea. More time riding, less time getting there.</p>
        </div>
      </ParallaxSection>

      <TourContentBlock
        imageUrl="/images/optimized/custom.jpg"
        orientation="right"
        title="Guided Tours"
        subTitle='SIMPLE, NO NONSENSE RIDING'
        description="From independent self-guided trips to fully supported experiences; everything is built around riding straigt from your doorstep."
        events={[
          { text: 'SELF GUIDED', link: '/tours/self-guided' },
          { text: 'SHORT GUIDED', link: '/tours/short-guided' },
          { text: 'LONG GUIDED', link: '/tours/long-guided' }
        ]}
      />

      <TourContentBlock
        imageUrl="/images/optimized/road-hero.jpg"
        orientation="left"
        title="Training camps"
        subTitle='Structured weeks designed for riders looking to improve '
        description="Consistent climbs, quiet roads, and the perfect environment to focus on perfomance and progression."
        events={[
          { text: 'Training', link: '#' },
        ]}
      />

      <TourContentBlock
        imageUrl="/images/optimized/event-2.png"
        orientation="right"
        title="Events"
        subTitle='Epic local events, right on your doorstep'
        description={<div className='flex flex-col gap-6'>
          <p>Take part in carefully selected cycling events with full support and local expertise.</p>
          <p>Experience iconic rides without the usual stress and logistics.</p>
          <p>La Vuelta, Mediterranean Epic, Millars UCI Gran Fondo and more!</p>
        </div>}
        events={[
          { text: 'Events', link: '/tours' },
        ]}
      />

      <TourContentBlock
        imageUrl="/images/optimized/custom-1.jpg"
        orientation="left"
        title="Custom Trips"
        subTitle='Looking for something specific?'
        description="We create fully tailored cycling experience for groups, teams or private bookings built around your goals, schedule and riding style."
        events={[
          { text: 'Build a trip', link: '#' },
        ]}
      />

      <Slider slides={slides} backgroundImage="/images/background.svg" />

      <ReadyToRide lang={lang} />
    </div>
  )
}
