import { CreatePlayerProfile } from './create-player-profile-usecase';
import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { CreatePlayerProfileController } from './create-player-profile-controller';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();

const createPlayerProfileUseCase = new CreatePlayerProfile(
  postgresPlayerProfileRepository
);

const createPlayerProfileController = new CreatePlayerProfileController(
  createPlayerProfileUseCase
);

export { createPlayerProfileUseCase, createPlayerProfileController };
