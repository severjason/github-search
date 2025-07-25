import React from 'react';

import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { buttonVariants } from './styles';

export type LinkButtonProps = React.ComponentPropsWithRef<typeof Link> & VariantProps<typeof buttonVariants>;

export const LinkButton: React.FC<LinkButtonProps> = ({ variant, size, className, ...props }) => {
  const classes = clsx(buttonVariants({ variant, size, className }));
  return <Link className={classes} {...props} />;
};
