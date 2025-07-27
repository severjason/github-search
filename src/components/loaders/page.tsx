import React from 'react';

import { Loader } from './loader.tsx';

export const PageLoader: React.FC = () => (
  <div className="w-full flex-1 flex justify-center items-center">
    <Loader svgClassName={'w-[50px] h-[50px]'} />
  </div>
);

PageLoader.displayName = 'PageLoader';
