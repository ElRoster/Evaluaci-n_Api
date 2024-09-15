import { Router } from 'express';

import {
    CreateCount,
    ListCount,
    WithdrawMoney,
    Consing,
    ListOne,
    DeleteCount
} from '../controllers/CountControllers.js';

const router =Router ();


router.post('/count/create', CreateCount);
router.get('/count/list', ListCount);
router.get('/count/ListOne/:NumberCount', ListOne);
router.put('/count/WithdrawMoney/:NumberCount', WithdrawMoney);
router.put('/count/Consing/:NumberCount', Consing );
router.delete('/count/Delete/:NumberCount', DeleteCount)

export default router;