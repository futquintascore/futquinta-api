import { prisma } from '../services/prismaClient';
export type PlayerStatsData = {
  goals: number;
  assists: number;
  substituition: number;
  goalsConceded: number;
};
export async function updatePlayerStats(
  gameId: number,
  statId: number,
  { goals, assists, substituition, goalsConceded }: PlayerStatsData
) {
  return await prisma.$transaction(async (ctx) => {
    const currentPlayerStat = await ctx.playerStats.findUniqueOrThrow({
      where: {
        id: statId,
      },
    });

    if (currentPlayerStat.function === 'GOALKEEPER') {
      const currentStatUpdated = await ctx.game.update({
        where: {
          id: gameId,
        },
        data: {
          players: {
            update: {
              where: {
                id: statId,
              },
              data: {
                goalsConceded,
              },
            },
          },
        },
      });
      return currentStatUpdated;
    }

    if (currentPlayerStat.function === 'OUTFIELDPLAYER') {
      const currentStatUpdated = await ctx.game.update({
        where: {
          id: gameId,
        },
        data: {
          players: {
            update: {
              where: {
                id: statId,
              },
              data: {
                goals,
                assists,
                substituition,
              },
            },
          },
        },
      });
      return currentStatUpdated;
    }
    const currentGame = await ctx.game.findUniqueOrThrow({
      where: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: currentPlayerStat.gameId!,
      },
    });
    return currentGame;
  });
}
