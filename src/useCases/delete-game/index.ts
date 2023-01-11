import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';
import { DeleteGameController } from './delete-game-controller';

import { DeleteGameUseCase } from './delete-game-usecase';
const postgresGameRepository = new PostgresGameRepository();

const deleteGameUseCase = new DeleteGameUseCase(postgresGameRepository);

const deleteGameController = new DeleteGameController(deleteGameUseCase);

export { deleteGameController, deleteGameUseCase };
