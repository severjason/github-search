import { type FC, useEffect, useRef } from 'react';

import { Icons, UserAvatar } from 'src/components';
import { useOnScreen } from 'src/hooks/use-on-screen.ts';
import { useGetRepositories } from 'src/pages/root/hooks/use-get-repositories.ts';

type GetReposData = ReturnType<typeof useGetRepositories>;

type ItemCardProps = Pick<GetReposData, 'onVisibilityChange'> & {
  item: GetReposData['items'][number];
  index: number;
};

export const ItemCard: FC<ItemCardProps> = ({ onVisibilityChange, index, item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  useEffect(() => {
    onVisibilityChange?.(isIntersecting, index);
  }, [onVisibilityChange, isIntersecting, index]);

  return (
    <div ref={ref} className="w-full flex flex-col p-1">
      <div className="flex items-center">
        <UserAvatar avatarUrl={item.owner?.avatar_url} />
        <p className="text-l font-semibold px-2 break-all">{item.name}</p>
        <div className="flex-1" />
        <div className="flex justify-center items-center flex-nowrap gap-1 shrink-0">
          <span className="text-sm ">{item.stargazers_count}</span>
          <Icons.Star className="text-yellow-500" />
        </div>
      </div>
    </div>
  );
};
