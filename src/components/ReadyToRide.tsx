import Link from 'next/link';
import { ParallaxSection } from './ParallaxSection';
import { Locale } from '@/get-dictionary';

interface ReadyToRideProps {
  lang: Locale;
}

export const ReadyToRide: React.FC<ReadyToRideProps> = ({ lang }) => {
  return (
    <ParallaxSection useFade={false} imageUrl='/images/optimized/road-last.jpg' height='h-[80%]' objectFit='contain'>
      <div className="min-h-[70vh] flex flex-col gap-20 px-10 py-10">
        <h2 className="w-full uppercase text-5xl md:text-9xl text-yellow-300 text-center">Ready to ride?</h2>

        <div className='flex justify-center min-w-[70vw] cursor-pointer mt-40'>
          <Link href={`/${lang}/contact`} className='group border-2 border-yellow-300 hover:border-white transition-colors duration-300 rounded-xl px-16 py-4 md:max-w-xs'>
            <h3 className='uppercase text-3xl md:text-4xl text-yellow-300 group-hover:text-white transition-colors duration-300 mx-auto text-center'>Book</h3>
            <h3 className='uppercase text-3xl md:text-4xl text-yellow-300 group-hover:text-white transition-colors duration-300 mx-auto text-center'>here</h3>
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};
