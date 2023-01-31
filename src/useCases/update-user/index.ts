import { UpdateUserController } from './update-user-controller';
import { UpdateUserUseCase } from './update-user-usercase';
import { PostgressUsersRepository } from '../../repositories/PostgresUsersRepository';

const postgresUsersRepository = new PostgressUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController, updateUserUseCase };
