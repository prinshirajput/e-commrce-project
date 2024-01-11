// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
// import '../Model/connection.js'
// const User = new Schema({
   
//     card_image:{
//         type: String,
//         required: true
//     },
//     u_id:{
//         type: String,
//         required: true
//     }
  
// }
//     );

// const model = mongoose.model('Card_collection', User);

// export default model
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import '../Model/connection.js';

const User = new Schema({
    card_image: {
        type: String,
        required: true,
    },
    u_id: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('Card_collection', User);

export default model;
