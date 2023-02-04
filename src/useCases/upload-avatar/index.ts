import { UploadAvatarController } from './upload-avatar-controller';
import { UploadAvatarUseCase } from './upload-avatar-usecase';
import { PostgresPlayerProfileRepository } from '../../repositories/PostgresPlayerProfileRepository';

const postgresPlayersProfileRepository = new PostgresPlayerProfileRepository();

const uploadAvatarUseCase = new UploadAvatarUseCase(postgresPlayersProfileRepository);

const uploadAvatarController = new UploadAvatarController(uploadAvatarUseCase);

export { uploadAvatarUseCase, uploadAvatarController };
