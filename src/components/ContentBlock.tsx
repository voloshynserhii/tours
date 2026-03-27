import { BorderedButton, DynamicBorder, FeaturesList } from '@/components';

type Orientation = 'left' | 'right';

interface ContentBlockProps {
  orientation: Orientation;
  title: string;
  events: string[];
  buttonText?: string;
  link?: string;
  features?: {
    title: string;
    features: string[];
  };
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  orientation,
  title,
  events = [],
  buttonText,
  link,
  features,
}) => {
  const isLeftOriented = orientation === 'left';

  const content = (
    <div className="flex flex-col gap-3 w-full my-12">
      <DynamicBorder
        title={title}
        borderPosition={isLeftOriented ? 'top-left' : 'bottom-right'}
      />
      <div className="flex flex-col gap-3 w-full">
        {events.map((event, index) => (
          <BorderedButton
            key={index}
            text={event}
          />
        ))}
      </div>

      <div className={`flex ${isLeftOriented ? 'justify-start' : 'justify-end'} mt-8`}>
        <BorderedButton text={buttonText} showArrow link={link} />
      </div>
    </div>
  );


  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto text-white font-light px-4">
      {isLeftOriented ? (
        <>
          <div className="flex w-full">
            <div className="w-1/2 ">{content}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full justify-end">
            <div className="w-1/2">{content}</div>
          </div>
        </>
      )}

      {features && (<div className="w-full flex justify-start">
        <FeaturesList title={features.title} features={features.features} />
      </div>)}
    </div>
  );
};