//all require
const { readdirSync } = require("fs");
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");

//application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: false}));

//server
const port = process.env.PORT || 8000;

//routers level middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routesroutes/${r}`)));

//Connect to DB and start server
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server Running on port ${port}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    })