import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ errorFormat: 'minimal' });

const GameModel = prisma.game;
const PlayersProfile = prisma.playerProfile;
const PlayersStats = prisma.playerStats;

export { GameModel, PlayersProfile, PlayersStats, prisma };
