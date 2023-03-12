import { updatePlayerStatsController } from './../useCases/update-player-stats/index';
import { Router } from 'express';

import { createPlayerStatsController } from '../useCases/create-player-stats';
import { deletePlayerStatController } from '../useCases/delete-player-stats';
import { authMiddleware } from '../middlewares/auth';

import { addPlayerToGameController } from '../useCases/add-player-to-game';

const statRoute = Router();

statRoute.post(
  '/:gameId',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return createPlayerStatsController.handle(req, res);
  }
);

statRoute.put(
  '/:gameId/:statId',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return updatePlayerStatsController.handle(req, res);
  }
);
statRoute.delete(
  '/:id',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return deletePlayerStatController.handle(req, res);
  }
);
statRoute.post('/:gameId/:playerId', async (req, res) => {
  return addPlayerToGameController.handle(req, res);
});

export default statRoute;
