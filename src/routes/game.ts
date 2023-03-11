import { Router } from 'express';
import { createGameController } from '../useCases/create-game';
import { deleteGameController } from '../useCases/delete-game';
import { findAllGamesController } from '../useCases/find-all-games';
import { findOneGameController } from '../useCases/find-one-game';
import { updateGameController } from '../useCases/update-game';
import { finishGameController } from '../useCases/finish-game';
import { authMiddleware } from '../middlewares/auth';

const gameRouter = Router();
//*List
gameRouter.get('/', (req, res) => {
  return findAllGamesController.handle(req, res);
});
//*List one
gameRouter.get('/:id', (req, res) => {
  return findOneGameController.handle(req, res);
});

//*Create
gameRouter.post(
  '/',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return createGameController.handle(req, res);
  }
);

//* Update

gameRouter.put(
  '/:id',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return updateGameController.handle(req, res);
  }
);

gameRouter.delete(
  '/:id',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return deleteGameController.handle(req, res);
  }
);

gameRouter.post(
  '/:id/finish',
  (req, res, next) => {
    return authMiddleware.handle(req, res, next);
  },
  (req, res) => {
    return finishGameController.handle(req, res);
  }
);

export default gameRouter;
