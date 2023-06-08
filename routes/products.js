const express = require("express");
const route = express.Router();

//middlewares
const {authenticateUser}=require("../middlewares/product");

//controller
const {Creatproduct,Product,OneProduct}=require("../controllers/product");
route.post("/Creatproduct",Creatproduct);
route.get("/Product",authenticateUser,Product);
route.get("/OneProduct/:id",OneProduct);


module.exports=route