const cartModel = require("../models/cartModel.js");

const addToCart = async (req, res) => {
    const { cid } = req.params;
    const { pid } = req.params;
    try {
        const cart = await cartModel.addToCart(cid, pid);
        res.status(200).json(cart)
    } catch (error) {
        console.error("Se rompio en addToCart (cartController): " + error);
        res.status(500).json({msg: "Se rompio en addToCart (cartController)"});
    }
}

const removeFromCart = async (req, res) => {
    const { cid } = req.params;
    const { pid } = req.params;
    try {
        const cart = await cartModel.removeFromCart(cid, pid);
        res.status(200).json(cart);
    } catch (error) {
        console.error("Se rompio en removeFromCart (cartController): " + error);
        res.status(500).json({msg: "Se rompio en removeFromCart (cartController)"});
    }
}

const updateCartItemQuantity = async (req, res) => {
    const { cid } = req.params;
    const { pid } = req.params;
    const { cantidad } = req.params;
    try {
        const cart = await cartModel.updateCartItemQuantity(cid, pid, cantidad);
        res.status(200).json(cart);
    } catch (error) {
        console.error("Se rompio en ipdateItemInCart (cartController): " + error);
        res.status(500).json({msg: "Se rompio en ipdateItemInCart (cartController)"})
    }
}

module.exports = {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
};