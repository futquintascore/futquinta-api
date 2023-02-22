import { Request, Response } from 'express';
import { IncrementGoalsUseCase } from './increment-goals-usecase';
export class IncrementGoalsController {
  constructor(private IncrementGoals: IncrementGoalsUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { currentTeam } = req.body;
    try {
      const data = await this.IncrementGoals.execute(+id, currentTeam);
      res.status(200).json(data);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
