import { type FC } from 'react';

import { Loaders } from 'src/components';

type ItemsLoaderProps = {
  isVisible?: boolean;
};

export const ItemsLoader: FC<ItemsLoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="w-full flex justify-center items-center">
      <Loaders.Loader />
    </div>
  );
};
