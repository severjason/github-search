import { generatePath } from 'react-router-dom';
import { axiosInstance } from 'src/core/axios.ts';
import type { Contributor } from 'src/interfaces/contributors.interface.ts';
import type { Issue } from 'src/interfaces/issues.interface.ts';
import type { Repository } from 'src/interfaces/repositories.interface.ts';
import type { RepositoryDetailsParams } from 'src/pages/repo-details/interfaces.ts';

export const REPOSITORY_DETAILS_URLS = {
  details: '/repos/:ownerName/:repoName',
  issues: '/repos/:ownerName/:repoName/issues',
  contributors: '/repos/:ownerName/:repoName/contributors',
};

export const getRepositoryDetails = ({ ownerName, repoName }: RepositoryDetailsParams) =>
  axiosInstance
    .get<Repository>(generatePath(REPOSITORY_DETAILS_URLS.details, { ownerName, repoName }))
    .then((response) => response.data);

export const getRepositoryIssues = ({ ownerName, repoName }: RepositoryDetailsParams) =>
  axiosInstance
    .get<Issue[]>(generatePath(REPOSITORY_DETAILS_URLS.issues, { ownerName, repoName }))
    .then((response) => response.data);

export const getRepositoryContributors = ({ ownerName, repoName }: RepositoryDetailsParams) =>
  axiosInstance
    .get<
      Contributor[]
    >(generatePath(REPOSITORY_DETAILS_URLS.contributors, { ownerName, repoName }), { params: { per_page: 5 } })
    .then((response) => response.data);
