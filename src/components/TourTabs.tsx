'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';

interface TourTabsProps {
    days: { [day: string]: string }[];
}   

export const TourTabs = ({ days }: TourTabsProps): JSX.Element => {
    const [activeDay, setActiveDay] = useState(0);

    const currentDayKey = Object.keys(days[activeDay])[0];
    const currentDescription = days[activeDay][currentDayKey];

    return (
        <section className="relative flex flex-col md:flex-row w-full min-h-[500px] overflow-hidden">
            <div className="relative w-full md:w-2/3 bg-gray-200">
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
                    alt="Mountain route"
                    className="w-full h-full object-cover grayscale"
                    width={800}
                    height={600}
                />
                <div className="absolute bottom-10 left-10 text-white z-10 flex gap-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest opacity-80">Distance</p>
                        <p className="text-3xl font-bold">65.10 km</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest opacity-80">Elev Gain</p>
                        <p className="text-3xl font-bold">886 m</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="w-full md:w-1/3 p-4 md:p-8 flex flex-col items-center">
                <div className="absolute top-0 right-0 flex flex-col md:flex-row">
                    {days.map((_, index) => {
                        const dayNum = Object.keys(days[index])[0];
                        const isActive = activeDay === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveDay(index)}
                                className={`flex flex-row justify-between gap-6 items-center pl-2 md:pl-6 text-xs font-bold transition-all duration-200 w-full rounded-lg cursor-pointer border-1 border border-yellow-300 ${isActive
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black hover:bg-black hover:text-white hover:border-black'}
                                `}
                            >
                                <div className='md:text-2xl'>
                                    DAY
                                </div>
                                <div className='md:text-2xl rounded-lg bg-yellow-300 w-8 h-8 flex items-center justify-center text-black'>
                                    {dayNum}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8">
                    <h2 className="text-7xl md:text-8xl uppercase mb-6 tracking-tighter">
                        DAY {currentDayKey}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-md max-w-md">
                        {currentDescription}
                    </p>
                </div>
            </div>
        </section>
    );
};