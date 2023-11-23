const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cartController.js");

cartRouter.post("/addToCart/:cid/:pid", cartController.addToCart);

cartRouter.delete("/removeFromCart/:cid/:pid", cartController.removeFromCart);

cartRouter.put("/updateCartItemQuantity/:cid/:pid/:cantidad", cartController.updateCartItemQuantity);

module.exports = cartRouter;