import mongoose from "mongoose";

const menuCardSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    items:[{
        name:{
            type: String,
            required: true
        },
        quantity:{
            type: Number
        },
        price:{
            type: Number
        }
    }]
});


export default mongoose.model('MenuCard', menuCardSchema);