import type { FC } from 'react';

import { useGetRepositories } from 'src/pages/root/hooks/use-get-repositories.ts';
import { parseApiError } from 'src/utils/parse-api-error.ts';

export const ResultsError: FC<Pick<ReturnType<typeof useGetRepositories>, 'error'>> = ({ error }) => {
  if (!error) return null;
  return (
    <div className={'w-full border border-red-300 flex rounded-md p-2 shadow'}>
      <p className="w-full text-red-800">{parseApiError(error)}</p>
    </div>
  );
};
