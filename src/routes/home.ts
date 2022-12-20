import { Router } from 'express';

const route = Router();

import type { Request, Response } from 'express';

route.get('/', async (req: Request, res: Response) => {
  res.status(200).json('FutQuinta API');
});
export default route;
