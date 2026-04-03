import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, TourTabs } from '@/components';
import { tours } from '@/content/tours';
import Link from 'next/link';

export default async function Tour({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Contact;

  const tour = tours.find(tour => tour.slug === slug);

  if (!tour) {
    return <div className='min-h-[70vh] bg-black/40 flex flex-col items-center justify-center gap-6 text-white text-center text-3xl font-bold'>
      <h1>ERROR!</h1>
      <h2>Page not found!</h2>
    </div>;
  }

  return (
    <div>
      <ParallaxSection imageUrl={tour.images?.[0] || ''} height='h-[80%]'>
        <div className="text-center text-white uppercase min-h-[70vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">{tour.title}</h1>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl={tour.images?.[1] || ''} height='h-[80%]'>
        <div className="min-h-[70vh] flex flex-col gap-8 px-10">
          <h2 className="w-full uppercase text-5xl md:text-8xl text-yellow-300 md:pl-[30%] text-center md:text-end">{tour.section1title}</h2>

          <div className='bg-black/40 p-4 md:max-w-xs rounded-xl'>
            <div className='flex flex-col gap-4'>
              {tour.information?.map(info => (
                <div key={Object.keys(info)[0]} className='flex flex-col justify-between text-white text-lg font-light'>
                  <h3 className='uppercase text-yellow-300 text-xl'>{Object.keys(info)[0]}:</h3>
                  <p>{Object.values(info)[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl={tour.images?.[2] || ''} height='h-[80%]'>
        <div className="min-h-[70vh] flex flex-col gap-8 px-10">
          <h2 className="w-full uppercase text-5xl md:text-8xl text-yellow-300 md:pr-[30%] text-center md:text-start">{tour.section2title}</h2>

          <div className='w-full flex flex-row justify-end'>
            <div className='bg-black/40 p-4 md:max-w-xs rounded-xl'>
              <h3 className='uppercase text-yellow-300 text-xl mb-4'>Experiences:</h3>
              <p className='text-white text-lg font-light'>{tour.experiences}</p>
            </div>
          </div>

        </div>
      </ParallaxSection>

      {tour.days?.length && <TourTabs days={tour.days as unknown as Record<string, string>[]} />}

      <ParallaxSection useFade={false} imageUrl={tour.images?.[3] || ''} height='h-[80%]'>
        <div className="min-h-[70vh] flex flex-col gap-20 px-10 py-10">
          <div className="absolute inset-0 bg-white/40 z-[-1]" />
          <h2 className="w-full uppercase text-5xl md:text-9xl text-white text-center">Ready to ride?</h2>

          <div className='flex flex-row justify-between min-w-[70vw] cursor-pointer'>
            <Link href={'/contact'} className='border-4 border-black rounded-xl p-4 md:max-w-xs'>
              <h3 className='uppercase text-8xl text-black mx-auto text-center'>Book here</h3>
            </Link>

            <div className='w-full flex flex-row justify-end'>
              <div className='bg-black/40 p-4 md:max-w-xs rounded-xl'>
                <h3 className='uppercase text-yellow-300 text-2xl mb-4'>Prices & Packages:</h3>
                {tour.prices?.map(info => (
                  <div key={Object.keys(info)[0]} className='flex flex-row gap-4 justify-between text-white text-lg font-light'>
                    <p className='text-xl'>{Object.keys(info)[0]}</p>
                    <div className='text-xl border-l-2 border-white min-w-[70px] pl-1'>
                      <p className='text-xl'>{Object.values(info)[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
