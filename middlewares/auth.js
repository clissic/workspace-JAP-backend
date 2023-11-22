const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";

const checkJWTAuth = (req, res, next) => {
    try {
      const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
      console.log(decoded);
      next();
    } catch (err) {
      res.status(401).json({ message: "Usuario no autorizado" });
    }
  }
  
  module.exports = {
      checkJWTAuth
  }