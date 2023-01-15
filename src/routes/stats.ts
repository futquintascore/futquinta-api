import { Router } from 'express';
import { createPlayerProfileController } from '../useCases/create-player-profile';
import { createPlayerStatsController } from '../useCases/create-player-stats';

const statRoute = Router();

statRoute.post('/:gameId', (req, res) => {
  return createPlayerStatsController.handle(req, res);
});

statRoute.put('/:gameId/:statId', (req, res) => {
  res.json('update stat route');
});

export default statRoute;
