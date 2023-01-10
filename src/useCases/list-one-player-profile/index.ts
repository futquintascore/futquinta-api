import { ListOnePlayerProfileUseCase } from './list-one-player-profile-usecase';
import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';
import { ListOnePlayerProfileController } from './list-one-player-profile-controller';

const postgresPlayerProfileRepository = new PostgresPlayerProfileRepository();

const listOnePlayerProfileUseCase = new ListOnePlayerProfileUseCase(
  postgresPlayerProfileRepository
);

const listOnePlayerProfileController = new ListOnePlayerProfileController(
  listOnePlayerProfileUseCase
);

export { listOnePlayerProfileController, listOnePlayerProfileUseCase };
