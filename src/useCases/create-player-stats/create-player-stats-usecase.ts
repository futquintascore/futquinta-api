import { ICreatePlayerStatsDTO } from './create-player-stats-dto';
import { IPlayerStatsRepository } from '../../repositories/IPlayerStatsRepository';

export class CreatePlayerStatsUseCase {
  constructor(private CreatePlayerStats: IPlayerStatsRepository) {}

  async execute(gameId: number, playerData: ICreatePlayerStatsDTO) {
    return await this.CreatePlayerStats.save(gameId, playerData);
  }
}
