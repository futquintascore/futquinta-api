import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ errorFormat: 'minimal' });

const GameModel = prisma.game;
const PlayersProfile = prisma.playerProfile;
const PlayersStats = prisma.playerStats;
const User = prisma.user;
const MOTMModel = prisma.mOTM;

export { GameModel, PlayersProfile, PlayersStats, prisma, User, MOTMModel };
