import { useRoutes } from 'react-router-dom';
import { Layout } from 'src/components';
import { APP_ROUTES_ARRAY } from 'src/core/routes.tsx';

const App = () => {
  const content = useRoutes(APP_ROUTES_ARRAY);
  return <Layout>{content}</Layout>;
};

export default App;
