import { IGamesRepository } from './../../repositories/IGamesRepository';
export class FindOneGameUseCase {
  constructor(private GamesRepository: IGamesRepository) {}

  async execute(id: number) {
    return this.GamesRepository.listById(id);
  }
}
