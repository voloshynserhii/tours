import { getDictionary } from '@/get-dictionary';
import {
  Slider,
} from '@/components';
import { Locale } from '@/get-dictionary';
import { rooms } from '@/content/rooms';

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

  return (
    <div className='h-[500px]'>

    </div>
  );
}
