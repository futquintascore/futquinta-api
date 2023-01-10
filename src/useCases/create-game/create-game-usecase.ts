import { Game } from '../../entities/Game';
import { IGamesRepository } from './../../repositories/IGamesRepository';
import { IGamesRepositoryDTO } from './create-game-dto';
export class CreateGameUseCase {
  constructor(private GamesRepository: IGamesRepository) {}

  async execute({ whiteGoals, greenGoals }: IGamesRepositoryDTO): Promise<Game> {
    return await this.GamesRepository.save({
      greenGoals,
      whiteGoals,
    });
  }
}
