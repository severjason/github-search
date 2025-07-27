import type { FC } from 'react';

import { OuterLink } from 'src/components';
import type { useGetRepoDetails } from 'src/pages/repo-details/hooks/use-get-repo-details.tsx';

type OpenIssuesProps = Pick<ReturnType<typeof useGetRepoDetails>['data'], 'issues'>;

export const OpenIssues: FC<OpenIssuesProps> = ({ issues }) => {
  if (!issues?.length) return null;

  return (
    <div className="w-full pt-4 flex flex-col">
      <h3 className="font-semibold">Open issues:</h3>
      <div className="flex flex-col">
        {issues.map((issue) => (
          <OuterLink key={issue.id} className="inline-flex flex-nowrap gap-1 items-center" href={issue.html_url}>
            {issue.title}
          </OuterLink>
        ))}
      </div>
    </div>
  );
};
