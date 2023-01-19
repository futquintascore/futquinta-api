import { UpdatePlayerStatsController } from './update-player-stats-controller';
import { PostgresPlayerStatsRepository } from '../../repositories/PostgresPlayerStatsRepository';
import { UpdatePlayerStatsUseCase } from './update-player-stats-usecase';

const postgressPlayerStatsRepository = new PostgresPlayerStatsRepository();

const updatePlayerStatsUseCase = new UpdatePlayerStatsUseCase(
  postgressPlayerStatsRepository
);

const updatePlayerStatsController = new UpdatePlayerStatsController(
  updatePlayerStatsUseCase
);

export { updatePlayerStatsController, updatePlayerStatsUseCase };
