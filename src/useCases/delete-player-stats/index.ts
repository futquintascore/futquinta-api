import { DeletePlayerStatController } from './delete-player-stats-controller';
import { DeletePlayerStatsUseCase } from './delete-player-stats-usecase';
import { PrismaPlayerStatsRepository } from '../../repositories/prisma/PrismaPlayerStatsRepository';

const postgressPlayerStatsRepository = new PrismaPlayerStatsRepository();

const deletePlayerStatUseCase = new DeletePlayerStatsUseCase(
  postgressPlayerStatsRepository
);
const deletePlayerStatController = new DeletePlayerStatController(
  deletePlayerStatUseCase
);

export { deletePlayerStatController, deletePlayerStatUseCase };
