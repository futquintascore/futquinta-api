import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { DeletePlayerProfileController } from './delete-player-profile-controller';
import { DeletePlayerProfileUseCase } from './delete-player-profile-usecase';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();
const deletePlayerProfileUseCase = new DeletePlayerProfileUseCase(
  postgresPlayerProfileRepository
);
const deletePlayerProfileController = new DeletePlayerProfileController(
  deletePlayerProfileUseCase
);
export { deletePlayerProfileController, deletePlayerProfileUseCase };
