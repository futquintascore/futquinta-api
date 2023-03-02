import { Request, Response } from 'express';
import { DeleteMOTMUseCase } from './delete-motm-usecase';

export class DeleteMOTMController {
  constructor(private DeleteMOTM: DeleteMOTMUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedMOTM = await this.DeleteMOTM.execute(+id);

      res.status(200).json({
        message: `MOTM with id ${deletedMOTM.id} deleted with sucess `,
        data: { ...deletedMOTM },
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
