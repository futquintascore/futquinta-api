import { DeletePlayerStatController } from './delete-player-stats-controller';
import { DeletePlayerStatsUseCase } from './delete-player-stats-usecase';
import { PostgresPlayerStatsRepository } from '../../repositories/PostgresPlayerStatsRepository';

const postgressPlayerStatsRepository = new PostgresPlayerStatsRepository();

const deletePlayerStatUseCase = new DeletePlayerStatsUseCase(
  postgressPlayerStatsRepository
);
const deletePlayerStatController = new DeletePlayerStatController(
  deletePlayerStatUseCase
);

export { deletePlayerStatController, deletePlayerStatUseCase };
