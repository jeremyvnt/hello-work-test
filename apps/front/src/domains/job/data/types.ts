import {JobOffer} from "@/domains/job/components/JobOffer";

export type JobOffer = {
    id: string;
    link: string;
    title: string;
    description?: string;
    publicationDate: string;
    coordinates?: string;
    city: string;
    postalCode: string;
    department?: string;
    region?: string;
    sector?: string;
    jobtitle: string;
    company: string;
    contractType: string[];
    salary: string;
};

export type AdsResponse = {
    total: number;
    ads: JobOffer[];
}