import React from 'react';

import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Loaders } from 'src/components';

import { buttonVariants } from './styles';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    wrapperClasses?: string;
    ref?: React.Ref<HTMLButtonElement>;
  };

const ButtonLoader = ({ isLoading, children }: Pick<ButtonProps, 'isLoading' | 'children'>) => {
  if (!isLoading) return children;

  return (
    <>
      <Loaders.Loader className="absolute w-4 h-4" />
      <span className="invisible ">{children}</span>
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  disabled,
  children,
  ref,
  variant,
  size,
  wrapperClasses,
  ...rest
}) => {
  const classes = clsx(buttonVariants({ variant, size, className }));
  return (
    <button role="button" disabled={isLoading || disabled} tabIndex={0} className={classes} ref={ref} {...rest}>
      <ButtonLoader isLoading={isLoading}>
        <span className={clsx('flex flex-nowrap gap-2 items-center', wrapperClasses)}>{children}</span>
      </ButtonLoader>
    </button>
  );
};
