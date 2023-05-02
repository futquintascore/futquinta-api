import { DecrementGoalsUseCase } from './decrement-game-goals-use-case';
import { DecrementGoalsController } from './decrement-game-goals-controller';
import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';

const repository = new PostgresGameRepository();

const decrementGoalsUseCase = new DecrementGoalsUseCase(repository);

const decrementGoalsController = new DecrementGoalsController(decrementGoalsUseCase);

export { decrementGoalsUseCase, decrementGoalsController };
