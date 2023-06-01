import { QueryClient } from 'react-query';

const CACHE_TIME_IN_MILLISECONDS = 5 * 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      enabled: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: CACHE_TIME_IN_MILLISECONDS,
      cacheTime: CACHE_TIME_IN_MILLISECONDS,
    },
  },
});
