import { DeleteUserUseCase } from './delete-user-usecase';
import { PostgressUsersRepository } from '../../repositories/PostgresUsersRepository';
import { DeleteUserController } from './delete-user-controlelr';

const postgresUsersRepository = new PostgressUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepository);

const deleteUsetController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUsetController };
