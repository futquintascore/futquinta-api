import { Request, Response } from 'express';
import { DecrementPlayerInGameGoalsUseCase } from './decrement-player-in-game-goals-use-case';

export class DecrementPlayerInGameGoalController {
  constructor(private DecrementPlayerInGameGoals: DecrementPlayerInGameGoalsUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedPlayer = await this.DecrementPlayerInGameGoals.execute(+id);

      res.status(200).json(`Goals of ${updatedPlayer.name} decremented with success`);
    } catch (err: any) {
      res.status(200).json({ message: err.message });
    }
  }
}
