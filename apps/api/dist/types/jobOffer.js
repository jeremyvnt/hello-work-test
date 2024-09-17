"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJobOfferDto = void 0;
const toJobOfferDto = (jobOffer) => {
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
exports.toJobOfferDto = toJobOfferDto;
