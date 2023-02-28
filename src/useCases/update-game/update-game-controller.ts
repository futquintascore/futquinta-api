import { Request, Response } from 'express';
import { UpdateGameUseCase } from './update-game-usecase';
export class UpdateGameController {
  constructor(private UpdateGame: UpdateGameUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const game = await this.UpdateGame.execute(+id, req.body);

      return res.status(201).json(game);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
