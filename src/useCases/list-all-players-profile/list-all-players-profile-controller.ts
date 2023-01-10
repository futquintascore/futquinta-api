import { Request, Response } from 'express';
import { ListAllPlayersProfile } from './list-all-players-profile-usecase';
export class CreatePlayerProfileController {
  constructor(private ListAllPlayersProfile: ListAllPlayersProfile) {}
  async handle(req: Request, res: Response) {
    try {
      const allPlayersProfile = await this.ListAllPlayersProfile.execute();

      res.status(201).json(allPlayersProfile);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
