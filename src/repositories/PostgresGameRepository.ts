import { Game } from '../entities/Game';
import { GameModel } from '../services/prismaClient';
import { IGamesRepository } from './IGamesRepository';
export class PostgresGameRepository implements IGamesRepository {
  async listById(id: number): Promise<Game> {
    try {
      const singleGame = await GameModel.findUniqueOrThrow({
        where: { id },
      });
      return singleGame;
    } catch (err) {
      throw new Error('Generic error');
    }
  }
  async save(data: Game): Promise<Game> {
    try {
      const newGame = await GameModel.create({
        data: {
          whiteGoals: data.whiteGoals,
          greenGoals: data.greenGoals,
        },
      });
      return newGame;
    } catch (err) {
      console.log(err);
      throw new Error('generic error');
    }
  }
  async list(
    filter?: 'in_progress' | 'not_started' | 'finished' | undefined
  ): Promise<Game[]> {
    try {
      if (filter === 'in_progress') {
        const gamesList = await GameModel.findMany({
          where: {
            status: 'IN_PROGRESS',
          },
        });
        return gamesList;
      }

      if (filter === 'not_started') {
        const gamesList = await GameModel.findMany({
          where: {
            status: 'NOT_STARTED',
          },
        });
        return gamesList;
      }

      if (filter === 'finished') {
        const gamesList = await GameModel.findMany({
          where: {
            status: 'FINISHED',
          },
        });
        return gamesList;
      }

      const gamesList = await GameModel.findMany();
      return gamesList;
    } catch (err) {
      console.log(err);
      throw new Error('gerenic error message');
    }
  }
}
