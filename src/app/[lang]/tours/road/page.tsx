import { getDictionary, Locale } from '@/get-dictionary';
import { ParallaxSection, Slider } from '@/components';
import Link from 'next/link';
import { experiences } from '@/content/experiences';

export default async function Road({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const experienceSlides = experiences.map((experience) => {
    const experienceData = dict.Experiences.experiences.find((e: any) => e.id === experience.id);

    return {
      image: experience.image,
      mobileImage: experience.mobileImage,
      title: experienceData?.name,
      subtitle: experienceData?.description,
    };
  });

  return (
    <div>
      <ParallaxSection useFade={false} objectFit='contain' height='h-[80%]' imageUrl='/images/optimized/road-hero-black.jpg' >
        <div className="text-center text-white uppercase min-h-[65vh] flex flex-col justify-center items-center">
          <div className='flex flex-col'>
            <h1 className="text-5xl md:text-8xl mb-14 inline-block pb-2 px-8">Road</h1>
          </div>
        </div>
      </ParallaxSection>

      <Slider slides={experienceSlides} backgroundImage="/images/background.svg" />

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
  )
}
