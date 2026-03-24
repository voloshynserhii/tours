import { getDictionary } from '@/get-dictionary';
import { ParallaxSection } from '@/components';
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
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070">
        <div className="text-center text-white font-light tracking-widest uppercase">
          <h2 className="text-sm mb-4 border-b border-white/30 inline-block pb-2">Gran Fondo</h2>
          <nav className="flex flex-col gap-2">
            <a href="#" className="hover:text-gray-300 transition-colors">Strade Bianche // March 2026</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Tour of Flanders // April 2026</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Paris - Roubaix // April 2026</a>
          </nav>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2070">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Training Camp</h2>
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all uppercase text-sm">
            Explore Camps
          </button>
        </div>
      </ParallaxSection>

      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1534151040377-628d63c59123?q=80&w=2070">
        <div className="max-w-md mx-auto p-8 bg-black/40 backdrop-blur-sm text-white border border-white/20">
          <h2 className="text-xl mb-4">The Trip</h2>
          <p className="text-sm leading-relaxed opacity-80">
            Discover the most beautiful mountain passes with our professional support team.
          </p>
        </div>
      </ParallaxSection>

      <section className="py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-6 underline decoration-1 underline-offset-8 uppercase">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Apex Cycling offers ultimate cycling training camps and endurance events...
          </p>
        </div>
        <div className="h-96 bg-gray-200">
          {/* Місце для фото без паралакса або додаткового контенту */}
          <img src="https://images.unsplash.com/photo-1541625602330-2277a4c4b28d?q=80&w=2070" className="w-full h-full object-cover" alt="Rider" />
        </div>
      </section>
    </div>
  );
}