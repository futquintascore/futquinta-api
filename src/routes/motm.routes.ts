import { Router } from 'express';
import { MOTMModel } from '../services/prismaClient';
import { createMOTMController } from '../useCases/create-motm';

const router = Router();
router.get('/', (req, res) => {
  res.json('motm route');
});
// ? Create
router.post('/:gameId/:playerId', async (req, res) => {
  return createMOTMController.handle(req, res);
});

// ? Update
router.put('/', (req, res) => {
  res.json('update mtom');
});

// ! Delete

router.delete('/', async (req, res) => {
  const data = await MOTMModel.delete({
    where: {
      id: 8,
    },
  });
  res.json(data);
});

export default router;
