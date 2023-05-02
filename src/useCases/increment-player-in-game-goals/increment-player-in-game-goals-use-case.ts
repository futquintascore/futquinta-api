import { IPlayerStatsRepository } from '../../repositories/IPlayerStatsRepository';

export class IncrementPlayerInGameGoalsUseCase {
  constructor(private StatsRepository: IPlayerStatsRepository) {}

  async execute(id: number) {
    return await this.StatsRepository.incrementGoals(id);
  }
}
