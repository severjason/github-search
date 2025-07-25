import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import clsx from 'clsx';

export type LabelProps = Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'children'> & {
  label?: string;
  ref?: React.Ref<HTMLLabelElement>;
};

const Label: React.FC<LabelProps> = ({ className, ref, label, ...props }) => {
  if (!label) return null;
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={clsx(
        'flex text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 ',
        className,
      )}
      {...props}
    >
      {label}
    </LabelPrimitive.Root>
  );
};

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
