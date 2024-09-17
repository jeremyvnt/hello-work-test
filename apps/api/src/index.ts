import 'dotenv/config.js';
import Koa, { Context } from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import { FindAllAdsParams, jobOfferService } from './services/job-offer';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 4000;

router.get('/ads/search', async (context: Context) => {
  const { what, where, page = 1, limit = 10 } = context.query;
  const payload: FindAllAdsParams = {
    what: Array.isArray(what) ? what[0] : (what ?? ''),
    where: Array.isArray(where) ? where[0] : (where ?? ''),
    page: Number(page),
    limit: Number(limit),
  };

  try {
    context.body = await jobOfferService.findAllAds(payload);
  } catch (error) {
    context.status = 500;
    context.body = { message: "Erreur lors de la récupération des offres d'emploi" };
  }
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Koa application is up and running on port ${port}`);
});
