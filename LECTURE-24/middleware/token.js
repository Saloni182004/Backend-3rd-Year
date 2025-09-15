const jwt = require("jsonwebtoken");

function isLogin(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.json({
        success: false,
        message: "No authorization header provided"
      });
    }

    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({
        success: false,
        message: "Please login"
      });
    }

    const decoded = jwt.verify(token, "blogs"); 
    req.userId = decoded.userId;
    next();

  } catch (err) {
    return res.json({
      success: false,
      message: "Invalid token",
      error: err.message
    });
  }
}

module.exports = { isLogin };
