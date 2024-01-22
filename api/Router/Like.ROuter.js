import * as imageDataRouter from '../controller/like.controler.js'
import express from 'express'
const router=express.Router()
router.post('/add',imageDataRouter.add);
router.get('/get/:u_id',imageDataRouter.get);
router.put('/update',imageDataRouter.update)
export default router