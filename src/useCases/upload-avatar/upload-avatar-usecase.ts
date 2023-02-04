import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class UploadAvatarUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number, imageUrl: string) {
    return this.PlayerProfileRepository.setAvatar(id, imageUrl);
  }
}
