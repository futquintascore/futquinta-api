import { Router } from 'express';
import { createGameController } from '../useCases/create-game';
import { findAllGamesController } from '../useCases/find-all-games';
import { findOneGameController } from '../useCases/find-one-game';

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
gameRouter.post('/', (req, res) => {
  return createGameController.handle(req, res);
});

export default gameRouter;
