const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.authenticateUser = async (req,res,next)=>{
    try {

        const authuKey = req.headers.authorization;
        if(!authuKey){
            return res.status(401).json({err:"Unauthorized"});
        }
        const decoded = jwt.verify(
            authuKey,
            process.env.SECRET_KEY,
        );
       const users = req.user = decoded;
       console.log(users);
        next();
    } catch (err) {
        console.log(err);
    }
};

