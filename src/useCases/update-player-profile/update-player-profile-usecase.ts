import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class UpdatePlayerProfileUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number, _reqBody: unknown) {
    return await this.PlayerProfileRepository.update(id, _reqBody);
  }
}
