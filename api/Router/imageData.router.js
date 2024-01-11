import * as imageDataRouter from '../controller/imageData.controler.js'
import express from 'express'
const router=express.Router()
router.post('/add-image-data',imageDataRouter.add);
router.get('/get-image-data',imageDataRouter.get);
router.put('/update-image-data',imageDataRouter.update);
router.delete('/delete-image-data',imageDataRouter.deleteImageData);

router.get('/get',imageDataRouter.getGroupsById);

 export default router