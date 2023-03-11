/* eslint-disable indent */
import { prisma } from '../services/prismaClient';

export async function finishGameFunction(
  gameId: number,
  winnerTeam: 'GREEN' | 'WHITE' | 'DRAW'
) {
  return await prisma.$transaction(
    async ({ game, playerProfile }) => {
      const { whiteGoals, greenGoals, status } = await game.findUniqueOrThrow({
        where: {
          id: gameId,
        },
        include: {
          players: true,
        },
      });

      if (status === 'FINISHED') throw new Error('Game already finished');
      if (status === 'NOT_STARTED') throw new Error('Game not started yet');

      const updatedGame = await game.update({
        where: {
          id: gameId,
        },
        data: {
          winnerTeam,
          status: 'FINISHED',
        },
        include: {
          players: true,
        },
      });
      // for await (const player of players) {
      //   await playerProfile.update({
      //     where: {
      //       id: player.playerId,
      //     },
      //     data: {
      //       goals: { increment: player.goals },
      //       assists: { increment: player.assists },
      //       victories:
      //         winnerTeam === player.currentTeam ? { increment: 1 } : { increment: 0 },
      //       defeats:
      //         winnerTeam !== player.currentTeam && winnerTeam !== 'DRAW'
      //           ? { increment: 1 }
      //           : { increment: 0 },
      //       draws: winnerTeam === 'DRAW' ? { increment: 1 } : { increment: 0 },
      //     },
      //   });
      // }
      const { players } = updatedGame;
      const goalkeepers = players.filter((player) => player.function === 'GOALKEEPER');

      for await (const gk of goalkeepers) {
        if (gk.currentTeam === 'GREEN') {
          await playerProfile.update({
            where: {
              id: gk.playerId,
            },
            data: {
              goalsConceded: {
                increment: whiteGoals,
              },
            },
          });
        }
        if (gk.currentTeam === 'WHITE') {
          console.log(greenGoals);
          await playerProfile.update({
            where: {
              id: gk.playerId,
            },
            data: {
              goalsConceded: {
                increment: greenGoals,
              },
            },
          });
        }
      }
      return updatedGame;
    },
    {
      timeout: 45000,
    }
  );
}
