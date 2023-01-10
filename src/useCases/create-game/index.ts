import { CreateGameUseCase } from './create-game-usecase';
import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';
import { CreateGameController } from './create-game-controller';

const postgresGameRepository = new PostgresGameRepository();

const createGameUseCase = new CreateGameUseCase(postgresGameRepository);

const createGameController = new CreateGameController(createGameUseCase);

export { createGameController, createGameUseCase };
