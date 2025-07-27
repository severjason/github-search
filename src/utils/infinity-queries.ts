import type { InfinitePageParams, InfiniteQueryData } from 'src/interfaces/general.interface.ts';

export const getNextPageParam =
  (initialParams: InfinitePageParams) =>
  <DataType>(
    lastPage: InfiniteQueryData<DataType>,
    allPages: InfiniteQueryData<DataType>[],
  ): InfinitePageParams | undefined => {
    if (!initialParams.per_page) return undefined;

    const fetchedItems = allPages.length * initialParams.per_page;
    if (fetchedItems >= lastPage?.total_count) return undefined;
    return {
      ...initialParams,
      page: allPages.length + 1,
    };
  };
