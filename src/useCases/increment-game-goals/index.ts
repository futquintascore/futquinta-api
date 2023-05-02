import { IncrementGoalsUseCase } from './increment-game-goals-use-case';
import { IncrementGoalsController } from './increment-game-goals-controller';
import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';

const repository = new PostgresGameRepository();

const incrementGoalsUseCase = new IncrementGoalsUseCase(repository);

const incrementGoalsController = new IncrementGoalsController(incrementGoalsUseCase);

export { incrementGoalsUseCase, incrementGoalsController };
