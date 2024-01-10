import { IRankingsRepository } from './../../repositories/IRankingsRepository';
export class GetGoalkeepersRankingUseCase {
  constructor(private RankingsRepository: IRankingsRepository) {}

  async execute() {
    const ranking = await this.RankingsRepository.getGoalkeepersRanking();

    return ranking;
  }
}
