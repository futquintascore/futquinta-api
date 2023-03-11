import { CreatePlayerStatsController } from './create-player-stats-controller';
import { CreatePlayerStatsUseCase } from './create-player-stats-usecase';
import { PrismaPlayerStatsRepository } from '../../repositories/prisma/PrismaPlayerStatsRepository';

const postgresPlayerStatsRepository = new PrismaPlayerStatsRepository();

const createPlayerStatsUseCase = new CreatePlayerStatsUseCase(
  postgresPlayerStatsRepository
);

const createPlayerStatsController = new CreatePlayerStatsController(
  createPlayerStatsUseCase
);

export { createPlayerStatsController, createPlayerStatsUseCase };
