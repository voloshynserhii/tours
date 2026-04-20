import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, Slider, TourContentBlock } from '@/components';
import Link from 'next/link';

export default async function Road({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const slides = [
    {
      image: '/images/optimized/tour-2.jpg',
      title: 'Guided Tour',
      subtitle: "Our fully guided tour of Castellón's best tarmac, climbs and stunning scenery. Ride Spain without the stress of planning routes and logistics. Our guides have the week planned out and ready to roll.",
    },
    {
      image: '/images/optimized/training.jpg',
      title: 'Training',
      subtitle: "Dedicated training weeks, similar to our standard tour with a real focus on set-up, technique, nutrition, riding tactics and more. Expect detailed daily analysis from our ex tour de France pro cyclist coach.",
    },
    {
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
      title: 'Events',
      subtitle: "La Vuelta, UCI World Tours and more right here on your door step. Ride the same routes as the Pro cyclists in the lead up to the event. You can even compete, depending on the event type.",
    },
    {
      image: '/images/optimized/custom.jpg',
      title: 'Custom Tour',
      subtitle: "The perfect trip, created exclusively for you.  Fully tailored cycling experiences for groups, teams, or private bookings, built around your goals, schedule, and riding style.",
    },
  ];

  return (
    <div>
      <ParallaxSection useFade={false} objectFit='contain' height='h-[80%]' imageUrl='/images/optimized/road-hero-black.jpg' >
        <div className="text-center text-white uppercase min-h-[65vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Road</h1>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/IMG_1479.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[70vh] w-full max-w-7xl flex flex-row justify-end gap-20 px-10 py-10">
          <h2 className="w-[30%] uppercase text-3xl md:text-7xl text-yellow-300 text-end">Choose your experience</h2>
        </div>
        <div className='absolute bottom-0 left-0 p-8 bg-white max-w-lg flex flex-col gap-6'>
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
          { text: 'SELF GUIDED', link: '#' },
          { text: 'SHORT GUIDED', link: '#' },
          { text: 'LONG GUIDED', link: '#' }
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
        imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070"
        orientation="right"
        title="Events"
        subTitle='Epic local events, right on your doorstep'
        description={<div className='flex flex-col gap-6'>
          <p>Take part in carefully selected cycling events with full support and local expertise.</p>
          <p>Experience iconic rides without the usual stress and logistics.</p>
          <p>La Vuelta, Mediterranean Epic, Millars UCI Gran Fondo and more!</p>
        </div>}
        events={[
          { text: 'Events', link: '#' },
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

      <ParallaxSection useFade={false} imageUrl='/images/optimized/road-last.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[70vh] flex flex-col gap-20 px-10 py-10">
          <h2 className="w-full uppercase text-5xl md:text-9xl text-yellow-300 text-center">Ready to ride?</h2>

          <div className='flex justify-center min-w-[70vw] cursor-pointer mt-40'>
            <Link href={`/${lang}/contact`} className='border-2 border-yellow-300 rounded-xl px-16 py-4 md:max-w-xs'>
              <h3 className='uppercase text-3xl md:text-4xl text-yellow-300 mx-auto text-center'>Book</h3>
              <h3 className='uppercase text-3xl md:text-4xl text-yellow-300 mx-auto text-center'>here</h3>
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
