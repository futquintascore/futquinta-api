import { Request, Response } from 'express';
import { CreatePlayerProfile } from './create-player-profile-usecase';
export class CreatePlayerProfileController {
  constructor(private CreatePlayerProfileUseCase: CreatePlayerProfile) {}
  async handle(req: Request, res: Response) {
    const { name, goals, assists, victories, defeats, draws } = req.body;
    try {
      const newPlayerProfile = await this.CreatePlayerProfileUseCase.execute({
        name,
        goals,
        assists,
        victories,
        defeats,
        draws,
      });

      res.status(201).json(newPlayerProfile);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
