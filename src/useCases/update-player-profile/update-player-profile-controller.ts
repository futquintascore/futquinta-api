import { UpdatePlayerProfileUseCase } from './update-player-profile-usecase';
import { Request, Response } from 'express';
export class UpdatePlayerProfileController {
  constructor(private UpdatePlayerProfileUseCase: UpdatePlayerProfileUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedPlayer = await this.UpdatePlayerProfileUseCase.execute(+id, req.body);

      res.status(200).json(updatedPlayer);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
