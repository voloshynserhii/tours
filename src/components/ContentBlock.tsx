import { BorderedButton, DynamicBorder, FeaturesList } from '@/components';

type Orientation = 'left' | 'right';

interface ContentBlockProps {
  orientation: Orientation;
  title: string;
  texts?: string[];
  events?: {
    text: string;
    link?: string;
  }[];
  buttonText?: string;
  link?: string;
  features?: string[];
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  orientation,
  title,
  texts = [],
  events = [],
  buttonText,
  link,
  features,
}) => {
  const isLeftOriented = orientation === 'left';

  const content = (
    <div className="flex flex-col gap-3 w-full my-12">
      {/*       <DynamicBorder
        title={title}
        borderPosition={isLeftOriented ? 'top-left' : 'bottom-right'}
      /> */}

      <div className="flex flex-col gap-3 w-full">
        {texts?.map((text) => (
          <h3 key={text} className="text-2xl font-light">
            {text}
          </h3>
        ))}
      </div>

      <div className="flex flex-col gap-3 w-full">
        {events?.map((event, index) => (
          <BorderedButton
            key={index}
            text={event.text}
            link={event.link}
            showArrow={!!event.link}
          />
        ))}
      </div>

      {buttonText && (
        <div className={`flex flex-col md:flex-row ${isLeftOriented ? 'justify-start' : 'md:justify-end'} mt-8 w-full`}>
          <BorderedButton text={buttonText} showArrow link={link} />
        </div>
      )}
    </div>
  );


  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto text-white font-light px-4 lg:min-h-[300px]">
      <h2 className={`w-full text-5xl md:text-8xl font-bold text-[yellow] ${isLeftOriented ? 'text-left' : 'md:text-right'}`}>{title}</h2>

      {isLeftOriented ? (
        <>
          <div className="flex w-full">
            <div className="w-full md:w-1/2 ">{content}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full md:justify-end">
            <div className="w-full md:w-1/2">{content}</div>
          </div>
        </>
      )}

      {features && (<div className={`w-full flex justify-center ${isLeftOriented ? 'md:justify-start' : 'md:justify-end'}`}>
        <FeaturesList features={features} isLeftOriented={isLeftOriented} />
      </div>)}
    </div>
  );
};