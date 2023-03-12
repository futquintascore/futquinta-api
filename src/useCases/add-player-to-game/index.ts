import { PrismaPlayerStatsRepository } from '../../repositories/prisma/PrismaPlayerStatsRepository';
import { AddPlayerToGameController } from './add-player-to-game-controller';
import { AddPlayerToGameUseCase } from './add-player-to-game-use-case';

const prismaPlayerStatsRepository = new PrismaPlayerStatsRepository();

const addPlayerToGameUseCase = new AddPlayerToGameUseCase(prismaPlayerStatsRepository);

const addPlayerToGameController = new AddPlayerToGameController(addPlayerToGameUseCase);

export { addPlayerToGameController, addPlayerToGameUseCase };
