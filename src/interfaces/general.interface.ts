export type PaginatedResponse<Data> = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<Data>;
};

export type InfiniteQueryData<DataType> = PaginatedResponse<DataType>;

export type InfinitePageParams = Pick<PaginationParams, 'page' | 'per_page'>;

export type PaginationParams = {
  q: string;
  order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
};
