import { ListAllPlayersProfile } from './list-all-players-profile-usecase';
import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { CreatePlayerProfileController } from './list-all-players-profile-controller';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();

const listAllPlayersProfileUseCase = new ListAllPlayersProfile(
  postgresPlayerProfileRepository
);

const listAllPlayersProfileController = new CreatePlayerProfileController(
  listAllPlayersProfileUseCase
);

export { listAllPlayersProfileUseCase, listAllPlayersProfileController };
