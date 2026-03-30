import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection } from '@/components';
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

  return (
    <div>
      <ParallaxSection imageUrl={tour.image} height='h-[80%]'>
        <div className="text-center text-white uppercase min-h-[70vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">{tour.title}</h1>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}
