import { Request, Response } from 'express';
import { IncrementPlayerInGameGoalsUseCase } from './increment-player-in-game-goals-use-case';

export class IncrementPlayerInGameGoalController {
  constructor(private IncrementPlayerInGameGoals: IncrementPlayerInGameGoalsUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedPlayer = await this.IncrementPlayerInGameGoals.execute(+id);

      res.status(200).json(`Goals of ${updatedPlayer.name} incremented with success`);
    } catch (err: any) {
      res.status(200).json({ message: err.message });
    }
  }
}
