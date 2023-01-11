import { UpdateGameController } from './update-game-controller';
import { PostgresGameRepository } from './../../repositories/PostgresGameRepository';
import { UpdateGameUseCase } from './update-game-usecase';
const postgresGameRepository = new PostgresGameRepository();

const updateGameUseCase = new UpdateGameUseCase(postgresGameRepository);

const updateGameController = new UpdateGameController(updateGameUseCase);

export { updateGameController, updateGameUseCase };
