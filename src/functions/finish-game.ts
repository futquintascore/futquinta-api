/* eslint-disable indent */
import { GameModel, prisma } from '../services/prismaClient';

export async function finishGameFunction(gameId: number) {
  return await prisma.$transaction(async ({ game, playerProfile }) => {
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

    const updatedGame = await game.update({
      where: {
        id: currentGame.id,
      },
      data: {
        winnerTeam:
          currentGame.whiteGoals > currentGame.greenGoals
            ? 'WHITE'
            : currentGame.greenGoals === currentGame.whiteGoals
            ? 'DRAW'
            : 'GREEN',
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
          id: player.id,
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
  });
}
