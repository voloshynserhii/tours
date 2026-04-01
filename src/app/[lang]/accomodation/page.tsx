import Image from 'next/image';
import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, FinalCta } from '@/components';

export default async function Accomodation({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Contact;

  return (
    <div>
      <ParallaxSection imageUrl='/images/hotel/5.png' height='h-[80%]'>
        <div className="text-center text-white uppercase min-h-[70vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-3xl md:text-8xl text-yellow-300 border-b border-white border-b-2 mb-14 pb-8 mx-auto">Stay Where You Ride</h1>
            <h2 className="text-lg md:text-2xl mb-4 pb-2 px-[20%]">Comfortable, rider-focused accommodation set at the foot of the Maestrat
              mountains. This is Rural Castellón.
            </h2>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/background.svg">
        <div className="text-center py-10 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold uppercase">Welcome to</h2>
          <Image src="/images/hotel/logo-hotel-black.svg" alt="Clean bedroom" className="object-cover w-[90%] md:h-[40vh] md:w-[400px] mx-auto" width={400} height={300}/>
          <h2 className="text-xl md:text-4xl font-bold uppercase px-8 md:px-[20%]">More than just a place to sleep. This is a base designed around great riding and proper recovery.</h2>
        </div>
      </ParallaxSection>

      <div className="grid md:grid-cols-2 items-center bg-gray-50">
        <div className="h-full">
          <Image src="/images/rooms/ROOM_1_1.jpg" alt="Clean bedroom" className="object-cover md:h-[500px] w-full" width={200} height={300}/>
        </div>
        <div className="p-8 md:p-16 flex flex-col items-end gap-8">
          <h3 className="text-4xl md:text-7xl text-yellow-300 border-b-2 border-black pb-2">Private Rooms</h3>
          <p className='md:w-[80%] md:text-end text-lg font-bold'>Comfortable, quiet, and designed for recovery. Our 4 star rooms provide everything you need to rest properly after a day in the mountains.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center bg-gray-50">
        <div className="p-8 md:p-16 flex flex-col items-start gap-8">
          <h3 className="md:w-[80%] text-4xl md:text-7xl text-yellow-300 border-b-2 border-black pb-2">Simple, Quality Food</h3>
          <p className='md:w-[80%] text-lg font-bold'>Good food, done properly. Our Chef has designed a menu to support your riding while keeping things relaxed and enjoyable.</p>
        </div>
        <div className="h-full order-1 md:order-2">
          <Image src="/images/dine.png" alt="Food and dining" className="object-cover md:h-[500px] w-full" width={200} height={300} />
        </div>
      </div>

      <ParallaxSection useFade={false} imageUrl="/images/background.png">
        <div className="py-20 text-center">
          <h3 className="text-4xl md:text-7xl text-yellow-300 mb-8">Built for Cyclists</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-lg">Secure bike storage</h4>
            </div>
            <div>
              <h4 className="font-bold text-lg">Cleaning area</h4>
            </div>
            <div>
              <h4 className="font-bold text-lg">Basic tools & maintenance space</h4>
            </div>
            <div>
              <h4 className="font-bold text-lg">Route access directly from the hotel front door</h4>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-16 flex flex-col items-start gap-8">
          <h3 className="text-4xl md:text-7xl mb-4">Space to Switch Off</h3>
          <p className='md:w-[70%] text-lg font-bold'>After your ride, relax by the pool or unwind in the gardens. A calm, quiet setting designed to help you recover and recharge.</p>
        </div>
        <div className="h-full">
          <Image src="/images/pool.png" alt="Pool area" className="object-cover h-full w-full" width={200} height={300} />
        </div>
      </div>

      <div className="relative">
        <Image src="/images/hero1.jpg" alt="Rider returning home" className="w-full md:h-[80vh] object-cover" width={500} height={300} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h3 className="text-4xl md:text-6xl text-yellow-300 mb-12">Everything in One Place</h3>
          <p className="md:w-[50%] text-lg px-8">Ride straight from the door, return to comfort, and enjoy a setting built entirely around the cycling experience. No transfers. No stress. Just a better way to spend your time on and oﬀ the bike.</p>
        </div>
      </div>

      <ParallaxSection useFade={false} imageUrl="/images/background.png">
        <FinalCta title="Plan Your Stay!" subtitle="Get in touch to check availability and start planning your trip." />
      </ParallaxSection>
    </div>
  )
}
