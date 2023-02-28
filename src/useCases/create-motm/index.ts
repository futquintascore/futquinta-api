import { PrismaMOTMRepository } from './../../repositories/prisma/PrismaMOTMRepository';
import { CreateMOTMController } from './create-motm-controller';
import { CreateMOTMUseCase } from './create-motm-usecase';

const prismaMOTMRepository = new PrismaMOTMRepository();

const createMOTMUseCase = new CreateMOTMUseCase(prismaMOTMRepository);

const createMOTMController = new CreateMOTMController(createMOTMUseCase);

export { createMOTMController, createMOTMUseCase };
