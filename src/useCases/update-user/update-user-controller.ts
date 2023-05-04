import { Request, Response } from 'express';
import { UpdateUserUseCase } from './update-user-usercase';
export class UpdateUserController {
  constructor(private UpdateUser: UpdateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedUser = await this.UpdateUser.execute(+id, req.body);

      res.status(200).json(updatedUser);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
