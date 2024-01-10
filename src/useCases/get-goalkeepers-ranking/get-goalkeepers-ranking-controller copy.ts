import { Request, Response } from 'express';
import { GetGoalkeepersRankingUseCase } from './get-goalkeepers-ranking-use-case';

export class GetGoalkeepersRankingController {
  constructor(private GetGoalkeepersRanking: GetGoalkeepersRankingUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const generalRank = await this.GetGoalkeepersRanking.execute();
      res.status(200).json(generalRank);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
