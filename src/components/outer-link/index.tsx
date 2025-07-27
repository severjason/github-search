import React, { type FC } from 'react';

import clsx from 'clsx';

export const OuterLink: FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ className, ...props }) => {
  return (
    <a
      className={clsx(
        'focus-visible:ring-primary-600/25 focus:outline-none focus-visible:ring-2 focus-visible:border-primary-600 hover:underline shrink-0  transition-all hover:cursor-pointer rounded-lg px-0.5',
        className,
      )}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    />
  );
};

OuterLink.displayName = 'Form';
