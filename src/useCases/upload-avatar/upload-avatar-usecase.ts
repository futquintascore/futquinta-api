import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class UploadAvatarUseCase {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute(id: number, imageUrl: string, shitColor: 'GREEN' | 'WHITE') {
    return this.PlayerProfileRepository.setAvatar(id, imageUrl, shitColor);
  }
}
