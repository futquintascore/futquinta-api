import { IGamesRepository } from './../../repositories/IGamesRepository';
export class IncrementGoalsUseCase {
  constructor(private GamesRepository: IGamesRepository) {}

  async execute(id: number, currentTeam: 'WHITE' | 'GREEN') {
    return this.GamesRepository.incrementGoals(id, currentTeam);
  }
}
