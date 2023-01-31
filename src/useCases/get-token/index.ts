import { PostgressUsersRepository } from './../../repositories/PostgresUsersRepository';
import { GetTokenUseCase } from './get-token-usecase';
import { GetTokenController } from './get-token-controller';

const postgresUsersRepository = new PostgressUsersRepository();

const getTokenUseCase = new GetTokenUseCase(postgresUsersRepository);

const getTokenController = new GetTokenController(getTokenUseCase);

export { getTokenController, getTokenUseCase };
