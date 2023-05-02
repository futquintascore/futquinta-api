import { Team } from './../../index.d';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  save(gameData: Game): Promise<Game>;
  list(filter?: unknown): Promise<Game[]>;
  listById(id: number): Promise<Game>;
  update(id: number, _reqBody: unknown): Promise<Game>;
  delete(id: number): Promise<Game>;
  finishGame(id: number, winnerTeam: 'GREEN' | 'WHITE' | 'DRAW'): Promise<Game>;
  setGamePicture(id: number, imageUrl: string): Promise<Game>;
  incrementGoals(id: number, team: Team): Promise<Game>;
  decrementGoals(id: number, team: Team): Promise<Game>;
}
