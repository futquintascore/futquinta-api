import { IGamesRepository } from './../../repositories/IGamesRepository';
export class FindAllGamesUseCase {
  constructor(private GamesRepository: IGamesRepository) {}
  async execute(filter?: unknown) {
    return await this.GamesRepository.list(filter);
  }
}
