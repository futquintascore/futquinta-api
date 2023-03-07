import { ListOnePlayerProfileUseCase } from './list-one-player-profile-usecase';
import { Request, Response } from 'express';
import { PlayersProfile } from '../../services/prismaClient';
export class ListOnePlayerProfileController {
  constructor(private ListOnePlayer: ListOnePlayerProfileUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      if (id.length > 1) {
        const player = await PlayersProfile.findUniqueOrThrow({
          where: {
            slug: id,
          },
        });
        return res.json(player);
      }
      const listOneUser = await this.ListOnePlayer.execute(+id);

      res.status(200).json(listOneUser);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
