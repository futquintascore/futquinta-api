import { IPlayerStatsRepository } from './IPlayerStatsRepository';
import { prisma } from '../services/prismaClient';
export class PostgresPlayerStatsRepository implements IPlayerStatsRepository {
  async save(gameId: number, playerData: any): Promise<string> {
    try {
      console.log(playerData.players);
      await prisma.$transaction(async (ctx) => {
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
      });

      return 'sucess';
    } catch (err) {
      console.log(err);
      throw new Error('Gereic Error');
    }
  }
}
