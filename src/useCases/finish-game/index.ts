import { FinishGameUseCase } from './finish-game-usecase';
import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';
import { FinishGameController } from './finish-game-controller';

const postgresGameRepository = new PostgresGameRepository();

const finishGameUseCase = new FinishGameUseCase(postgresGameRepository);

const finishGameController = new FinishGameController(finishGameUseCase);

export { finishGameController, finishGameUseCase };
