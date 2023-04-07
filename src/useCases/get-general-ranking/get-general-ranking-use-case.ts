import { IRankingsRepository } from './../../repositories/IRankingsRepository';
export class GetGeneralRankingUseCase {
  constructor(private RankingsRepository: IRankingsRepository) {}

  async execute() {
    const ranking = await this.RankingsRepository.getRanking();

    return ranking;
  }
}
