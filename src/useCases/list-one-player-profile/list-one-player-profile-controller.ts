import { ListOnePlayerProfileUseCase } from './list-one-player-profile-usecase';
import { Request, Response } from 'express';
export class ListOnePlayerProfileController {
  constructor(private ListOnePlayer: ListOnePlayerProfileUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const listOneUser = await this.ListOnePlayer.execute(+id);

      res.status(200).json(listOneUser);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
