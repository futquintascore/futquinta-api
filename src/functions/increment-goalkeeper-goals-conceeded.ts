import { PlayerStats } from '@prisma/client';
import { prisma } from '../services/prismaClient';

export async function incrementGoalkeeperGoalsConceeded(
  gameId: number,
  players: PlayerStats[]
) {
  return await prisma.$transaction(async ({ game }) => {
    const goalkeepers = players.filter((player) => player.function === 'GOALKEEPER');
    const {whiteGoals,greenGoals} = await game.findUniqueOrThrow({
      where:{
        id:gameId
      }
    })
    const updatedGkGoals =  goalkeepers.map(async (gk: PlayerStats) => {
      if (gk.currentTeam === 'GREEN') {
      await
      }
    });
  });
}
