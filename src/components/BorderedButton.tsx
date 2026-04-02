import Link from 'next/link';
import React from 'react';

type BaseProps = {
  text: string;
  showArrow?: boolean;
  className?: string;
};

type DivAsButton = BaseProps & {
  link?: undefined;
} & React.HTMLAttributes<HTMLDivElement>;

type ButtonAsLink = BaseProps & {
  link: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type BorderedButtonProps = DivAsButton | ButtonAsLink;

export const BorderedButton: React.FC<BorderedButtonProps> = ({ className, showArrow = false, text, ...props }) => {
  const commonClassName = `group relative w-full border border-white rounded border-2 py-2 px-4 flex items-center justify-center text-center transition-all duration-300 ${showArrow ? 'hover:bg-white' : ''} ${className || ''}`;

  const content = (
    <span className={`text-lg md:text-2xl text-white font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${showArrow ? 'group-hover:text-black' : ''}`}>
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
