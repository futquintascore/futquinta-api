import { IGetTokenDTO } from './../useCases/get-token/get-token-DTO';
import { IUpdateUserDTO } from '../useCases/update-user/update-user-dto';
import { User } from './../entities/User';
import { TokenResponse } from './PostgresUsersRepository';
export interface IUsersRepository {
  save(data: User): Promise<User>;
  update(id: number, data: IUpdateUserDTO): Promise<User>;
  delete(id: number): Promise<User>;
  getToken(data: IGetTokenDTO): Promise<TokenResponse>;
}
