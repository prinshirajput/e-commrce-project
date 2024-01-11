import * as ev_function from '../controller/users.controler.js'
import express from 'express'
const Router=express.Router()
import auth from '../Model/auth.js'
console.log("hello")
 Router.post('/save',ev_function.save)
Router.get('/feathbyemail/:email',auth, ev_function.get_name);
// Router.delete('/delete',ev_function.deleteuser)
// Router.put('/update', ev_function.updateuser)
// // Router.post('/save',()=>{
// //     console.log("work")
    
// // })
Router.put('/edit', ev_function.updateUser)

Router.post('/login', ev_function.login)
Router.get('/fetch/:id', ev_function.fetch);

 export default Router