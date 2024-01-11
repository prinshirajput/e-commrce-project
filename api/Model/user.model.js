import mongoose from "mongoose";
import './connection.js'


const UserSchema=mongoose.Schema({
    _id:Number,
    name: {
        type: String,

    },
    
    email: { type: String, unique: true, required: true },
    password: {
        type: String,
        required: true
    },

    mobile: {
        type: Number,

    },
    gender:{

        type: String,
    },
    role:{

        type: String,
    },
  
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const UserSchemaModel=mongoose.model('user_collection',UserSchema)
export default UserSchemaModel