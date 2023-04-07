import { Router } from 'express';
import { getGerenalRankingController } from '../useCases/get-general-ranking';

const router = Router();
router.get('/', (req, res) => {});
router.get('/general-ranking', (req, res) => {
  return getGerenalRankingController.handle(req, res);
});
router.get('/top-scorers', (req, res) => {
  return res.json('top socrers route');
});
router.get('/motm', (req, res) => {
  return res.json('motm route');
});
router.get('/goalkeepers', (req, res) => {
  return res.json('goalkeeper route');
});

export default router;
