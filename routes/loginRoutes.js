const express = require("express");
const loginRouter = express.Router();

const loginController = require("../controllers/loginController.js");

loginRouter.post("/signin", loginController.signin);

module.exports = loginRouter;