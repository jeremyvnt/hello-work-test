import { FC, useMemo } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface JobOfferProps {
  city?: string;
  company: string;
  contractType?: string[];
  description?: string;
  link: string;
  publicationDate: string;
  salary?: string;
  title: string;
}

export const JobOffer: FC<JobOfferProps> = ({
  company,
  description,
  link = '#',
  title,
  publicationDate,
  salary,
  city,
  contractType = [],
}) => {
  const distancePublicationDateToNow = useMemo(
    () =>
      publicationDate &&
      formatDistanceToNow(new Date(publicationDate), { addSuffix: true, locale: fr }),
    [publicationDate],
  );

  const additionnalData = useMemo(
    () =>
      [
        city,
        contractType.length > 0 && contractType.join(', '),
        salary,
        distancePublicationDateToNow,
      ].filter(Boolean),
    [city, contractType, distancePublicationDateToNow, salary],
  );

  return (
    <li className="bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="md:flex justify-between">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-gray-400 font-semibold">
            {company}
          </div>
          <span className="block mt-1 text-lg leading-tight font-medium text-gray-300">
            {title}
          </span>
          <div className="flex flex-wrap items-center text-sm text-gray-400 mt-2">
            {additionnalData.map((item, index, array) => (
              <span key={index}>
                {item}
                {index < array.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </div>
          {description && <p className="mt-4 text-gray-400 text-sm w-auto h-full">{description}</p>}
        </div>
        <a
          className="p-8 lg:ml-4 py-2 px-10 rounded bg-blue-600 text-white font-bold flex items-center"
          href={link}
          target="_blank"
        >
          Postuler
        </a>
      </div>
    </li>
  );
};
