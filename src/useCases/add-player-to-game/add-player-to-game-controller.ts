import { Request, Response } from 'express';
import { AddPlayerToGameUseCase } from './add-player-to-game-use-case';
export class AddPlayerToGameController {
  constructor(private AddPlayerToGame: AddPlayerToGameUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, currentTeam, function: playerFunction } = req.body;

    const { gameId, playerId } = req.params;
    try {
      const player = await this.AddPlayerToGame.execute({
        name,
        gameId: +gameId,
        playerId: +playerId,
        currentTeam,
        function: playerFunction,
      });
      res.status(201).json(player);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
