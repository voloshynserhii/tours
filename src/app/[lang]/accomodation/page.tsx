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
      <ParallaxSection imageUrl='/images/hotel/6.png' height='h-[80%]'>
        <div className="text-center text-white uppercase min-h-[70vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Stay Where You Ride</h1>
            <h3 className="text-lg mb-4 lg:border-b lg:border-white/30 inline-block pb-2 px-8">Comfortable, rider-focused accommodation set at the foot of the Maestrat
              mountains. This is Rural Castellón.
            </h3>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/background.png">
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Welcome, to The Pines Hotel</h2>
          <p className="text-lg">More than just a place to sleep. This is a base designed around great riding and proper recovery.</p>
        </div>
      </ParallaxSection>

      <div className="grid md:grid-cols-2 items-center">
        <div className="h-full">
          <img src="/images/rooms/ROOM_1_1.jpg" alt="Clean bedroom" className="object-cover h-full w-full" />
        </div>
        <div className="p-8 md:p-16">
          <h3 className="text-3xl font-bold mb-4">Private Rooms</h3>
          <p>Comfortable, quiet, and designed for recovery. Our 4 star rooms provide everything you need to rest properly after a day in the mountains.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center bg-gray-50">
        <div className="p-8 md:p-16 order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-4">Simple, Quality Food</h3>
          <p>Good food, done properly. Our Chef has designed a menu to support your riding while keeping things relaxed and enjoyable.</p>
        </div>
        <div className="h-full order-1 md:order-2">
          <img src="/images/dine.png" alt="Food and dining" className="object-cover h-full w-full" />
        </div>
      </div>

      <ParallaxSection useFade={false} imageUrl="/images/background.png">
        <div className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Built for Cyclists</h3>
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
        <div className="p-8 md:p-16 order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-4">Space to Switch Off</h3>
          <p>After your ride, relax by the pool or unwind in the gardens. A calm, quiet setting designed to help you recover and recharge.</p>
        </div>
        <div className="h-full order-1 md:order-2">
          <img src="/images/pool.png" alt="Pool area" className="object-cover h-full w-full" />
        </div>
      </div>

      <div className="relative">
        <img src="/images/hero1.jpg" alt="Rider returning home" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h3 className="text-4xl font-bold mb-4">Everything in One Place</h3>
          <p className="max-w-2xl">Ride straight from the door, return to comfort, and enjoy a setting built entirely around the cycling experience. No transfers. No stress. Just a better way to spend your time on and oﬀ the bike.</p>
        </div>
      </div>

      <ParallaxSection useFade={false} imageUrl="/images/background.png">
        <FinalCta title="Plan Your Stay!" subtitle="Get in touch to check availability and start planning your trip." />
      </ParallaxSection>
    </div>
  )
}
