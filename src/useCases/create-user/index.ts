import { CreateUserController } from './create-user-controller';
import { CreateUserUseCase } from './create-user-usecase';
import { PostgressUsersRepository } from './../../repositories/PostgresUsersRepository';

const postgresUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
