import { PostgresGameRepository } from './../../repositories/PostgresGameRepository';
import { IncrementGoalsUseCase } from './increment-goals-usecase';
import { IncrementGoalsController } from './increment-goals-controller';

const postgresGameRepository = new PostgresGameRepository();

const incrementGoalsUseCase = new IncrementGoalsUseCase(postgresGameRepository);

const incrementGoalsController = new IncrementGoalsController(incrementGoalsUseCase);

export { incrementGoalsController, incrementGoalsUseCase };
