import React from 'react';

interface FeaturesListProps {
  title: string;
  features: string[];
}

export const FeaturesList: React.FC<FeaturesListProps> = ({ title, features }) => {
  return (
    <div className="w-full md:w-1/2 text-left space-y-4">
      <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
      <ul className="space-y-2 opacity-90 font-light text-center md:text-left">
        {features.map((feature, index) => (
          <li key={index} className='text-md font-semibold'>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
