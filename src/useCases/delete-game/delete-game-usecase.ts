import { IGamesRepository } from './../../repositories/IGamesRepository';
export class DeleteGameUseCase {
  constructor(private GamesRepository: IGamesRepository) {}
  async execute(id: number) {
    return await this.GamesRepository.delete(id);
  }
}
