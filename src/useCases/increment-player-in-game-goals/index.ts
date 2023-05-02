import { IncrementPlayerInGameGoalController } from './increment-player-in-game-goals-controller';
import { IncrementPlayerInGameGoalsUseCase } from './increment-player-in-game-goals-use-case';
import { PrismaPlayerStatsRepository } from '../../repositories/prisma/PrismaPlayerStatsRepository';

const repository = new PrismaPlayerStatsRepository();

const incrementPlayerInGameGoalsUseCase = new IncrementPlayerInGameGoalsUseCase(
  repository
);

const incrementPlayerInGameGoalsController = new IncrementPlayerInGameGoalController(
  incrementPlayerInGameGoalsUseCase
);

export { incrementPlayerInGameGoalsUseCase, incrementPlayerInGameGoalsController };
