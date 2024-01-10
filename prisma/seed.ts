import { PrismaClient } from '@prisma/client';
import { getPlayerStats } from '../src/functions/getPlayerStats';
import { PlayerProfileWithStats } from '../index';

const prisma = new PrismaClient();

async function main() {
  return await prisma.$transaction(
    async (tx) => {
      const allPlayers = await tx.playerProfile.findMany({
        include: {
          Stats: {
            include: {
              player: true,
              Game: true,
            },
          },
          MOTM: true,
        },
      });
      const allPlayersConverted = allPlayers as unknown as PlayerProfileWithStats[];
      const stats = allPlayersConverted.map((player) => {
        const stats = getPlayerStats(player);
        return { id: player.id, name: player.name, slug: player.slug, ...stats };
      });

      await tx.oldSeason.createMany({
        data: stats.map((player) => {
          return {
            playerId: player.id,
            defeats: player.defeats,
            victories: player.victories,
            draws: player.draws,
            year: 2023,
            goals: player.goals,
            goalsConceded: player.goalsConceded,
          };
        }),
      });

      console.log('Criado com sucesso');
    },
    {
      timeout: 120000,
      maxWait: 120000,
    }
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
