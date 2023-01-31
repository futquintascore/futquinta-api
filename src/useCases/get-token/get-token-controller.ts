import { Request, Response } from 'express';
import { GetTokenUseCase } from './get-token-usecase';
export class GetTokenController {
  constructor(private GetToken: GetTokenUseCase) {}

  async handle(req: Request, res: Response) {
    const { email = '', password = '' } = req.body;
    try {
      const userToken = await this.GetToken.execute({ email, password });

      res.status(200).json(userToken);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
