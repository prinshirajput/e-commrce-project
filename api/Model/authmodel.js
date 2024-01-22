import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import '../Model/connection.js';

const User = new Schema({
    email: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('mailer_collection', User);

export default model;
