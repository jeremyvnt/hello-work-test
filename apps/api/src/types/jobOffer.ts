export type JobOfferDao = {
  city: string;
  coordinates?: string;
  company: string;
  contractType: string[];
  department?: string;
  description?: string;
  id: string;
  jobtitle: string;
  link: string;
  publicationDate: string;
  postalCode: string;
  region?: string;
  salary: string;
  sector?: string;
  title: string;
};

export type JobOfferDto = Pick<
  JobOfferDao,
  | 'city'
  | 'company'
  | 'contractType'
  | 'description'
  | 'id'
  | 'link'
  | 'publicationDate'
  | 'salary'
  | 'title'
>;

export const toJobOfferDto = (jobOffer: JobOfferDao): JobOfferDto => {
  return {
    city: jobOffer?.city,
    company: jobOffer?.company,
    contractType: jobOffer?.contractType,
    description: jobOffer?.description,
    id: jobOffer.id,
    link: jobOffer.link,
    publicationDate: jobOffer.publicationDate,
    salary: jobOffer?.salary,
    title: jobOffer.title,
  };
};
