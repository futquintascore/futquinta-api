import { Request, Response } from 'express';
import { DeleteGameUseCase } from './delete-game-usecase';
export class DeleteGameController {
  constructor(private DeleteGame: DeleteGameUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { id: gameId } = await this.DeleteGame.execute(+id);

      return res.status(200).json(`O jogo ${gameId} foi deletado com sucesso`);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
