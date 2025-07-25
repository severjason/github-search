import React from 'react';

import { Loader } from './loader.tsx';

export const PageLoader: React.FC = () => <Loader svgClassName={'w-[50px] h-[50px]'} />;

PageLoader.displayName = 'PageLoader';
