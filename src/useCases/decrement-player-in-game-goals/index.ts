import { DecrementPlayerInGameGoalController } from './decrement-player-in-game-goals-controller';
import { DecrementPlayerInGameGoalsUseCase } from './decrement-player-in-game-goals-use-case';
import { PrismaPlayerStatsRepository } from '../../repositories/prisma/PrismaPlayerStatsRepository';

const repository = new PrismaPlayerStatsRepository();

const decrementPlayerInGameGoalsUseCase = new DecrementPlayerInGameGoalsUseCase(
  repository
);

const decrementPlayerInGameGoalsController = new DecrementPlayerInGameGoalController(
  decrementPlayerInGameGoalsUseCase
);

export { decrementPlayerInGameGoalsUseCase, decrementPlayerInGameGoalsController };
