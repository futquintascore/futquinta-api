import { PlayerProfile } from './../../entities/PlayerProfile';
import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
import { ICreatePlayerProfileDTO } from './create-player-profile-dto';
export class CreatePlayerProfile {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute({
    name,
    assists,
    defeats,
    victories,
    draws,
    goals,
    shirtNumber,
    slug,
    role,
  }: ICreatePlayerProfileDTO) {
    const playerProfile = new PlayerProfile({
      name,
      assists,
      defeats,
      victories,
      draws,
      goals,
      shirtNumber,
      slug,
      role,
    });

    return await this.PlayerProfileRepository.save(playerProfile);
  }
}
