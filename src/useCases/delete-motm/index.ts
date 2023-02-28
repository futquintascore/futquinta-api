import { PrismaMOTMRepository } from '../../repositories/prisma/PrismaMOTMRepository';
import { DeleteMOTMController } from './delete-motm-controller';
import { DeleteMOTMUseCase } from './delete-motm-usecase';

const prismaMOTMRepository = new PrismaMOTMRepository();

const deleteMOTMUseCase = new DeleteMOTMUseCase(prismaMOTMRepository);

const deleteMOTMController = new DeleteMOTMController(deleteMOTMUseCase);

export { deleteMOTMController, deleteMOTMUseCase };
