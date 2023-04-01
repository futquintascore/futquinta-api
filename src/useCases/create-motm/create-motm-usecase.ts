import { MOTM } from './../../entities/MOTM';
import { IMOTMRespository } from './../../repositories/IMOTMRepository';
export class CreateMOTMUseCase {
  constructor(private MOTMRepository: IMOTMRespository) {}

  async execute({ team, gameId, playerProfileId }: MOTM) {
    const alreadyHasTwo = await this.MOTMRepository.alreadyHasTwo(gameId);

    if (alreadyHasTwo) {
      throw new Error('MOTM already seted');
    }
    const newMOTM = new MOTM({ team, gameId, playerProfileId });

    return await this.MOTMRepository.save(newMOTM);
  }
}
