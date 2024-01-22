import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import '../Model/connection.js'
const User = new Schema({
   
    like:{
        type: Boolean,
        
    },
    image:{
        type:String
    },
    u_id:{
type:Number
    }
}
    );

const model = mongoose.model('like_collection', User);

export default model