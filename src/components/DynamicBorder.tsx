import React from 'react';

type DynamicBorderProps = {
  title: string;
  borderPosition: 'top-left' | 'bottom-right';
};

export const DynamicBorder: React.FC<DynamicBorderProps> = ({ title, borderPosition }) => {
  const solidBorderClasses = {
    'top-left': 'border-b-2 border-r-2',
    'bottom-right': 'border-t-2 border-l-2',
  };

  const dashedBorderClasses = {
    'top-left': 'border-t-2 border-l-2',
    'bottom-right': 'border-b-2 border-r-2',
  };

  return (
    <div className="relative group w-full mb-8 cursor-default">
      <div className="py-4 px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">
          {title}
        </h2>
      </div>
      {/* Solid border part */}
      <div
        className={`absolute inset-0 border-solid border-white ${solidBorderClasses[borderPosition]}`}
      />
      {/* Dashed border part */}
      <div className={`absolute inset-0 border-dashed border-white opacity-100 transition-all duration-300 group-hover:border-solid group-hover:opacity-100 cursor-pointer ${dashedBorderClasses[borderPosition]}`} />
    </div>
  );
};
