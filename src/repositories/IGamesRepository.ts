import { Game } from '../entities/Game';

export interface IGamesRepository {
  save(gameData: Game): Promise<Game>;
  list(filter?: unknown): Promise<Game[]>;
  // listById(id: number): Promise<PlayerProfile>;
  // update(id: number, _reqBody: any): Promise<PlayerProfile>;
  // delete(id: number): Promise<PlayerProfile>;
  // addPlayerStatsToPlayerProfile(
  //   id: number,
  //   gameId: number
  // ): Promise<PlayerProfile>;
}
