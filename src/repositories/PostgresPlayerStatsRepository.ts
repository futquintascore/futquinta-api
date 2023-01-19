import { PlayerStats } from './../entities/PlayerStats';
import { IPlayerStatsRepository } from './IPlayerStatsRepository';
import { prisma, GameModel, PlayersStats } from '../services/prismaClient';

import { Game } from '../entities/Game';
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
      throw new Error('generic Error');
    }
  }
  async save(gameId: number, playerData: any): Promise<string> {
    try {
      await prisma.$transaction(async (ctx) => {
        const { status } = await ctx.game.findUniqueOrThrow({
          where: {
            id: gameId,
          },
        });

        if (status === 'IN_PROGRESS' || status === 'FINISHED') {
          throw new Error('Unable to add players to the game');
        }

        for await (const player of playerData) {
          await ctx.game.update({
            where: {
              id: gameId,
            },
            data: {
              players: {
                create: {
                  name: player.name,
                  playerId: player.id,
                  currentTeam: player.currentTeam,
                  assists: 0,
                  goals: 0,
                  substituition: 0,
                },
              },
            },
          });
        }
        await ctx.game.update({
          where: {
            id: gameId,
          },
          data: {
            status: 'IN_PROGRESS',
          },
        });
      });

      return 'sucess';
    } catch (err) {
      console.log(err);
      throw new Error('Gereic Error');
    }
  }
  async update(gameId: number, statId: number, _reqBody: any): Promise<Game> {
    try {
      const updatedPlayer = await GameModel.update({
        where: {
          id: gameId,
        },
        data: {
          players: {
            update: {
              where: {
                id: statId,
              },
              data: { ..._reqBody },
            },
          },
        },
      });
      return updatedPlayer;
    } catch (err) {
      throw new Error('Generic Error');
    }
  }
}
