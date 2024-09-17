"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobOfferService = void 0;
const axios_1 = __importDefault(require("axios"));
const jobOffer_1 = require("../types/jobOffer");
const authentication_1 = require("./authentication");
class JobOfferService {
    async findAllAds({ what, where, page, limit = 10, }) {
        try {
            const token = await authentication_1.authService.getValidToken();
            const response = await axios_1.default
                .get(`${process.env.API_URL}/ads/search`, {
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
            return { ads: (response.data.ads || []).map(jobOffer_1.toJobOfferDto), total: response.data.total || 0 };
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.jobOfferService = new JobOfferService();
