const jwt = require("jsonwebtoken");

function isLogin(req, res, next) {
    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "No authorization key provided"
        });
    }

    let token = req.headers.authorization;

    if (!token) {
        return res.json({
            success: false,
            message: "Please login"
        });
    }

   const decode=jwt.verify(token, "okk");
   if(!decode){
    return res.json({
        success:false,
        message:"Invalid token"
    })
   }
        // req.userId = decode.id;
        req.user = decode.user;
        next();
    
}

module.exports = { isLogin };
