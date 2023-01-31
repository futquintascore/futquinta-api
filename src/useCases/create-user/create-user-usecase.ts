import { IUsersDTO } from './create-user-dto';

import { IUsersRepository } from './../../repositories/IUsersRepository';
import { hashPassword } from '../../functions/hash-passowrd';
export class CreateUserUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute({ email, password: rawPassword }: IUsersDTO) {
    const password = await hashPassword(rawPassword);

    return await this.UsersRepository.save({ email, password });
  }
}
