const User = require("../Model/LoginModel");
const md5 = require("md5");
const jwt = require('jwt-simple')


exports.login = async(req,res) => {
    try{
        let foundUser = await User.findOne({email:req.body.email, password:md5(req.body.password)});
        if(foundUser) {
            let token = jwt.encode(foundUser,'soundar@02');
            res.send({status:true, message:"Successfully loggedIn", token:token});
        } else {
            res.send({status:false, message:"Email or password wrong"});
        }
    } catch(e) {
         res.send({status:false, message:"error occurred"});
    }
} 