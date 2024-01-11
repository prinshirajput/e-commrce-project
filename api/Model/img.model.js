import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import '../Model/connection.js'
const User = new Schema({
   
    img_name:{
        type: String,
        unique: true,
        required: true
    },
    img_price:{
        type: String,
        required: true
    },
    img_category: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}
    );

const model = mongoose.model('Prodect_collection', User);

export default model