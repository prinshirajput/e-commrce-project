
import express from 'express'
import bodyParser from 'body-parser'
import UserRouter from './Router/users.ROuter.js'
import AdminRouter from './Router/admin.router.js'
import imageRouter from './Router/imageData.router.js'
import card  from './Router/card.router.js'
import Like from './Router/Like.ROuter.js'
import cors from 'cors'
const app=express()
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors())   
console.log("hello inner")          
app.use('/user',UserRouter)
app.use('/admin',AdminRouter)
app.use('/img_data',imageRouter)
app.use('/like',Like)

app.use('/card',card)

app.listen(6001)
console.log('server invoked at http://lochalhost:6001')