import { PrismaPlayerStatsRepository } from './../../repositories/prisma/PrismaPlayerStatsRepository';
import { UpdatePlayerStatsController } from './update-player-stats-controller';
import { UpdatePlayerStatsUseCase } from './update-player-stats-usecase';

const postgressPlayerStatsRepository = new PrismaPlayerStatsRepository();

const updatePlayerStatsUseCase = new UpdatePlayerStatsUseCase(
  postgressPlayerStatsRepository
);

const updatePlayerStatsController = new UpdatePlayerStatsController(
  updatePlayerStatsUseCase
);

export { updatePlayerStatsController, updatePlayerStatsUseCase };
