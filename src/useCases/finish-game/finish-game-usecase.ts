import { IGamesRepository } from './../../repositories/IGamesRepository';
export class FinishGameUseCase {
  constructor(private GameRepository: IGamesRepository) {}
  async execute(id: number, whiteGoals: number, greenGoals: number) {
    return await this.GameRepository.finishGame(id, whiteGoals, greenGoals);
  }
}
