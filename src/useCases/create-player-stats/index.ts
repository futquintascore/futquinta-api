import { CreatePlayerStatsController } from './create-player-stats-controller';
import { CreatePlayerStatsUseCase } from './create-player-stats-usecase';
import { PostgresPlayerStatsRepository } from '../../repositories/PostgresPlayerStatsRepository';

const postgresPlayerStatsRepository = new PostgresPlayerStatsRepository();

const createPlayerStatsUseCase = new CreatePlayerStatsUseCase(
  postgresPlayerStatsRepository
);

const createPlayerStatsController = new CreatePlayerStatsController(
  createPlayerStatsUseCase
);

export { createPlayerStatsController, createPlayerStatsUseCase };
