const express = require("express");
const emercadoRouter = express.Router();

const emercadoController = require("../controllers/emercadoController.js");
const authMiddleware = require("../middlewares/auth.js");

emercadoRouter.get("/cats", emercadoController.getCategories);

emercadoRouter.get("/cats_products/:id", emercadoController.getCategoryById);

emercadoRouter.get("/products/:id", emercadoController.getProductById);

emercadoRouter.get("/products_comments/:id", emercadoController.getCommentsById);

emercadoRouter.get("/user_cart/:id", authMiddleware.checkJWTAuth, emercadoController.getCartById);

module.exports = emercadoRouter;