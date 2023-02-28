import { Request, Response } from 'express';
import { FindUserByTokenUseCase } from './find-user-by-token-usecase';

export class FindUserByTokenController {
  constructor(private FindUserByToken: FindUserByTokenUseCase) {}
  async handle(req: Request, res: Response) {
    const { authorization } = req.headers;

    try {
      if (authorization) {
        const [, token] = authorization.split(' ');

        const me = await this.FindUserByToken.execute(token);

        return res.status(201).json(me);
      }
      return;
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
