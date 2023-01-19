import { Request, Response } from 'express';
import { FindOneGameUseCase } from './find-one-game-usecase';
export class FindOneGameController {
  constructor(private FindOneGame: FindOneGameUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const oneGame = await this.FindOneGame.execute(+id);
      res.status(200).json(oneGame);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
