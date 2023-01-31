import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user-usecase';
import validator from 'validator';
export class CreateUserController {
  constructor(private CreateUser: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const isEmail = validator.isEmail(email);
      if (!isEmail) {
        throw new Error('invalid email');
      }

      const newUser = await this.CreateUser.execute({ email, password });

      res
        .status(201)
        .json(
          `User with email ${newUser.email} and id ${newUser.id}created with success`
        );
    } catch (err: any) {
      console.log(err.code);
      res.status(400).json({ message: err.message });
    }
  }
}
