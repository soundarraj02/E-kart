const jwt = require('jwt-simple')

exports.requiresAuth = async (req,res,next) =>{
    try{
        const idToken = req.header("Authorization");
        if(!idToken) {
            return res.status(400).json({status:'error', message:'token not found'})
        } 
        const bearer = idToken.split(' ');
        const token = bearer[1];
        let decoded = jwt.decode(token,'soundar@02');
        req.user=decoded;
        next();
    } catch(e) {
        res.send({status:false, message:e.message})
    }
}
