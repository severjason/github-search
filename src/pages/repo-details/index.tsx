import { Loaders, NotFound } from 'src/components';
import { Details } from 'src/pages/repo-details/components/details.tsx';
import { useGetRepoDetails } from 'src/pages/repo-details/hooks/use-get-repo-details.tsx';
import { parseApiError } from 'src/utils/parse-api-error.ts';

export const RepoDetailsPage = () => {
  const { isLoading, error, data } = useGetRepoDetails();
  const { details, ...rest } = data;

  if (isLoading) return <Loaders.Page />;

  if (error || !details) return <NotFound title={parseApiError(error) || 'Repository not found'} />;

  return <Details details={details} {...rest} />;
};
