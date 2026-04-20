import Link from 'next/link';
import React from 'react';

type BaseProps = {
  text: string | React.ReactNode;
  showArrow?: boolean;
  className?: string;
  isBlack?: boolean;
};

type DivAsButton = BaseProps & {
  link?: undefined;
} & React.HTMLAttributes<HTMLDivElement>;

type ButtonAsLink = BaseProps & {
  link: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type BorderedButtonProps = DivAsButton | ButtonAsLink;

export const BorderedButton: React.FC<BorderedButtonProps> = ({ className, showArrow = false, isBlack = false, text, ...props }) => {
  const baseBorderColor = isBlack ? 'border-black' : 'border-white';
  const hoverBgColor = isBlack ? 'hover:bg-black' : (showArrow ? 'hover:bg-white' : '');
  
  const commonClassName = `group relative w-full border ${baseBorderColor} rounded-lg border-2 py-2 px-4 flex items-center justify-center text-center transition-all duration-300 ${hoverBgColor} ${className || ''}`;

  const textColor = isBlack ? 'text-black group-hover:text-white' : `text-white ${showArrow ? 'group-hover:text-black' : ''}`;

  const content = (
    <span className={`text-lg md:text-2xl ${textColor} font-bold tracking-[0.15em] uppercase transition-colors duration-300`}>
      {text}
    </span>
  );

  if (props.link) {
    const { link, ...rest } = props as ButtonAsLink;
    return (
      <Link href={link} {...rest} className={commonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <div {...props as DivAsButton} className={commonClassName}>
      {content}
    </div>
  );
};
