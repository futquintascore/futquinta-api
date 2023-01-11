import { IGamesRepository } from './../../repositories/IGamesRepository';
export class UpdateGameUseCase {
  constructor(private GamesRepository: IGamesRepository) {}
  async execute(id: number, _reqBody: unknown) {
    return this.GamesRepository.update(id, _reqBody);
  }
}
