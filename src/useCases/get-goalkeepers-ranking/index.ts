import { PrismaRankingRepository } from '../../repositories/prisma/PrismaRankingRepostory';
import { GetGoalkeepersRankingUseCase } from './get-goalkeepers-ranking-use-case';
import { GetGoalkeepersRankingController } from './get-goalkeepers-ranking-controller copy';

const prismaRankingRepository = new PrismaRankingRepository();

const getGeneralRankingUseCase = new GetGoalkeepersRankingUseCase(
  prismaRankingRepository
);

const getGoalkeepersRankingController = new GetGoalkeepersRankingController(
  getGeneralRankingUseCase
);

export { getGeneralRankingUseCase, getGoalkeepersRankingController };
