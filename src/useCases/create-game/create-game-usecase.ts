import { Game } from '../../entities/Game';
import { IGamesRepository } from './../../repositories/IGamesRepository';
import { IGamesRepositoryDTO } from './create-game-dto';
export class CreateGameUseCase {
  constructor(private GamesRepository: IGamesRepository) {}

  async execute({
    whiteGoals,
    greenGoals,
    gameDate,
    fixture,
  }: IGamesRepositoryDTO): Promise<Game> {
    if (!fixture) throw new Error('É necessário informar rodada');
    return await this.GamesRepository.save({
      greenGoals,
      whiteGoals,
      gameDate,
      fixture,
    });
  }
}
