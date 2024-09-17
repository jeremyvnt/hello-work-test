"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config.js");
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_router_1 = __importDefault(require("koa-router"));
const job_offer_1 = require("./services/job-offer");
const app = new koa_1.default();
const router = new koa_router_1.default();
const port = process.env.PORT || 4000;
router.get('/ads/search', async (context) => {
    const { what, where, page = 1, limit = 10 } = context.query;
    const payload = {
        what: Array.isArray(what) ? what[0] : (what ?? ''),
        where: Array.isArray(where) ? where[0] : (where ?? ''),
        page: Number(page),
        limit: Number(limit),
    };
    try {
        context.body = await job_offer_1.jobOfferService.findAllAds(payload);
    }
    catch (error) {
        context.status = 500;
        context.body = { message: "Erreur lors de la récupération des offres d'emploi" };
    }
});
app.use((0, koa_bodyparser_1.default)());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
    console.log(`Koa application is up and running on port ${port}`);
});
