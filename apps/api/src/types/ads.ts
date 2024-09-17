import { JobOfferDao, JobOfferDto } from './jobOffer';

export type AdsDao = {
  total: number;
  ads: JobOfferDao[];
};

export type AdsDto = {
  total: number;
  ads: JobOfferDto[];
};
