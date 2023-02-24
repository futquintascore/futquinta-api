import { IUsersRepository } from './../../repositories/IUsersRepository';
export class FindUserByTokenUseCase {
  constructor(private UsersRepository: IUsersRepository) {}
  async execute(token: string) {
    return await this.UsersRepository.getMe(token);
  }
}
