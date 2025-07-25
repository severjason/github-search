import type { AxiosError } from 'axios';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong';

type APIError = {
  message?: string;
};

export const parseApiError = (error?: Nullable<Error>) => {
  if (!error) return null;

  if ('response' in error) return (error as AxiosError<APIError>).response?.data?.message || DEFAULT_ERROR_MESSAGE;

  return error.message;
};
