import { IGamesRepository } from './../../repositories/IGamesRepository';

export class UploadGamePictureUseCase {
  constructor(private GamesRepository: IGamesRepository) {}

  async execute(id: number, imageUrl: string) {
    return this.GamesRepository.setGamePicture(id, imageUrl);
  }
}
