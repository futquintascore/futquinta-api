import { IUsersRepository } from './../../repositories/IUsersRepository';
export class DeleteUserUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute(id: number) {
    return await this.UsersRepository.delete(id);
  }
}
