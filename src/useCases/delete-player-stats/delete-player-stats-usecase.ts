import { IPlayerStatsRepository } from './../../repositories/IPlayerStatsRepository';
export class DeletePlayerStatsUseCase {
  constructor(private PlayerStatsRepository: IPlayerStatsRepository) {}

  async execute(statId: number) {
    return await this.PlayerStatsRepository.delete(statId);
  }
}
