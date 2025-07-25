import { useSearchParams } from 'react-router-dom';

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQuery = () => searchParams.get('q') || '';

  const setQuery = (value: string) => setSearchParams({ q: value });

  const clearQuery = () => setSearchParams({});

  return {
    getQuery,
    setQuery,
    clearQuery,
  };
};
