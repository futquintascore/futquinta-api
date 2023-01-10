import { DeletePlayerProfileUseCase } from './delete-player-profile-usecase';
import { Request, Response } from 'express';
export class DeletePlayerProfileController {
  constructor(private DeletePlayerProfileUseCase: DeletePlayerProfileUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { name } = await this.DeletePlayerProfileUseCase.execute(+id);

      res.status(200).json(`O usuario ${name} foi deletado com sucesso`);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
