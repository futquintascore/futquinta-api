import { IAddPlayerToGameDTO } from './../../useCases/add-player-to-game/add-player-to-game-dto';
import { PlayerStats } from './../../entities/PlayerStats';
import { IPlayerStatsRepository } from './../IPlayerStatsRepository';
import { prisma } from '../../services/prismaClient';
type PlayerData = {
  id: number;
  name: string;
  currentTeam: 'GREEN' | 'WHITE';
  function: 'GOALKEEPER' | 'OUTFIELDPLAYER';
};
import { Game } from '../../entities/Game';
import { Prisma } from '@prisma/client';
import { updatePlayerStats } from '../../functions/update-player-stat';
export class PrismaPlayerStatsRepository implements IPlayerStatsRepository {
  async addToGame({
    name,
    currentTeam,
    gameId,
    playerId,
    function: playerFunction,
  }: IAddPlayerToGameDTO): Promise<PlayerStats> {
    try {
      const newPlayer = await prisma.playerStats.create({
        data: {
          name,
          playerId,
          gameId,
          currentTeam,
          function: playerFunction,
          goals: 0,
          assists: 0,
          substituition: 0,
          goalsConceded: 0,
        },
      });

      return newPlayer;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async delete(statId: number): Promise<PlayerStats> {
    try {
      const data = await prisma.$transaction(
        async (ctx) => {
          const { id, playerId, goals, Game, currentTeam } =
            await ctx.playerStats.findUniqueOrThrow({
              where: {
                id: statId,
              },
              include: {
                Game: true,
              },
            });
          if (Game?.winnerTeam === currentTeam) {
            await ctx.playerProfile.update({
              where: {
                id: playerId,
              },
              data: {
                goals: { decrement: goals },
                victories: { decrement: 1 },
              },
            });
            return await ctx.playerStats.delete({
              where: {
                id,
              },
            });
          }
          if (Game?.winnerTeam !== currentTeam && Game?.winnerTeam !== 'DRAW') {
            await ctx.playerProfile.update({
              where: {
                id: playerId,
              },
              data: {
                goals: { decrement: goals },
                defeats: { decrement: 1 },
              },
            });
            return await ctx.playerStats.delete({
              where: {
                id,
              },
            });
          }
          await ctx.playerProfile.update({
            where: {
              id: playerId,
            },
            data: {
              goals: { decrement: goals },
              draws: { decrement: 1 },
            },
          });
          return await ctx.playerStats.delete({
            where: {
              id,
            },
          });
        },
        {
          timeout: 10000,
        }
      );
      return data;
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
