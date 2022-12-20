import { PrismaClient } from '@prisma/client';

const { game, player } = new PrismaClient();

export { game, player };
