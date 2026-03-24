import { notFound } from 'next/navigation';
import { getRoomBySlug, getAllRoomSlugs, rooms } from '@/content/rooms';
import type { Metadata } from 'next';
import { Slider } from '@/components';
import { Locale, getDictionary } from '@/get-dictionary';
import en from '@/dictionaries/en.json';

interface RoomPageProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getAllRoomSlugs();
  return slugs.flatMap((room) => [
    { locale: 'en', ...room },
    { locale: 'es', ...room },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RoomPageProps['params']>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {};
  }

  const dict = (await getDictionary(lang)) as typeof en;
  const roomText = dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data];

  return {
    title: roomText?.name || room.slug,
    description: roomText?.shortDescription || undefined,
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<RoomPageProps['params']>;
}) {
  const { slug, lang } = await params;
  const dict = (await getDictionary(lang)) as typeof en;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  // pull localized text for this slug from dictionary
  const roomText = dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data];

  const slides = rooms
    .filter((r) => r.slug !== slug && r.images && r.images.length > 0)
    .map((room) => ({
      image: room.images[0],
      title: dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data]?.name,
      subtitle: dict.Rooms.data[room.slug as keyof typeof dict.Rooms.data]?.shortDescription,
      link: `/${lang}/rooms/${room.slug}`,
    }));

  return (
    <>




      <Slider slides={room.images} />

      <div className='py-8 lg:py-section container mx-auto px-gutter flex flex-col lg:flex-row items-center gap-12'>
        <h3 className='w-full text-center lg:w-1/4 text-2xl font-serif text-stone-900'>
          {dict.roomPage.amenities}
        </h3>


      </div>

      <div className='py-8 lg:py-section container mx-auto px-gutter flex flex-col lg:flex-row items-center gap-12'>
        <h3 className='w-full text-center lg:w-1/4 text-2xl font-serif text-stone-900'>
          {dict.roomPage.hotelServices}
        </h3>


      </div>

      {/* Related Rooms */}
      <section className="bg-cream-50 py-section">
        <div className="container mx-auto px-gutter">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-stone-900">
            {dict.Rooms.otherRoomTypes}
          </h2>

          <Slider slides={slides} className="h-[350px] lg:h-[80vh]" />
        </div>
      </section>
    </>
  );
}
