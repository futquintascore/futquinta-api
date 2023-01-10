import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
export class ListAllPlayersProfile {
  constructor(private PlayerProfileRepository: IPlayerProfileRepository) {}

  async execute() {
    return await this.PlayerProfileRepository.list();
  }
}
