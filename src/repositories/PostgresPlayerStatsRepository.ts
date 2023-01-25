import { PlayerStats } from './../entities/PlayerStats';
import { IPlayerStatsRepository } from './IPlayerStatsRepository';
import { prisma, GameModel, PlayersStats } from '../services/prismaClient';
type PlayerData = {
  id: number;
  name: string;
  currentTeam: 'GREEN' | 'WHITE';
  function: 'GOALKEEPER' | 'OUTFIELDPLAYER';
};
import { Game } from '../entities/Game';
import { Prisma } from '@prisma/client';
import { updatePlayerStats } from '../functions/update-player-stat';
export class PostgresPlayerStatsRepository implements IPlayerStatsRepository {
  async delete(statId: number): Promise<PlayerStats> {
    try {
      const deletedPlayer = await PlayersStats.delete({
        where: {
          id: statId,
        },
      });
      return deletedPlayer;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Unable to find game in the database');
      }
      throw err;
    }
  }
  async save(gameId: number, playerData: PlayerData[]): Promise<Game> {
    try {
      const currentGameUpdated = await prisma.$transaction(async (ctx) => {
        const { status } = await ctx.game.findUniqueOrThrow({
          where: {
            id: gameId,
          },
        });

        if (status === 'IN_PROGRESS' || status === 'FINISHED') {
          throw new Error('Unable to add players to the game');
        }
        const playersMap = playerData.map((player: PlayerData) => {
          return {
            name: player.name,
            assists: 0,
            goals: 0,
            substituition: 0,
            currentTeam: player.currentTeam,
            playerId: player.id,
            function: player.function ?? 'OUTFIELDPLAYER',
          };
        });
        await ctx.game.update({
          where: {
            id: gameId,
          },
          data: {
            players: {
              createMany: {
                data: playersMap,
              },
            },
          },
          include: {
            players: {
              include: {
                player: true,
              },
            },
          },
        });

        const currentGame = await ctx.game.update({
          where: {
            id: gameId,
          },
          data: {
            status: 'IN_PROGRESS',
          },
          include: {
            players: {
              include: {
                player: true,
              },
            },
          },
        });
        return currentGame;
      });

      return currentGameUpdated;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async update(gameId: number, statId: number, _reqBody: any): Promise<Game> {
    try {
      const currentGame = await updatePlayerStats(gameId, statId, _reqBody);
      return currentGame;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Unable to find playerstat in the database');
      }
      throw err;
    }
  }
}
