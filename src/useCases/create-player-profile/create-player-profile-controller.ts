import { Request, Response } from 'express';
import { CreatePlayerProfile } from './create-player-profile-usecase';
export class CreatePlayerProfileController {
  constructor(private CreatePlayerProfileUseCase: CreatePlayerProfile) {}
  async handle(req: Request, res: Response) {
    const {
      name,
      picture = null,
      goals = 0,
      assists = 0,
      victories = 0,
      defeats = 0,
      draws = 0,
      MOTMScore = 0,
    } = req.body;
    try {
      const newPlayerProfile = await this.CreatePlayerProfileUseCase.execute({
        name,
        goals,
        assists,
        victories,
        defeats,
        draws,
        picture,
        MOTMScore,
      });

      res.status(201).json(newPlayerProfile);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
