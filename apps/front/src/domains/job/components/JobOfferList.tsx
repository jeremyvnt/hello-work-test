import { FC, useMemo } from 'react';

import { Pagination } from '@/components/Pagination';
import { defaultCity, defaultItemsPerPage, defaultPage } from '@/constants';
import { JobOffer } from '@/domains/job/components/JobOffer';
import { JobOfferSkeleton } from '@/domains/job/components/JobOfferSkeleton';
import { GetAdsParam } from '@/domains/job/data/ads';
import { useGetAds } from '@/domains/job/hooks/useGetAds';

interface JobOfferListProps {
  page?: number;
  what: string;
  onPageChange: (page: number) => void;
}

export const JobOfferList: FC<JobOfferListProps> = ({ page = defaultPage, what, onPageChange }) => {
  const payload = useMemo<GetAdsParam>(
    () => ({ what, when: defaultCity, page, limit: defaultItemsPerPage }),
    [what, page],
  );
  const { data, isLoading, error } = useGetAds(payload);

  const offers = useMemo(() => data?.ads || [], [data]);
  const totalOffers = useMemo(() => data?.total || 0, [data]);

  const hasOffersForThisPage = useMemo(() => offers.length > 0, [offers]);
  const totalOffersLabel = useMemo(() => {
    if (totalOffers === 0) return `Aucune offre d'emploi`;
    if (totalOffers === 1) return `1 offre d'emploi`;

    return `${totalOffers} offres d'emploi`;
  }, [totalOffers]);

  return (
    <div className="flex flex-col gap-y-10 max-w-lg md:max-w-2xl w-full mx-auto">
      {isLoading && <div className="animate-pulse block mt-1 h-7 bg-gray-600 rounded w-60"></div>}
      {!isLoading && <h2 className="font-bold text-3xl dark:text-slate-300">{totalOffersLabel}</h2>}
      {error && (
        <p className="dark:text-slate-400">
          {`Une erreur est survenue lors de la récupération des offres d'emploi.`}
          <br />
          <span>Veuillez réessayer plus tard</span>
        </p>
      )}
      <ul className="space-y-4">
        {isLoading &&
          Array.from({ length: defaultItemsPerPage }, (_, index) => index + 1).map(key => (
            <JobOfferSkeleton key={key} />
          ))}
        {!error && !hasOffersForThisPage && (
          <p className="dark:text-slate-400">
            {`Aucune offre d'emploi n'est disponible.`}
            <br />
            <span>Veuillez réessayer plus tard</span>
          </p>
        )}
        {!isLoading &&
          !error &&
          hasOffersForThisPage &&
          offers.map(offer => (
            <JobOffer
              key={offer.id}
              city={offer.city}
              contractType={offer.contractType}
              company={offer.company}
              description={offer.description}
              publicationDate={offer.publicationDate}
              salary={offer.salary}
              title={offer.title}
              link={offer.link}
            />
          ))}
      </ul>
      <Pagination currentPage={page} totalItems={totalOffers} onPageChange={onPageChange} />
    </div>
  );
};

export default JobOfferList;
