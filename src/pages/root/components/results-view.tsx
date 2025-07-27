import { generatePath } from 'react-router-dom';
import { Buttons } from 'src/components';
import { APP_ROUTES } from 'src/core/routes.tsx';
import { useGetRepositories } from 'src/pages/root/hooks/use-get-repositories.ts';
import { useSearchQuery } from 'src/pages/root/hooks/use-search-query.ts';

import { ItemCard } from './item-card.tsx';
import { ItemsLoader } from './item-loader.tsx';
import { ResultsError } from './results-error.tsx';

const EmptyState = () => (
  <div className="w-full border shadow rounded-md p-2">
    <p>Nothing was found...</p>
  </div>
);

export const ResultsView = () => {
  const { getQuery } = useSearchQuery();
  const { items, error, onVisibilityChange, showLoader, isEmptyStateCondition } = useGetRepositories();

  if (!getQuery()) return null;

  return (
    <div className={'flex flex-col gap-4'}>
      {isEmptyStateCondition ? (
        <EmptyState />
      ) : (
        <div className={'w-full grid grid-cols-1 gap-4'}>
          {items?.map((item, index) => (
            <Buttons.Link
              state={getQuery()}
              key={item.id}
              to={generatePath(APP_ROUTES.repositoryDetails.path, { ownerName: item.owner.login, repoName: item.name })}
            >
              <ItemCard item={item} index={index} onVisibilityChange={onVisibilityChange} />
            </Buttons.Link>
          ))}
        </div>
      )}
      <ItemsLoader isVisible={showLoader} />
      <ResultsError error={error} />
    </div>
  );
};
