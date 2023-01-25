import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { IncrementMOTMScoreController } from './increment-motm-score-controller';
import { IncrementPlayerMOTMScoreUseCase } from './increment-motm-score-usecase';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();

const incrementMOTMScoreUseCase = new IncrementPlayerMOTMScoreUseCase(
  postgresPlayerProfileRepository
);
const incrementMOTMScoreController = new IncrementMOTMScoreController(
  incrementMOTMScoreUseCase
);
export { incrementMOTMScoreController, incrementMOTMScoreUseCase };
