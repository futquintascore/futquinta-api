import { Request, Response } from 'express';
import { GetRecordRankingUseCase } from './get-record-ranking';
export class GetRecordRankingController {
  constructor(private GetRecordRanking: GetRecordRankingUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const recordRank = await this.GetRecordRanking.execute();
      res.status(200).json(recordRank);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
