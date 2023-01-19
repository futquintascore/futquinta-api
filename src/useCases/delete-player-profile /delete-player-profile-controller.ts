import { DeletePlayerProfileUseCase } from './delete-player-profile-usecase';
import { Request, Response } from 'express';
export class DeletePlayerProfileController {
  constructor(private DeletePlayerProfile: DeletePlayerProfileUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { name } = await this.DeletePlayerProfile.execute(+id);

      res.status(200).json(`O usuario ${name} foi deletado com sucesso`);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
