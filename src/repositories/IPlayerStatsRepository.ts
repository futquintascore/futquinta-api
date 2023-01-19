import { PlayerStats } from '../entities/PlayerStats';
import { Game } from './../entities/Game';

export interface IPlayerStatsRepository {
  save(gameId: number, playerData: any): Promise<string>;
  update(gameId: number, statId: number, _reqBody: any): Promise<Game>;
  delete(statId: number): Promise<PlayerStats>;
}
