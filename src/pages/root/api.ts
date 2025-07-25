import { axiosInstance } from 'src/core/axios.ts';
import type { SearchRepositoriesParams, SearchRepositoriesResponse } from 'src/interfaces/repositories.interface.ts';

export const REPOSITORIES_URLS = {
  getAll: '/search/repositories',
};

export const getRepositories = (params: SearchRepositoriesParams) =>
  axiosInstance.get<SearchRepositoriesResponse>(REPOSITORIES_URLS.getAll, { params }).then((response) => response.data);
