import { Team } from '../../../index';
import { IGamesRepository } from '../../repositories/IGamesRepository';

export class DecrementGoalsUseCase {
  constructor(private GamesRepository: IGamesRepository) {}
  async execute(id: number, team: Team) {
    return await this.GamesRepository.decrementGoals(id, team);
  }
}
