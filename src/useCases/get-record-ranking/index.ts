import { PrismaRankingRepository } from '../../repositories/prisma/PrismaRankingRepostory';
import { GetRecordRankingUseCase } from './get-record-ranking';
import { GetRecordRankingController } from './get-record-ranking-controller';
const repository = new PrismaRankingRepository();

const service = new GetRecordRankingUseCase(repository);

const getRecordRankingController = new GetRecordRankingController(service);

export { getRecordRankingController, service };
