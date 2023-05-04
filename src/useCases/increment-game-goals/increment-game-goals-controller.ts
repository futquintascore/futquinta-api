import { Request, Response } from 'express';
import { IncrementGoalsUseCase } from './increment-game-goals-use-case';

export class IncrementGoalsController {
  constructor(private IncrementGoalsUseCase: IncrementGoalsUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { team } = req.body;

    try {
      await this.IncrementGoalsUseCase.execute(+id, team);

      res.status(200).json({ message: `Goals quantity updated with success` });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
