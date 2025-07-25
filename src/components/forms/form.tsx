import React, {type FC, type FormEventHandler } from 'react';

import clsx from 'clsx';

export const Form: FC<React.InputHTMLAttributes<HTMLFormElement>> = ({ onSubmit, className, ...props }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e?.preventDefault();
    onSubmit?.(e);
  };
  return <form className={clsx('w-full', className)} onSubmit={handleSubmit} {...props} />;
};

Form.displayName = 'Form';
