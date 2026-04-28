import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, Slider, TourContentBlock, ReadyToRide } from '@/components';
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
      <ParallaxSection useFade={false} imageUrl="/images/optimized/custom.jpg" objectFit='contain' height='h-[80vh]'>
        <div className='h-[70vh]' />
      </ParallaxSection>

      <div className='py-8 flex flex-col items-center'>
        <h1 className='text-[200px] uppercase font-[900] leading-[1]'>Welcome</h1>
        <h2 className='text-5xl uppercase font-[400]'>To <span className='font-[600]'>the</span> undiscovered world of cycling</h2>
      </div>

      <TourContentBlock
        imageUrl="/images/optimized/road-epic.jpeg"
        orientation="left"
        title={<div className='flex flex-col items-end text-right mr-10'>
          <h2 className="text-3xl md:text-[150px] font-[900] uppercase text-yellow-300 leading-[1]">Epic</h2>
          <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1]">Routes</h3>
          <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1]">from</h3>
          <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1]">the</h3>
          <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1]">first</h3>
          <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1]">kilometre</h3>
        </div>}
        subTitleStyle='text-3xl md:text-6xl text-start'
        description={<div className='flex flex-col gap-6 p-8 items-center text-center'>
          <p>Ride one of Spain’s last truely undiscovered cycling regions</p>
          <p>Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to some of the best routes Spain has to offer.</p>
          <p>Ride without the crowds or logistics of traditional cycling destinations.</p>
          <p>The focus is simple — epic riding from your door with no traffic, no transfers and no boring connecting routes.</p>
        </div>}
        descriptionStyle='text-start'
      />

{/*       <ParallaxSection useFade={false} imageUrl="/images/optimized/epic.jpg" objectFit='contain'>
        <div className='flex flex-row justify-end h-full w-full pr-[5%] py-[10%]'>
          <div className='flex flex-col items-end text-right'>
            <h2 className="text-3xl md:text-[150px] font-[900] uppercase text-yellow-300 leading-[1]">Epic</h2>
            <h3 className="text-3xl md:text-[80px] font-[600] uppercase text-white leading-[1] w-[50%]">Routes from the first kilometre</h3>
          </div>
        </div>

        <div className='relative md:absolute bottom-4 md:bottom-[50%] left-0 right-0 md:right-auto mx-auto md:mx-0 w-[calc(100%-2rem)] max-w-lg bg-white p-8 flex flex-col gap-6'>
          <p className='text-lg font-bold'>Discover one of Spain’s last truly undiscovered cycling regions</p>
          <p className='text-lg font-bold'>Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads.</p>
          <p className='text-lg font-bold'>Ride without the crowds or logistics of traditional cycling destinations.</p>
        </div>
      </ParallaxSection> */}

{/*       <div className="relative z-10 w-full h-0 flex justify-center items-center pointer-events-none">
        <div className="absolute left-[5%] text-start text-black font-bold text-5xl md:text-[60px] uppercase leading-none [-webkit-text-stroke:1px_white] font-display">
          <p>No traffic.</p>
          <p>No transfers.</p>
        </div>
      </div> */}

      <TourContentBlock
        imageUrl="/images/optimized/start.jpg"
        orientation="right"
        title={<div className='flex flex-col flex flex-col justify-end h-full'>
          <h2 className="text-start uppercase text-84xl md:text-[120px] text-yellow-300 font-[900]">Location</h2>
          <h2 className='text-start md:text-6xl text-white font-[900]'>is the key</h2>
        </div>}
        subTitle={<div className="flex flex-col gap-[20px]">
          <Image src="/images/logo-hotel.jpeg" alt="Hotel Logo" width={300} height={150} className="w-full h-auto object-contain" />
        </div>}
        description={<div className='flex flex-col gap-6'>
          <p>Our location is key. Where most cycling trips begin with a transfer, busy traﬃc, or boring routes to the “good bit”</p>
          <p>More we focus on qualitiy and less on crowds.</p>
          <p>Step outside the hotel and ride straight into the mountains.</p>
        </div>}
        events={[
          { text: 'View Hotel', link: '#' },
        ]}
      />

      <ParallaxSection useFade={false} imageUrl="/images/optimized/road-epic2.jpeg" objectFit='contain' height='h-[60vh]'>
        <div className='flex flex-row justify-center w-full'>
          <div className='w-full flex flex-col items-center justify-center text-center'>
            <h2 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] font-[900]">No <span className='text-white'>Traffic.</span> No <span className='text-white'>pelotons.</span></h2>
            <h3 className="text-3xl md:text-[170px] uppercase text-white leading-[1] font-[900]">Just Riding</h3>
          </div>
        </div>
      </ParallaxSection>

      <TourContentBlock
        imageUrl="/images/optimized/ride-more.jpg"
        orientation="left"
        subTitle={
          <div className='flex flex-col items-center text-center'>
            <h2 className="text-3xl md:text-6xl font-[900] uppercase text-black leading-[1]">Why?</h2>
            <Image src="/images/logo1.svg" alt="Why Icon" width={200} height={200} className="w-[50%] h-[200px] mt-[-5%]" />
          </div>
        }
        subTitleStyle='text-3xl md:text-6xl text-start'
        description={<div className='flex flex-col gap-6 text-center mt-[-10%]'>
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
        subTitle='About Us'
        subTitleStyle='text-4xl md:text-6xl text-center font-[800]'
        description={<div className='flex flex-col gap-6'>
          <p>Castellón Cycling Co. is built by riders, for riders.</p>
          <p>Combining years of experience in hosting and outdoor experiences, we’ve created a cycling destination that balances performance with comfort.</p>
          <p>Our mission was to create a one-stop Spanish cycling experience that can combine tours, events and training with a 4 star rural hotel experience, with on-site restaurant dining, bike storage and maintenance facilities all in one place.</p>
        </div>}
      />

      <ReadyToRide lang={lang} />
    </div>
  );
}