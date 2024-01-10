import { IRankingsRepository } from './../../repositories/IRankingsRepository';
export class GetRecordRankingUseCase {
  constructor(private RankingsRepository: IRankingsRepository) {}

  async execute() {
    const ranking = await this.RankingsRepository.getRecordRanking();

    return ranking;
  }
}
