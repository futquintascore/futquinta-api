import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class DeletePlayerProfileUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number) {
    return await this.PlayerProfileRepository.delete(id);
  }
}
