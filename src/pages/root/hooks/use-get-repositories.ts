import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_LIMIT, HOUR_IN_MS } from 'src/core/config.ts';
import type { InfinitePageParams } from 'src/interfaces/general.interface.ts';
import type { Repository } from 'src/interfaces/repositories.interface.ts';
import { REPOSITORIES_URLS, getRepositories } from 'src/pages/root/api.ts';
import { useSearchQuery } from 'src/pages/root/hooks/use-search-query.ts';
import { getNextPageParam } from 'src/utils/infinity-queries.ts';

const INITIAL_PARAMS = {
  per_page: DEFAULT_LIMIT,
  page: 1,
} satisfies InfinitePageParams;

export const useGetRepositories = () => {
  const { getQuery } = useSearchQuery();

  const { isFetching, refetch, data, isError, fetchNextPage, hasNextPage, isLoading, error } = useInfiniteQuery({
    queryKey: [REPOSITORIES_URLS.getAll, getQuery()],
    queryFn: ({ pageParam }: { pageParam: InfinitePageParams }) => getRepositories({ ...pageParam, q: getQuery() }),
    initialPageParam: INITIAL_PARAMS,
    getNextPageParam: getNextPageParam(INITIAL_PARAMS),
    enabled: !!getQuery(),
    gcTime: HOUR_IN_MS,
    staleTime: HOUR_IN_MS,
  });

  const items = (data?.pages || [])?.reduce<Repository[]>((res, p) => {
    res = p?.items ? [...res, ...p.items] : res;
    return res;
  }, []);

  const onVisibilityChange = async (isVisible: boolean, index: number) => {
    const isAlmostLastElementReached = index + 1 >= items?.length - Math.floor(INITIAL_PARAMS.per_page / 2);

    if (isError || isFetching) return;
    if (!isVisible || !hasNextPage || !isAlmostLastElementReached) return;
    await fetchNextPage({ cancelRefetch: false });
  };

  const showLoader = items?.length !== data?.pages?.[0]?.total_count && isFetching;

  const isEmptyStateCondition = !isLoading && !!data && !items?.length;

  return { items, isFetching, refetch, onVisibilityChange, showLoader, isEmptyStateCondition, error, isError };
};
