import { Request, Response } from 'express';
import { DeleteGameUseCase } from './delete-game-usecase';
export class DeleteGameController {
  constructor(private DeleteGame: DeleteGameUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { id: gameId } = await this.DeleteGame.execute(+id);

      return res.status(201).json(`O jogo ${gameId} foi deletado com sucesso`);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
