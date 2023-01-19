import { FindAllGamesUseCase } from './find-all-games-usecase';
import type { Request, Response } from 'express';
export class FindAllGameController {
  constructor(private FindAllGames: FindAllGamesUseCase) {}
  async handle(req: Request, res: Response) {
    const { status } = req.query;

    try {
      const listGames = await this.FindAllGames.execute(status);

      res.status(200).json(listGames);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
