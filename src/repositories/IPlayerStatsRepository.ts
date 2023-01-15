import { PlayerStats } from '../entities/PlayerStats';

export interface IPlayerStatsRepository {
  save(gameId: number, playerData: any): Promise<string>;
  //update(gameId: number, statId: number): Promise<PlayerStats>;
}
