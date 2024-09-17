import { useCallback, useEffect, useState } from 'react';

import { GetAdsParam, getAds } from '@/domains/job/data/ads';
import { AdsResponse } from '@/domains/job/data/types';

export const useGetAds = (payload: GetAdsParam) => {
  const [data, setData] = useState<AdsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchAds = useCallback(async (params: GetAdsParam) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getAds(params);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAds(payload);
  }, [fetchAds, payload]);

  return { data, isLoading, error };
};
