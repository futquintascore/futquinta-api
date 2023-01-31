/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Response, NextFunction } from 'express';
import { Request } from 'express-jwt';
import { User } from '../services/prismaClient';
import jwt from 'jsonwebtoken';
class AuthMiddleware {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'login required' });
    }
    const [, token] = authorization.split(' ');
    try {
      const dados: any = jwt.verify(token, process.env.TOKEN_SECRET!);

      const { email } = dados;

      const user = User.findMany({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(400).json({
          message: 'invalid user',
        });
      }

      req.auth = { token, email };

      return next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({
        errors: ['token expirado ou invalido'],
      });
    }
  }
}

const authMiddleware = new AuthMiddleware();
export { authMiddleware };
