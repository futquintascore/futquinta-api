import { PrismaRankingRepository } from '../../repositories/prisma/PrismaRankingRepostory';
import { GetGeneralRankingUseCase } from './get-general-ranking-use-case';
import { GetGerenalRankingController } from './get-general-ranking-controller';

const prismaRankingRepository = new PrismaRankingRepository();

const getGeneralRankingUseCase = new GetGeneralRankingUseCase(prismaRankingRepository);

const getGerenalRankingController = new GetGerenalRankingController(
  getGeneralRankingUseCase
);

export { getGeneralRankingUseCase, getGerenalRankingController };
