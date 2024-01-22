import * as ev_function from '../controller/users.controler.js'
import express from 'express'
import  * as mailer from '../config/mailer.js'

const Router=express.Router()
import auth from '../Model/auth.js'
console.log("hello")
 Router.post('/save',ev_function.save)
 Router.post('/mailer',mailer.sendEmail)
Router.get('/feathbyemail/:email',auth, ev_function.get_name);
// Router.delete('/delete',ev_function.deleteuser)
// Router.put('/update', ev_function.updateuser)
// // Router.post('/save',()=>{
// //     console.log("work")
    
// // })
Router.put('/edit', ev_function.updateUser)

Router.post('/login', ev_function.login)
Router.get('/fetch/:id', ev_function.fetch);
Router.get('/get_all', ev_function.get_all);


 export default Router