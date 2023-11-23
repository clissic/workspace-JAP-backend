const loginModel = require("../models/loginModel.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";

const signin = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await loginModel.signin(mail, password);
    if (user) {
      const token = jwt.sign({ mail }, SECRET_KEY);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ msg: "Mail y/o password incorrectos" });
    }
  } catch (error) {
    console.log("Se rompió en signin (loginController): " + error);
    res.status(500).json({ msg: "Se rompió en signin (loginController)" });
  }
};

module.exports = {
  signin,
};