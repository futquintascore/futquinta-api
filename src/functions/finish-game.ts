/* eslint-disable indent */
import { GameModel, prisma } from '../services/prismaClient';
import { getWinnerTeam } from './set-winner-team';

export async function finishGameFunction(gameId: number) {
  return await prisma.$transaction(
    async ({ game, playerProfile }) => {
      const currentGame = await game.findUniqueOrThrow({
        where: {
          id: gameId,
        },
        include: {
          players: true,
        },
      });

      if (currentGame.status === 'FINISHED') throw new Error('Game already finished');
      if (currentGame.status === 'NOT_STARTED') throw new Error('Game not started yet');

      await game.update({
        where: {
          id: gameId,
        },
        data: {
          whiteGoals: currentGame.whiteGoals,
          greenGoals: currentGame.greenGoals,
        },
      });
      const updatedGame = await game.update({
        where: {
          id: currentGame.id,
        },
        data: {
          winnerTeam: getWinnerTeam(currentGame.whiteGoals, currentGame.greenGoals),
          status: 'FINISHED',
        },
        include: {
          players: true,
        },
      });

      const { players, winnerTeam } = updatedGame;

      for await (const player of players) {
        await playerProfile.update({
          where: {
            id: player.playerId,
          },
          data: {
            goals: { increment: player.goals },
            assists: { increment: player.assists },
            victories:
              winnerTeam === player.currentTeam ? { increment: 1 } : { increment: 0 },
            defeats:
              winnerTeam !== player.currentTeam && winnerTeam !== 'DRAW'
                ? { increment: 1 }
                : { increment: 0 },
            draws: winnerTeam === 'DRAW' ? { increment: 1 } : { increment: 0 },
            goalsConceded: player.goalsConceded,
          },
        });
      }
      const {
        winnerTeam: Winner,
        whiteGoals,
        greenGoals,
      } = await GameModel.findUniqueOrThrow({
        where: {
          id: gameId,
        },
      });

      return { Winner, whiteGoals, greenGoals };
    },
    {
      timeout: 45000,
    }
  );
}
