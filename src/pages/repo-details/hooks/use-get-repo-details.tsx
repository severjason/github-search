import { type DefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { HOUR_IN_MS } from 'src/core/config.ts';
import {
  REPOSITORY_DETAILS_URLS,
  getRepositoryContributors,
  getRepositoryDetails,
  getRepositoryIssues,
} from 'src/pages/repo-details/api.ts';
import type { RepositoryDetailsParams } from 'src/pages/repo-details/interfaces.ts';

export const useGetRepoDetails = () => {
  const { ownerName, repoName } = useParams<RepositoryDetailsParams>();

  const baseConfig = {
    gcTime: HOUR_IN_MS,
    staleTime: HOUR_IN_MS,
    enabled: !!ownerName && !!repoName,
  } satisfies Pick<DefinedInitialDataOptions, 'gcTime' | 'staleTime' | 'enabled'>;

  const detailsQuery = useQuery({
    queryKey: [REPOSITORY_DETAILS_URLS.details, ownerName, repoName],
    queryFn: () => getRepositoryDetails({ ownerName, repoName }),
    ...baseConfig,
  });

  const issuesQuery = useQuery({
    queryKey: [REPOSITORY_DETAILS_URLS.issues, ownerName, repoName],
    queryFn: () => getRepositoryIssues({ ownerName, repoName }),
    ...baseConfig,
  });

  const contributorsQuery = useQuery({
    queryKey: [REPOSITORY_DETAILS_URLS.contributors, ownerName, repoName],
    queryFn: () => getRepositoryContributors({ ownerName, repoName }),
    ...baseConfig,
  });

  return {
    error: detailsQuery.error || issuesQuery.error || contributorsQuery.error,
    isLoading: detailsQuery.isLoading || issuesQuery.isLoading || contributorsQuery.isLoading,
    data: {
      details: detailsQuery.data,
      issues: issuesQuery.data,
      contributors: contributorsQuery.data,
    },
  };
};
