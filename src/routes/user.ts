import { Router } from 'express';
import { createUserController } from '../useCases/create-user';
import { deleteUsetController } from '../useCases/delete-user';
import { getTokenController } from '../useCases/get-token';
import { updateUserController } from '../useCases/update-user';

const userRoute = Router();

userRoute.post('/', (req, res) => {
  return createUserController.handle(req, res);
});
userRoute.put('/:id', (req, res) => {
  return updateUserController.handle(req, res);
});
userRoute.delete('/:id', (req, res) => {
  return deleteUsetController.handle(req, res);
});
userRoute.post('/auth', (req, res) => {
  return getTokenController.handle(req, res);
});

export default userRoute;
