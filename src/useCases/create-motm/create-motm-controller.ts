import { Request, Response } from 'express';
import { CreateMOTMUseCase } from './create-motm-usecase';

export class CreateMOTMController {
  constructor(private CreateMOTM: CreateMOTMUseCase) {}

  async handle(req: Request, res: Response) {
    const { team } = req.body;
    const { playerId, gameId } = req.params;
    try {
      const newMOTM = await this.CreateMOTM.execute({
        team,
        playerProfileId: +playerId,
        gameId: +gameId,
      });

      res.status(201).json(newMOTM);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
