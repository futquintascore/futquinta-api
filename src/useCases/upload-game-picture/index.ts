import { PostgresGameRepository } from '../../repositories/PostgresGameRepository';
import { UploadGamePictureUseCase } from './upload-avatar-usecase';
import { UploadGamePictureController } from './upload-game-picture-controller';

const repository = new PostgresGameRepository();

const uploadGamePicture = new UploadGamePictureUseCase(repository);

const uploadGamePictureController = new UploadGamePictureController(uploadGamePicture);

export { uploadGamePicture, uploadGamePictureController };
