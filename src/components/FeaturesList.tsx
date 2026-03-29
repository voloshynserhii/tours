import React from 'react';

interface FeaturesListProps {
  features: string[];
  isLeftOriented: boolean;
}

export const FeaturesList: React.FC<FeaturesListProps> = ({ features, isLeftOriented }) => {
  return (
    <div className="w-full space-y-4">
      <ul className={`space-y-2 font-light text-center ${isLeftOriented ? 'md:text-left' : 'md:text-right'}`}>
        {features.map((feature, index) => (
          <li key={index} className='text-md font-semibold'>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
