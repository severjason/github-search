import type { FC } from 'react';

import { OuterLink, UserAvatar } from 'src/components';
import type { useGetRepoDetails } from 'src/pages/repo-details/hooks/use-get-repo-details.tsx';

type ContributorsProps = Pick<ReturnType<typeof useGetRepoDetails>['data'], 'contributors'>;

export const Contributors: FC<ContributorsProps> = ({ contributors }) => {
  if (!contributors?.length) return null;

  return (
    <div className="w-full pt-4 flex gap-2">
      <h3 className="font-semibold">Top 5 contributors:</h3>
      <p>
        {contributors.map((contributor, index) => (
          <OuterLink
            key={contributor.id}
            className="inline-flex flex-nowrap gap-1 items-center"
            href={contributor.html_url}
          >
            <UserAvatar avatarUrl={contributor.avatar_url} className="h-4 w-4" />
            {contributor.login}
            {index === contributors.length - 1 ? '.' : `, `}
          </OuterLink>
        ))}
      </p>
    </div>
  );
};
