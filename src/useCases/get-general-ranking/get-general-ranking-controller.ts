import { Request, Response } from 'express';
import { GetGeneralRankingUseCase } from './get-general-ranking-use-case';

export class GetGerenalRankingController {
  constructor(private GetGeneralRankingUseCase: GetGeneralRankingUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const generalRank = await this.GetGeneralRankingUseCase.execute();
      res.status(200).json(generalRank);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
