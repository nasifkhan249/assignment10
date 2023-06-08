// Task 1: Mongoose Schema and Model
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
        },
        createdAt:{
            type:Date,
            default:Date.now
        }

    },
    {timestamps:true,versionKey:false}
);

const PRODUCT = mongoose.model("PRODUCT",productSchema);
module.exports = PRODUCT;