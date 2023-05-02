import { updatePlayerStatsController } from './../useCases/update-player-stats/index';
import { Router } from 'express';

import { createPlayerStatsController } from '../useCases/create-player-stats';
import { deletePlayerStatController } from '../useCases/delete-player-stats';
import { authMiddleware } from '../middlewares/auth';

import { addPlayerToGameController } from '../useCases/add-player-to-game';
import { incrementPlayerInGameGoalsController } from '../useCases/increment-player-in-game-goals';
import { decrementPlayerInGameGoalsController } from '../useCases/decrement-player-in-game-goals';

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
statRoute.get('/goals/increment/:id', (req, res) => {
  return incrementPlayerInGameGoalsController.handle(req, res);
});
statRoute.get('/goals/decrement/:id', (req, res) => {
  return decrementPlayerInGameGoalsController.handle(req, res);
});

export default statRoute;
