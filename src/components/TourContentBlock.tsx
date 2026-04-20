import { BorderedButton } from '@/components';
import React from 'react';
import Image from 'next/image';

type Orientation = 'left' | 'right';

interface ContentBlockProps {
  imageUrl: string;
  orientation: Orientation;
  title: string;
  subTitle?: string;
  description?: string | React.ReactNode;
  events?: {
    text: string;
    link?: string;
  }[];
  buttonText?: string;
  link?: string;
}

export const TourContentBlock: React.FC<ContentBlockProps> = ({
  imageUrl,
  orientation,
  title,
  subTitle,
  description,
  events = [],
  buttonText,
  link,
}) => {
  const isRightOriented = orientation === 'right';

  return (
    <div className={`relative w-full mx-auto min-h-[600px] flex flex-col md:flex-row ${isRightOriented ? '' : 'md:flex-row-reverse'}`}>
      
      <div className="relative w-full md:w-[75%] min-h-[400px] md:min-h-[600px] flex-shrink-0">
        <Image 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          width={1000}
          height={800}
        />
        
        <div className={`absolute inset-y-0 flex  p-8 w-full pointer-events-none z-10 ${isRightOriented ? 'justify-start' : 'justify-end'}`}>
          <h2 className={`uppercase text-[190px] text-yellow-300 max-w-[50%] leading-[1] ${isRightOriented ? 'text-start' : 'text-end'}`}>
            {title}
          </h2>
        </div>
      </div>

      <div className="relative z-20 w-full md:w-[25%] bg-white text-black p-6 py-16 flex flex-col shadow-2xl min-h-full flex-shrink-0">
        <div className="flex flex-col gap-12 h-full">
          
          {subTitle && (
            <h3 className="text-2xl md:text-3xl uppercase leading-tight tracking-tight text-center">
              {subTitle}
            </h3>
          )}

          {/* Основний текст */}
          {description && (
            <div className="flex flex-col gap-4 text-sm md:text-base font-medium leading-relaxed text-center">
              <p className='text-lg font-bold'>{description}</p>
            </div>
          )}

          {/* Кнопки з бордером */}
          {events.length > 0 && (
            <div className="flex flex-col gap-3 mt-4">
              {events.map((event, index) => (
                <div key={index} className="w-full">
                  <BorderedButton
                    text={event.text}
                    link={event.link}
                    showArrow={!!event.link}
                    isBlack={true}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Головна кнопка */}
          {buttonText && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <BorderedButton 
                text={buttonText} 
                link={link} 
                showArrow 
                isBlack={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
