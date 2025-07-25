import type { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import type {
  InfinitePageParams,
  InfiniteQueryData,
  PaginatedResponse,
  PaginationParams,
} from 'src/interfaces/general.interface.ts';

type Params<DataType> = {
  per_page: PaginationParams['per_page'];
  data?: InfiniteData<PaginatedResponse<DataType>>;
} & Pick<
  UseInfiniteQueryResult<InfiniteData<PaginatedResponse<DataType>>>,
  'isFetching' | 'isError' | 'hasNextPage' | 'fetchNextPage' | 'isLoading' | 'error'
>;

export const handleInfinityQueryData = <T>({
  data,
  isFetching,
  fetchNextPage,
  hasNextPage,
  isError,
  isLoading,
  error,
  per_page = 0,
}: Params<T>) => {
  const items = (data?.pages || [])?.reduce<T[]>((res, p) => {
    res = p?.items ? [...res, ...p.items] : res;
    return res;
  }, []);

  const onVisibilityChange = async (isVisible: boolean, index: number) => {
    const isAlmostLastElementReached = index + 1 >= items?.length - Math.floor(per_page / 2);

    if (isError || isFetching) return;
    if (!isVisible || !hasNextPage || !isAlmostLastElementReached) return;
    await fetchNextPage({ cancelRefetch: false });
  };

  const showLoader = items?.length !== data?.pages?.[0]?.total_count && isFetching;

  const isEmptyStateCondition = !isLoading && !!data && !items?.length;

  return {
    onVisibilityChange,
    showLoader,
    isEmptyStateCondition,
    items,
    error,
    isError,
  };
};

export const getNextPageParam =
  (initialParams: InfinitePageParams) =>
  <DataType>(
    lastPage: InfiniteQueryData<DataType>,
    allPages: InfiniteQueryData<DataType>[],
  ): InfinitePageParams | undefined => {
    if (!initialParams.per_page || !lastPage.items.length) return undefined;

    /*const fetchedItems = allPages.length * initialParams.per_page;
    if (fetchedItems >= lastPage?.total_count) return undefined;*/
    return {
      ...initialParams,
      page: allPages.length + 1,
    };
  };
