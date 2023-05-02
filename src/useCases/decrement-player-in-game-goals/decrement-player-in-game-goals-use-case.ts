import { IPlayerStatsRepository } from '../../repositories/IPlayerStatsRepository';

export class DecrementPlayerInGameGoalsUseCase {
  constructor(private StatsRepository: IPlayerStatsRepository) {}

  async execute(id: number) {
    return await this.StatsRepository.decrementGoals(id);
  }
}
