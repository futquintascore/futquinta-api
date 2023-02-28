import { IMOTMRespository } from '../../repositories/IMOTMRepository';
export class DeleteMOTMUseCase {
  constructor(private MOTMRepository: IMOTMRespository) {}

  async execute(id: number) {
    return await this.MOTMRepository.delete(id);
  }
}
