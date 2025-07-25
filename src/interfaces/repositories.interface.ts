import type { PaginatedResponse, PaginationParams } from 'src/interfaces/general.interface.ts';

type SearchSortType = 'stars' | 'forks' | 'help-wanted-issues' | 'updated';

export type SearchRepositoriesParams = PaginationParams & {
  sort?: SearchSortType;
};

export type SearchRepositoriesResponse = PaginatedResponse<Repository>;

type RepositoryOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: Nullable<string>;
  gravatar_id: Nullable<string>;
  url: string;
  received_events_url: string;
  type: Nullable<'User'>;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  site_admin: boolean;
};

type RepositoryLisense = {
  key: string;
  name: string;
  url: string;
  spdx_id: string;
  node_id: string;
  html_url: string;
};

type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: RepositoryOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks: number;
  open_issues: number;
  watchers: number;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: 'private' | 'public';
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  lisense: RepositoryLisense;
  // did not write full interface as it was not needed
};
