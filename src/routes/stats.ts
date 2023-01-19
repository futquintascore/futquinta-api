import { updatePlayerStatsController } from './../useCases/update-player-stats/index';
import { Router } from 'express';

import { createPlayerStatsController } from '../useCases/create-player-stats';
import { deletePlayerStatController } from '../useCases/delete-player-stats';

const statRoute = Router();

statRoute.post('/:gameId', (req, res) => {
  return createPlayerStatsController.handle(req, res);
});

statRoute.put('/:gameId/:statId', (req, res) => {
  return updatePlayerStatsController.handle(req, res);
});
statRoute.delete('/:id', (req, res) => {
  return deletePlayerStatController.handle(req, res);
});

export default statRoute;
