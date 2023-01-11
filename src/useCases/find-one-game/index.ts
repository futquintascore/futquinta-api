import { PostgresGameRepository } from './../../repositories/PostgresGameRepository';
import { FindOneGameUseCase } from './find-one-game-usecase';

import { FindOneGameController } from './find-one-game-controller';

const postgresGameRepository = new PostgresGameRepository();
const findOneGameUseCase = new FindOneGameUseCase(postgresGameRepository);

const findOneGameController = new FindOneGameController(findOneGameUseCase);

export { findOneGameController, findOneGameUseCase };
