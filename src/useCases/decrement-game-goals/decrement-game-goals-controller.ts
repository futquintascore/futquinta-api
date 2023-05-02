import { Request, Response } from 'express';

import { DecrementGoalsUseCase } from './decrement-game-goals-use-case';

export class DecrementGoalsController {
  constructor(private DecrementGoalsUseCase: DecrementGoalsUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { team } = req.body;
    console.log(team);
    try {
      await this.DecrementGoalsUseCase.execute(+id, team);

      res.status(200).json({ message: `Goals quantity updated with success` });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
