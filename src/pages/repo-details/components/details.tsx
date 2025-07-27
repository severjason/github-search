import type { FC, ReactNode } from 'react';

import { useLocation } from 'react-router';
import { Buttons } from 'src/components';
import { APP_ROUTES } from 'src/core/routes.tsx';
import type { Repository } from 'src/interfaces/repositories.interface.ts';
import type { useGetRepoDetails } from 'src/pages/repo-details/hooks/use-get-repo-details.tsx';

import { Contributors } from './contributors';
import { OpenIssues } from './open-issues.tsx';

type DetailsProps = Omit<ReturnType<typeof useGetRepoDetails>['data'], 'details'> & {
  details: Repository;
};

const MetaData = ({ title, value }: { title: string; value: ReactNode }) => {
  if (typeof value !== 'number' && !value) return null;
  return (
    <p>
      {`${title}: `}
      <span>{value}</span>
    </p>
  );
};

export const Details: FC<DetailsProps> = ({ details, issues, contributors }) => {
  const { state } = useLocation();

  const getQueryParams = () => {
    if (!state) return '';
    return `?${new URLSearchParams({ q: state }).toString()}`;
  };

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="w-full flex gap-2 flex-nowrap items-center">
        <Buttons.Link to={`${APP_ROUTES.root.path}${getQueryParams()}`}>Back</Buttons.Link>
        <h1 className="text-xl p-2">Github repository details</h1>
      </div>

      <div className="shadow border rounded-md p-2">
        <h2 className={'font-semibold text-xl pb-2'}>{details.name}</h2>
        <MetaData title={'Language'} value={details.language} />
        <MetaData title={'Forks'} value={details.forks} />
        <MetaData title={'Watchers'} value={details.watchers_count} />
        <Contributors contributors={contributors} />
        <OpenIssues issues={issues} />
      </div>
    </div>
  );
};
