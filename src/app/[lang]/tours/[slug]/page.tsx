import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, TourTabs, TourContentBlock, ReadyToRide } from '@/components';
import { tours } from '@/content/tours';

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

  const {
    title,
    subtitle,
    section1Title = '',
    dates,
    location,
    averageDistance,
    flights,
    experienceTitle,
    experienceDescription,
    included = [],
    days = [],
    dayImages = [],
    notIncluded = [],
    prices = []
  } = tour;

  return (
    <div>
      <ParallaxSection useFade={false} objectFit='contain' height='h-[80%]' imageUrl='/images/optimized/road-7-black.jpg' >
        <div className="text-center text-white uppercase min-h-[65vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl inline-block px-8">{title}</h1>
            {subtitle && (
              <h2 className="text-2xl md:text-5xl text-yellow-300">{subtitle}</h2>
            )}
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/road-10.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[50vh] w-full mr-[5%] flex flex-row justify-end gap-20 px-10 py-10">
          {section1Title}
        </div>

        <div className="relative md:absolute bottom-4 md:bottom-20 left-0 right-0 md:right-auto mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-md md:w-auto bg-white px-6 py-3 flex flex-col gap-2 shadow-xl">
          <h2 className="absolute -top-6 right-[-25px] text-4xl font-black px-4 py-1 leading-none [-webkit-text-stroke:0.5px_white] font-display">
            DETAILS
          </h2>

          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase">Dates:</h3>
            <span className="text-base font-bold text-gray-800 tracking-tight">{dates}</span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase">Location:</h3>
            <div className="flex flex-col leading-tight">
              {typeof location === 'string' ? (
                <span className="text-base font-bold text-gray-800 tracking-tight">{location}</span>
              ) : (
                location
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase">Average Daily Distance:</h3>
            <span className="text-base font-bold text-gray-800 tracking-tight">{averageDistance}</span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-black uppercase">Flights:</h3>
            <span className="text-base font-bold text-gray-800 tracking-tight">{flights}</span>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/road-hero.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[60vh] w-full ml-[5%] flex flex-row justify-start gap-20 px-10 py-10">
          {experienceTitle}
        </div>

        <div className="relative md:absolute bottom-4 md:bottom-20 left-0 md:left-auto right-0 mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-md md:w-auto bg-white px-6 py-8 flex flex-col gap-2 shadow-xl">
          <h2 className="absolute -top-6 left-[-25px] uppercase text-4xl font-black px-4 py-1 leading-none [-webkit-text-stroke:0.5px_white] font-display">
            Experience
          </h2>

          {experienceDescription}
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl='/images/optimized/tours-hero.jpg' height='h-[80%]' objectFit='contain'>
        <div className="min-h-[60vh] w-full">
<div className="relative md:absolute bottom-4 md:bottom-0 left-0 right-0 md:right-auto mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-md md:w-[30%] bg-white px-6 py-8">
            <h2 className="absolute -top-6 right-[-25px] text-4xl uppercase font-black px-4 py-1 leading-none [-webkit-text-stroke:0.5px_white] font-display">
              What's included
            </h2>

            <ul className="list-disc list-inside flex flex-col gap-1">
              {included.map((item, index) => (
                <li key={index} className="text-base font-bold tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ParallaxSection>

      {days?.length ? <TourTabs days={days as unknown as Record<string, string>[]} dayImages={dayImages as unknown as Record<string, string>[]} /> : null}

      {notIncluded?.length ? (
        <ParallaxSection useFade={false} imageUrl='/images/optimized/road-8.jpg' height='h-[80%]' objectFit='contain'>
          <div className='min-h-[60vh]'>
            <div className="relative md:absolute top-4 md:top-20 left-0 md:left-auto right-0 mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-md md:w-[25%] bg-white px-6 py-8 flex flex-col gap-2">
              <h2 className="absolute -top-6 left-[-25px] uppercase text-4xl font-black px-4 py-1 leading-none [-webkit-text-stroke:0.5px_white] font-display">
                What's not included
              </h2>

              <ul className="list-disc list-inside flex flex-col gap-1">
                {notIncluded.map((item, index) => (
                  <li key={index} className="text-base font-bold tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </ParallaxSection>
      ) : null}

      <TourContentBlock
        imageUrl="/images/optimized/hotel-1.jpg"
        imageScale='120%'
        orientation="left"
        subTitle='Pricing'
        subTitleStyle='text-3xl md:text-5xl text-center'
        description={<div className='flex flex-col gap-4 w-full pl-10 pt-6'>
          {prices.map((item, index) => (
            <div key={index} className='flex flex-col items-start w-full text-xl'>
              <h3 className='text-xl uppercase'>{item.label}</h3>
              <span className='text-lg'>{item.price}</span>
            </div>
          ))}
        </div>}
        events={[
          { text: 'Book here', link: `/${lang}/contact` },
        ]}
      />

      <ReadyToRide lang={lang} />
    </div>
  )
}
