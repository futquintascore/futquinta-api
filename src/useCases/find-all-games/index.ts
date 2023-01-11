import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';
import { FindAllGameController } from './find-all-games-controller';
import { FindAllGamesUseCase } from './find-all-games-usecase';
const postgresGameRepository = new PostgresGameRepository();

const findAllGamesUseCase = new FindAllGamesUseCase(postgresGameRepository);

const findAllGamesController = new FindAllGameController(findAllGamesUseCase);

export { findAllGamesController, findAllGamesUseCase };
