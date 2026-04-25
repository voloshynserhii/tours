import Image from 'next/image';
import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, TourContentBlock, ReadyToRide } from '@/components';

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
      <ParallaxSection useFade={false} imageUrl='/images/hotel/5.png' height='h-[80%]' objectFit='contain'>
        <div className="text-center text-white uppercase min-h-[80vh] flex flex-col justify-center">
          <div className='flex flex-col px-5 md:px-0 translate-y-[20%]'>
            <h1 className="text-[60px] md:text-[120px] lg:text-[180px] text-white/90 translate-y-1/4 md:tracking-wider">Welcome to</h1>
            <div className="w-[700px] h-[250px] overflow-hidden mx-auto">
              <Image src="/pineslogo.png" alt="The Pines Hotel" className="w-full" width={200} height={100} />
            </div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/optimized/start.jpg" objectFit='contain'>
        <div className='flex flex-row justify-end h-full w-full pr-[5%] py-[10%]'>
          <div className='w-[50%] flex flex-col items-end text-right'>
            <h2 className="text-3xl md:text-[150px] uppercase text-yellow-300 leading-[1]">Stay</h2>
            <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">Where</h3>
            <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">you</h3>
            <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">ride</h3>
          </div>
        </div>

        <div className='absolute bottom-[30%] left-0 translate-y-1/2 p-8 bg-white max-w-lg flex flex-col gap-6'>
          <p className='text-lg font-bold'>Comfortable, rider-focused accommodation set at the foot of the Maestrat
            mountains.</p>
          <p className='text-lg font-bold'>More than just a place to sleep. This is a base designed around great riding and proper recovery.</p>
          <p className='text-lg font-bold'>This is Rural Castellón.</p>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/hotel/3.png" objectFit='contain'>
        <div className='h-[70vh] relative w-full'>
          <div className='absolute bottom-[50%] left-0 translate-y-1/2 p-8 bg-white max-w-lg flex flex-col gap-6'>
            <h3 className="text-3xl md:text-6xl uppercase leading-[1]">Private rooms</h3>
            <p className='text-lg font-bold'>Discover one of Spain’s last truly undiscovered cycling regions</p>
            <p className='text-lg font-bold'>Located at the foot of the Maestrat mountains, Castellón Cycling Co. gives you direct access to smooth Spanish tarmac, epic climbs, and quiet roads.</p>
            <p className='text-lg font-bold'>Ride without the crowds or logistics of traditional cycling destinations.</p>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection useFade={false} imageUrl="/images/optimized/no-traffic.jpg" objectFit='contain' height='h-[80%]'>
        <div className='flex flex-row justify-center h-full w-full min-h-[70vh]'>
          <div className='w-full flex flex-col items-center justify-center text-center'>
            <h2 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1]">No Transfers. No Traffic.</h2>
            <h3 className="text-3xl md:text-[150px] uppercase text-yellow-300 leading-[1] w-[50%]">Just Riding</h3>
          </div>
        </div>
      </ParallaxSection>

      <TourContentBlock
        imageUrl="/images/optimized/food.jpeg"
        orientation="left"
        subTitle='LA RUTA'
        subTitleStyle='text-3xl md:text-6xl uppercase leading-[1] text-start'
        description={<div className='flex flex-col gap-6'>
          <p>Our Chefs have designed a menu to support your riding while keeping things relaxed and enjoyable.</p>
          <p>La Ruta Restaurante (The Route) is a rural cocina de parrilla (BBQ Kitchen).</p>
          <p>This traditional spanish BBQ provides some of the best local meats in Castellon, guaranteed to get your protein fix. Don't worry, we put on a special carb loading menu, exclusivity for our cycling groups.</p>
          <p>Good food, done properly.</p>
        </div>}
        descriptionStyle='text-start'
      />

      <TourContentBlock
        imageUrl="/images/pool.png"
        orientation="right"
        subTitle='And relax'
        subTitleStyle='text-3xl md:text-6xl uppercase leading-[1] text-start'
        description={<div className='flex flex-col gap-6'>
          <p>After a long day on the bike, our hotel offers the perfect setting to switch off and recover. Surrounded by nature, with peaceful mountain views and the quiet of the trees all around, it's a place where you can truly relax and reset.</p>
          <p>Unwind by the pool, enjoy a drink at the bar, or take advantage of our massage service to ease tired legs and aid recovery. Every detail is designed to help you slow down, recharge, and be ready for the next days riding.</p>
        </div>}
        descriptionStyle='text-start'
      />

      <ReadyToRide lang={lang} />
    </div>
  )
}
