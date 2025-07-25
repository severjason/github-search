import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_LIMIT } from 'src/core/config.ts';
import type { InfinitePageParams } from 'src/interfaces/general.interface.ts';
import { REPOSITORIES_URLS, getRepositories } from 'src/pages/root/api.ts';
import { useSearchQuery } from 'src/pages/root/hooks/use-search-query.ts';
import { getNextPageParam, handleInfinityQueryData } from 'src/utils/infinity-queries.ts';

const INITIAL_PARAMS = {
  per_page: DEFAULT_LIMIT,
  page: 1,
} satisfies InfinitePageParams;

export const useGetRepositories = () => {
  const { getQuery } = useSearchQuery();

  const { isFetching, refetch, ...rest } = useInfiniteQuery({
    queryKey: [REPOSITORIES_URLS.getAll, getQuery()],
    queryFn: ({ pageParam }: { pageParam: InfinitePageParams }) => getRepositories({ ...pageParam, q: getQuery() }),
    initialPageParam: INITIAL_PARAMS,
    getNextPageParam: getNextPageParam(INITIAL_PARAMS),
    enabled: !!getQuery(),
    gcTime: 60 * 1000,
  });

  const { items, ...results } = handleInfinityQueryData({ isFetching, ...rest, per_page: INITIAL_PARAMS.per_page });

  return { items, isFetching, refetch, ...results };
};
