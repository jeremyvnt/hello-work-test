import axios from 'axios';

import { AdsDao, AdsDto } from '../types/ads';
import { AxiosResponse } from '../types/axios';
import { toJobOfferDto } from '../types/jobOffer';
import { authService } from './authentication';

export interface FindAllAdsParams {
  what: string;
  where: string;
  page?: number;
  limit?: number;
}

class JobOfferService {
  public async findAllAds({
    what,
    where,
    page,
    limit = 10,
  }: FindAllAdsParams): Promise<AdsDto | undefined> {
    try {
      const token = await authService.getValidToken();
      const response = await axios
        .get<AxiosResponse<AdsDao>>(`${process.env.API_URL}/ads/search`, {
          params: {
            what,
            where,
            page,
            limit,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => res.data);

      return { ads: (response.data.ads || []).map(toJobOfferDto), total: response.data.total || 0 };
    } catch (error) {
      console.error(error);
    }
  }
}

export const jobOfferService = new JobOfferService();
