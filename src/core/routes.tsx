import { NotFound } from 'src/components';
import { RootPage } from 'src/pages/root';

export const APP_ROUTES = {
  root: {
    path: '/',
    element: <RootPage />,
  },
  repositoryDetails: {
    path: '/:owner/:repoId',
    element: <div>Placeholer</div>,
  },
  notFound: {
    path: '*',
    element: <NotFound />,
  },
} as const;

export const APP_ROUTES_ARRAY = Object.values(APP_ROUTES);
