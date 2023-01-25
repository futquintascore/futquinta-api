import { PlayerProfile } from '../entities/PlayerProfile';
export interface IPlayerProfileRepository {
  save(player: PlayerProfile): Promise<PlayerProfile>;
  list(): Promise<PlayerProfile[]>;
  listById(id: number): Promise<PlayerProfile>;
  update(id: number, _reqBody: any): Promise<PlayerProfile>;
  delete(id: number): Promise<PlayerProfile>;
  incrementMOTMScore(id: number): Promise<PlayerProfile>;
}
