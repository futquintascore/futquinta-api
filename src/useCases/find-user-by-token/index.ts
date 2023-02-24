import { FindUserByTokenUseCase } from './find-user-by-token-usecase';
import { FindUserByTokenController } from './find-user-by-token-controller';
import { PostgressUsersRepository } from '../../repositories/PostgresUsersRepository';

const postgreUsersRepository = new PostgressUsersRepository();

const findUserByTokenUseCase = new FindUserByTokenUseCase(postgreUsersRepository);
const findUserByTokenController = new FindUserByTokenController(findUserByTokenUseCase);

export { findUserByTokenController, findUserByTokenUseCase };
