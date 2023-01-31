import { IGetTokenDTO } from './get-token-DTO';
import { IUsersRepository } from './../../repositories/IUsersRepository';

export class GetTokenUseCase {
  constructor(private UsersRepository: IUsersRepository) {}

  async execute({ email, password }: IGetTokenDTO) {
    return await this.UsersRepository.getToken({ email, password });
  }
}
