import { useQuery } from '@tanstack/react-query';
import { newsApi } from "../api/api";

export const useEverything = (params = {}) => {
  return useQuery({
    queryKey: ['everything', params], 
    queryFn: () => newsApi.getEverything(params),
    staleTime: 5 * 60 * 1000, 
    retry: 2, 
    enabled: !!params.q || !!params.sources || !!params.domains
  });
};



