import { Router } from 'express';
import { createGameController } from '../useCases/create-game';

const gameRouter = Router();

gameRouter.post('/', (req, res) => {
  return createGameController.handle(req, res);
});

export default gameRouter;
