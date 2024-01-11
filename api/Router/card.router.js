import * as cardcontroler from '../controller/addtocart.controler.js'
import express from 'express'
const router=express.Router()
router.post('/add-image-data',cardcontroler.save_card_img);
router.get('/get',cardcontroler.get);
router.delete('/delete',cardcontroler.deleteTest)
router.get('/get_card_data',cardcontroler.getnumberof_card)
 export default router