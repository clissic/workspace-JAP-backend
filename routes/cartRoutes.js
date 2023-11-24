const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cartController.js");
const authMiddleware = require("../middlewares/auth.js");

cartRouter.post("/addToCart/:cid/:pid", authMiddleware.checkJWTAuth, cartController.addToCart);

cartRouter.delete("/removeFromCart/:cid/:pid", authMiddleware.checkJWTAuth, cartController.removeFromCart);

cartRouter.put("/updateCartItemQuantity/:cid/:pid/:cantidad", authMiddleware.checkJWTAuth, cartController.updateCartItemQuantity);

module.exports = cartRouter;