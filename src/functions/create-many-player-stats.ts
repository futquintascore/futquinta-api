import { prisma } from '../services/prismaClient';
export async function createManyPlayerStatsOnGame() {
  return await prisma.$transaction(async (ctx) => {});
}
