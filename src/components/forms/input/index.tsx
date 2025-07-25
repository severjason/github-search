import * as React from 'react';

import clsx from 'clsx';

import { Label, type LabelProps } from './label.tsx';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Pick<LabelProps, 'label'> & {
    ref?: React.Ref<HTMLInputElement>;
  };

const Input: React.FC<InputProps> = ({ className, type, label, id, ref, ...props }) => {
  return (
    <div className="w-full flex flex-col-reverse">
      <input
        type={type}
        className={clsx(
          `flex h-8 w-full rounded-md border bg-white  px-2 py-1 text-sm  peer file:border-0 
            file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-blue-600/25
            disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-blue-600`,
          className,
        )}
        ref={ref}
        id={id}
        {...props}
      />
      <Label htmlFor={id} className="pb-2" label={label} />
    </div>
  );
};

Input.displayName = 'Input';

export { Input };
