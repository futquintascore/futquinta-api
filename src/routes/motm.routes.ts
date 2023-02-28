import { Router } from 'express';

import { createMOTMController } from '../useCases/create-motm';
import { deleteMOTMController } from '../useCases/delete-motm';

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

router.delete('/:id', async (req, res) => {
  return deleteMOTMController.handle(req, res);
});

export default router;
