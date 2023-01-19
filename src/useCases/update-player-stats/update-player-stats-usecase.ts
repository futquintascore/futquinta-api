import { IPlayerStatsRepository } from './../../repositories/IPlayerStatsRepository';
export class UpdatePlayerStatsUseCase {
  constructor(private PlayerStatsRepository: IPlayerStatsRepository) {}

  async execute(gameId: number, statId: number, _reqBody: any) {
    return await this.PlayerStatsRepository.update(gameId, statId, _reqBody);
  }
}
