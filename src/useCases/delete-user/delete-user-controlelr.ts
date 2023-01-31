import { Response, Request } from 'express';
import { DeleteUserUseCase } from './delete-user-usecase';
export class DeleteUserController {
  constructor(private DeleteUser: DeleteUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteUser = await this.DeleteUser.execute(+id);

      res.status(200).json(`User with id ${deleteUser.id} deleted with success`);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
