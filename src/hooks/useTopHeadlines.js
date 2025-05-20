import { useQuery } from '@tanstack/react-query';
import { newsApi } from "../api/api";

export const useTopHeadlines = (params = {}) => {
  return useQuery({
    queryKey: ['topheadlines', params], 
    queryFn: () => newsApi.getTopHeadlines(params),
    staleTime: 5 * 60 * 1000, 
    retry: 2, 
    enabled: !!params.country || !!params.category || !!params.sources
  });
};

