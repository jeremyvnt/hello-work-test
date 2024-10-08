import { defaultItemsPerPage, defaultPage } from '@/constants';
import { AdsResponse } from '@/domains/job/data/types';

export interface GetAdsParam {
  what: string;
  where: string;
  page?: number;
}

export const getAds = async ({
  what,
  where,
  page = defaultPage,
}: GetAdsParam): Promise<AdsResponse> => {
  const searchParams = new URLSearchParams();
  searchParams.set('what', what);
  searchParams.set('where', where);
  searchParams.set('page', page.toString());
  searchParams.set('limit', defaultItemsPerPage.toString());

  const url = `/api/ads/search?${searchParams.toString()}`;
  const response = await fetch(url);
  return response.json();
};
