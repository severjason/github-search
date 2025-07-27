import type { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';
import { Icons } from 'src/components';

type UserAvatarProps = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  avatarUrl?: Nullable<string>;
};

export const UserAvatar: FC<UserAvatarProps> = ({ avatarUrl, className }) => (
  <div
    className={clsx('flex justify-center items-center rounded-full bg-primary-100 shrink-0', className || 'w-8 h-8')}
  >
    {!avatarUrl ? (
      <Icons.User className="text-primary-800" />
    ) : (
      <img alt={'user-avatar'} src={avatarUrl} className="rounded-full" />
    )}
  </div>
);
