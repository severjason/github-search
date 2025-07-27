import { NotFound } from 'src/components';
import { RepoDetailsPage } from 'src/pages/repo-details';
import { RootPage } from 'src/pages/root';

export const APP_ROUTES = {
  root: {
    path: '/',
    element: <RootPage />,
  },
  repositoryDetails: {
    path: '/:ownerName/:repoName',
    element: <RepoDetailsPage />,
  },
  notFound: {
    path: '*',
    element: <NotFound />,
  },
} as const;

export const APP_ROUTES_ARRAY = Object.values(APP_ROUTES);
