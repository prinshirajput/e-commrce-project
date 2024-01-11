import * as adminROuter from '../controller/img.controler.js'
import express from 'express'
const router=express.Router()
router.post('/add',adminROuter.add);
router.get('/get',adminROuter.get);
router.get('/getimage',adminROuter.getGroupsById)
 export default router