import { Request, Response } from 'express';
import { CreatePlayerStatsUseCase } from './create-player-stats-usecase';

export class CreatePlayerStatsController {
  constructor(private CreatePlayerStats: CreatePlayerStatsUseCase) {}

  async handle(req: Request, res: Response) {
    const { gameId } = req.params;
    const { players } = req.body;
    try {
      const playerStats = await this.CreatePlayerStats.execute(+gameId, players);

      res.status(200).json(playerStats);
    } catch (err) {
      console.log(err);
      res.status(400).json('erro debbug');
    }
  }
}
