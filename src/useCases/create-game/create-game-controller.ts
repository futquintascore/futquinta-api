import { CreateGameUseCase } from './create-game-usecase';
import { Request, Response } from 'express';
export class CreateGameController {
  constructor(private CreateGameUseCase: CreateGameUseCase) {}
  async handle(req: Request, res: Response) {
    const { whiteGoals, greenGoals, gameDate } = req.body;

    try {
      const newGame = await this.CreateGameUseCase.execute({
        greenGoals,
        whiteGoals,
        gameDate,
      });

      res.status(201).json(newGame);
    } catch (err) {
      res.status(400).json('caiu aqui');
    }
  }
}
