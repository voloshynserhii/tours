import React from 'react';

interface BorderedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  showArrow?: boolean;
}

export const BorderedButton: React.FC<BorderedButtonProps> = ({ text, showArrow = true, ...props }) => {
  return (
    <button
      className="group relative w-full border border-white py-2 px-4 flex items-center justify-center transition-all duration-300 hover:bg-white"
      {...props}
    >
      <span className="text-sm md:text-base tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-black">
        {text}
        {showArrow && (
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">›</span>
        )}
      </span>
    </button>
  );
};
