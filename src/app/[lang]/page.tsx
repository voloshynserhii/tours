import Link from 'next/link';
import { getDictionary, Locale } from '@/get-dictionary';
import { AboutUs, FinalCta, ParallaxSection, Slider, ContentBlock, TourContentBlock } from '@/components';
import { experiences } from '@/content/experiences';
import { slides } from '@/content/slides';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const locale = lang;

  return (
    <div>
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" videoUrl="/videos/hero.mp4" height="h-[80%]">
        <div className="w-full text-white font-light uppercase min-h-[70vh] flex justify-center items-center">
          <h1 className="text-5xl md:text-[180px] mt-[5%]">Ride More</h1>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/optimized/epic.jpg" objectFit='contain'>
        <div className='flex flex-row justify-end h-full w-full pr-[5%]'>
          <div className='w-[50%] flex flex-col items-end text-right'>
            <h2 className="text-3xl md:text-[150px] uppercase text-yellow-300 leading-[1]">Epic</h2>
            <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">Routes from the first kilometre</h3>
          </div>
        </div>

        <div className='absolute bottom-[50%] left-0 translate-y-1/2 p-8 bg-white max-w-lg flex flex-col gap-6'>
          <p className='text-lg font-bold'>Discover one of Spain’s last truly undiscovered cycling regions</p>
          <p className='text-lg font-bold'>Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads.</p>
          <p className='text-lg font-bold'>Ride without the crowds or logistics of traditional cycling destinations.</p>
        </div>
      </ParallaxSection>

      <div className="relative z-10 w-full h-0 flex justify-center items-center pointer-events-none">
        <div className="absolute left-[5%] text-start text-black font-bold text-5xl md:text-[60px] uppercase leading-none [-webkit-text-stroke:1px_white] font-display">
          <p>No traffic.</p>
          <p>No transfers.</p>
        </div>
      </div>

      <TourContentBlock
        imageUrl="/images/optimized/start.jpg"
        orientation="right"
        title={<div className='flex flex-col flex flex-col justify-end h-full'>
          <h2 className="text-start uppercase text-3xl md:text-7xl text-yellow-300 w-[70%]">Start Where The Real Route</h2>
          <h2 className='text-start'>Begins</h2>
        </div>}
        subTitle='Our location is key'
        description={<div className='flex flex-col gap-6'>
          <p>Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit”</p>
          <p>More we focus on qualitiy and less on crowds.</p>
          <p>Step outside the hotel and ride straight into the mountains.</p>
        </div>} events={[
          { text: 'View Hotel', link: '#' },
        ]}
      />

      <ParallaxSection useFade={false} imageUrl="/images/optimized/no-traffic.jpg" objectFit='contain' height='h-[80%]'>
        <div className='flex flex-row justify-center h-full w-full min-h-[70vh]'>
          <div className='w-full flex flex-col items-center justify-center text-center'>
            <h2 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1]">No Traffic. No pelotons.</h2>
            <h3 className="text-3xl md:text-[150px] uppercase text-yellow-300 leading-[1] w-[50%]">Just Riding</h3>
          </div>
        </div>
      </ParallaxSection>

      <TourContentBlock
        imageUrl="/images/optimized/ride-more.jpg"
        orientation="left"
        title=''
        subTitle='Ride More. Waste Less.'
        subTitleStyle='text-3xl md:text-6xl text-start'
        description={<div className='flex flex-col gap-6'>
          <p>While other cycling destinations are becoming increasingly busy, Castellón remains largely untouched.</p>
          <p>Expect the same immaculate Spanish tarmac, epic climbs, and incredible views.</p>
          <p>But often with the road entirely to yourself. Uninterrupted riding from the very first kilometre.</p>
        </div>} 
        descriptionStyle='text-start'
      />

      <Slider slides={slides} backgroundImage="/images/background.svg" />

      <TourContentBlock
        imageUrl="/images/optimized/custom-1.jpg"
        orientation="right"
        title=''
        subTitle='About Us'
        subTitleStyle='text-4xl md:text-7xl text-center'
        description={<div className='flex flex-col gap-6'>
          <p>Castellón Cycling Co. is built by riders, for riders.</p>
          <p>Combining years of experience in hosting and outdoor experiences, we’ve created a cycling destination that balances performance with comfort.</p>
          <p>Our mission was to create a one-stop Spanish cycling experience that can combine tours, events and training with a 4 star rural hotel experience, with on-site restaurant dining, bike storage and maintenance facilities all in one place.</p>
        </div>} 
      />

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
  );
}