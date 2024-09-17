import { Router } from 'express';

import {
    Consing,
    CreateCount,
    DeleteCount,
    ListCount,
    ListOne,
    WithdrawMoney
} from '../controllers/CountControllers.js';

const router =Router ();


router.post('/count/', CreateCount);
router.get('/count/', ListCount);
router.get('/count/:NumberCount', ListOne);
router.put('/count/:NumberCount', WithdrawMoney);
router.put('/count/consing/:NumberCount', Consing );
router.delete('/count/:NumberCount', DeleteCount)

export default router;