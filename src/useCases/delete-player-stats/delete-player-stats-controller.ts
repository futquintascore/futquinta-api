import { Request, Response } from 'express';
import { DeletePlayerStatsUseCase } from './delete-player-stats-usecase';

export class DeletePlayerStatController {
  constructor(private DeletePlayerStats: DeletePlayerStatsUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { name, gameId } = await this.DeletePlayerStats.execute(+id);
      res.status(200).json(`Deletes stat of ${name} in game ${gameId}`);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
