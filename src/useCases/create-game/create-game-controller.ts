import { CreateGameUseCase } from './create-game-usecase';
import e, { Request, Response } from 'express';
export class CreateGameController {
  constructor(private CreateGameUseCase: CreateGameUseCase) {}
  async handle(req: Request, res: Response) {
    const { whiteGoals, greenGoals } = req.body;
    try {
      const newGame = await this.CreateGameUseCase.execute({
        greenGoals,
        whiteGoals,
      });

      res.status(201).json(newGame);
    } catch (err) {
      res.status(400).json(e);
    }
  }
}
