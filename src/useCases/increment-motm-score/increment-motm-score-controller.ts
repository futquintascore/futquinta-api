import { Request, Response } from 'express';
import { IncrementPlayerMOTMScoreUseCase } from './increment-motm-score-usecase';
export class IncrementMOTMScoreController {
  constructor(private IncrementMOTMScore: IncrementPlayerMOTMScoreUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedMOTM = await this.IncrementMOTMScore.execute(+id);

      res.status(200).json(updatedMOTM);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
