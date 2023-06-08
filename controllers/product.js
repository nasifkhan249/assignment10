const PRODUCT = require("../models/product");
require("dotenv").config();
const jwt = require("jsonwebtoken");
// Task 2: Express.js Route
exports.Creatproduct = async (req,res)=>{
    try {
        
        const {name,price} = req.body;
        if(!name.trim()){
            return res.json({err:"Name must be required"});
        }
        if(!price){
            return res.json({err:"Price must be required"});
        }

        const product = await new PRODUCT({
            name:name,
            price:price
        }).save();

        res.json({
            product:{
                name:product.name,
                price:product.price
            }
        });
    } catch (err) {
        console.log(err);
    }
}

exports.Product = async (req,res)=>{
    try {
        const user = await PRODUCT.find({});
        res.json(user)
    } catch (err) {
        console.log(err);
    }
};



//Task 3: JSON Web Tokens (JWT)
exports.OneProduct=async(req,res)=>{
    try {
        const {id} = req.params;

        const userProduct = await PRODUCT.findById(id);
        const token = jwt.sign({_id:userProduct.id},process.env.SECRET_KEY,{
            expiresIn:"7d",
        })
        res.json({
            userProduct,
            token
        });
    } catch (err) {
        console.log(err);
    }
};









