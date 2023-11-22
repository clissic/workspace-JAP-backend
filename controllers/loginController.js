const loginModel = require("../models/loginModel.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";

const signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await loginModel.signin(username, password);
    if (user) {
      const token = jwt.sign({ username }, SECRET_KEY);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ msg: "Username y/o password incorrectos" });
    }
  } catch (error) {
    console.log("Se rompió en signin (loginController): " + error);
    res.status(500).json({ msg: "Se rompió en signin (loginController)" });
  }
};

module.exports = {
  signin,
};