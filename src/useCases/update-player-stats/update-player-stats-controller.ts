import { Request, Response } from 'express';
import { UpdatePlayerStatsUseCase } from './update-player-stats-usecase';

export class UpdatePlayerStatsController {
  constructor(private UpdatePlayerStats: UpdatePlayerStatsUseCase) {}

  async handle(req: Request, res: Response) {
    const { gameId, statId } = req.params;
    try {
      const updatedStat = await this.UpdatePlayerStats.execute(
        +gameId,
        +statId,
        req.body
      );
      res.status(200).json(updatedStat);
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  }
}
