import { Router } from 'express';
import { create, update, show, deleteUser, index } from '../controllers/player';

const router = Router();

//Real All
router.get('/', index);

//Show one player
router.get('/:id', show);
//Create
router.post('/', create);

//update
router.put('/:id', update);

//delete
router.delete('/:id', deleteUser);

export default router;
