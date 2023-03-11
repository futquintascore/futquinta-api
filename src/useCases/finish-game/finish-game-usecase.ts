import { IGamesRepository } from './../../repositories/IGamesRepository';
export class FinishGameUseCase {
  constructor(private GameRepository: IGamesRepository) {}
  async execute(id: number, winnerTeam: 'GREEN' | 'WHITE' | 'DRAW') {
    return await this.GameRepository.finishGame(id, winnerTeam);
  }
}
