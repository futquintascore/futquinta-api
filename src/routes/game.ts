import { Router } from 'express';
import { createGameController } from '../useCases/create-game';
const router = Router();

// Create

router.post('/', (req, res) => {
  return createGameController.handle(req, res);
});
export default router;
