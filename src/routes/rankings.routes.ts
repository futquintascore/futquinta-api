import { Router } from 'express';
import { getGerenalRankingController } from '../useCases/get-general-ranking';
import { getGoalkeepersRankingController } from '../useCases/get-goalkeepers-ranking';
import { getRecordRankingController } from '../useCases/get-record-ranking';

const router = Router();

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
  return getGoalkeepersRankingController.handle(req, res);
});

router.get('/record', (req, res) => {
  return getRecordRankingController.handle(req, res);
});

export default router;
