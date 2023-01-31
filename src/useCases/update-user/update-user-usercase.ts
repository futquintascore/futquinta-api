import { IUsersRepository } from './../../repositories/IUsersRepository';
import { IUpdateUserDTO } from './update-user-dto';
export class UpdateUserUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute(id: number, data: IUpdateUserDTO) {
    return await this.UsersRepository.update(id, data);
  }
}
