import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import './connection.js'
const imageData = new Schema({
    
    img_size:{
        type: String,
        required: true
    },
    img_color:{
        type: String,
        required: true
    },
    img_quantity: {
        type: Number,
    },
    p_image: {
        type: String,  // Assuming p_id is the reference to _id in Prodect_collection
        required: true
    }
}
    );

const model = mongoose.model('Image_data', imageData);

export default model