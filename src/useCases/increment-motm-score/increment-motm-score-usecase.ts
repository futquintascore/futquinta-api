import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
// MOTM = Man of the match

export class IncrementPlayerMOTMScoreUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number) {
    return await this.PlayerProfileRepository.incrementMOTMScore(id);
  }
}
