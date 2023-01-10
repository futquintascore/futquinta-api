import { Game } from '../entities/Game';
import { GameModel } from '../services/prismaClient';
import { IGamesRepository } from './IGamesRepository';
export class PostgresGameRepository implements IGamesRepository {
  async save({ whiteGoals, greenGoals }: Game): Promise<Game> {
    try {
      const newGame = await GameModel.create({
        data: {
          whiteGoals,
          greenGoals,
        },
      });
      return newGame;
    } catch (err) {
      console.log(err);
      throw new Error('generic error');
    }
  }
}
