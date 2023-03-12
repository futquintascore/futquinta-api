import { PlayerStats } from './../../entities/PlayerStats';
import { IPlayerStatsRepository } from './../../repositories/IPlayerStatsRepository';
import { IAddPlayerToGameDTO } from './add-player-to-game-dto';
export class AddPlayerToGameUseCase {
  constructor(private PlayerStatsRepository: IPlayerStatsRepository) {}

  async execute({
    name,
    playerId,
    currentTeam,
    function: playerFunction,
    gameId,
  }: IAddPlayerToGameDTO) {
    return await this.PlayerStatsRepository.addToGame({
      name,
      currentTeam,
      playerId,
      gameId,
      function: playerFunction,
    });
  }
}
