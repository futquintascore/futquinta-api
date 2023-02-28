import { MOTM } from './../../entities/MOTM';
import { IMOTMRespository } from './../../repositories/IMOTMRepository';
export class CreateMOTMUseCase {
  constructor(private MOTMRepository: IMOTMRespository) {}

  async execute({ team, gameId, playerProfileId }: MOTM) {
    const newMOTM = new MOTM({ team, gameId, playerProfileId });

    return await this.MOTMRepository.save(newMOTM);
  }
}
