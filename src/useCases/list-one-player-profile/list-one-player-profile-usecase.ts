import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class ListOnePlayerProfileUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number) {
    return await this.PlayerProfileRepository.listById(id);
  }
}
