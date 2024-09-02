import { Router } from 'express';

import {
    CreateCount,
    ListCount,
    WithdrawMoney,
    Consing,
    DeleteCount
} from '../controllers/CountControllers.js';

const router =Router ();


router.post('/count/:id/create', CreateCount);
router.get('/count', ListCount);
router.put('/count', WithdrawMoney);
router.put('/count/:id/consing', Consing );
router.delete('/count/:id/delete', DeleteCount)

export default router;