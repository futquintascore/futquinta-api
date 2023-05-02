/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import { Game } from '../entities/Game';
import { finishGameFunction } from '../functions/finish-game';

import { GameModel, MOTMModel } from '../services/prismaClient';
import { IGamesRepository } from './IGamesRepository';
import { Team } from './../../index.d';
export class PostgresGameRepository implements IGamesRepository {
  async decrementGoals(id: number, team: Team): Promise<Game> {
    try {
      if (team === 'WHITE') {
        const data = await GameModel.update({
          where: {
            id,
          },
          data: {
            whiteGoals: {
              decrement: 1,
            },
          },
        });
        return data;
      }
      const data = await GameModel.update({
        where: {
          id,
        },
        data: {
          greenGoals: {
            decrement: 1,
          },
        },
      });
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async incrementGoals(id: number, team: Team): Promise<Game> {
    try {
      if (team === 'WHITE') {
        const data = await GameModel.update({
          where: {
            id,
          },
          data: {
            whiteGoals: {
              increment: 1,
            },
          },
        });
        return data;
      }
      const data = await GameModel.update({
        where: {
          id,
        },
        data: {
          greenGoals: {
            increment: 1,
          },
        },
      });
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async setGamePicture(id: number, imageUrl: string): Promise<Game> {
    try {
      const newPicture = await GameModel.update({
        where: {
          id,
        },
        data: {
          gamePicture: imageUrl,
        },
      });

      return newPicture;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async finishGame(id: number, winnerTeam: 'GREEN' | 'WHITE' | 'DRAW'): Promise<Game> {
    try {
      const finishedGame = await finishGameFunction(id, winnerTeam);

      return finishedGame;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async delete(id: number): Promise<Game> {
    try {
      const deletedGame = await GameModel.delete({
        where: { id },
        include: {
          MOTM: true,
        },
      });
      for await (const manOfTheMatch of deletedGame.MOTM) {
        await MOTMModel.delete({
          where: {
            id: manOfTheMatch.id,
          },
        });
      }
      return deletedGame;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Unable to find game in the database');
      }
      throw err;
    }
  }
  async update(id: number, _reqBody: any): Promise<Game> {
    try {
      const updatedGame = await GameModel.update({
        where: { id },
        data: { ..._reqBody },
      });
      return updatedGame;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Unable to find game in the database');
      }
      throw new Error('Unknow argument passed');
    }
  }
  async listById(id: number): Promise<Game> {
    try {
      const singleGame = await GameModel.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          MOTM: {
            include: {
              player: true,
            },
          },
          _count: true,
          players: {
            include: {
              Game: true,
              player: true,
            },
          },
        },
      });

      return singleGame;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Unable to find game in the database');
      }
      throw err;
    }
  }
  async save({ whiteGoals = 0, greenGoals = 0 }: Game): Promise<Game> {
    try {
      const newGame = await GameModel.create({
        data: {
          whiteGoals,
          greenGoals,
          status: 'NOT_STARTED',
        },
      });
      return newGame;
    } catch (err) {
      throw new Error('Internal Server Error');
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
          orderBy: {
            createdAt: 'desc',
          },
        });
        return gamesList;
      }

      if (filter === 'not_started') {
        const gamesList = await GameModel.findMany({
          where: {
            status: 'NOT_STARTED',
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
        return gamesList;
      }

      if (filter === 'finished') {
        const gamesList = await GameModel.findMany({
          where: {
            status: 'FINISHED',
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
        return gamesList;
      }

      const gamesList = await GameModel.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return gamesList;
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }
}
