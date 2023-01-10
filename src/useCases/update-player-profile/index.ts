import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { UpdatePlayerProfileController } from './update-player-profile-controller';
import { UpdatePlayerProfileUseCase } from './update-player-profile-usecase';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();
const updatePlayerProfileUseCase = new UpdatePlayerProfileUseCase(
  postgresPlayerProfileRepository
);
const updatePlayerProfileController = new UpdatePlayerProfileController(
  updatePlayerProfileUseCase
);
export { updatePlayerProfileController, updatePlayerProfileUseCase };
