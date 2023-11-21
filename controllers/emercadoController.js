const emercadoModel = require("../models/emercadoModel.js")

const getCategories = async (req, res) => {
    try {
        const categories = await emercadoModel.getCategories();
        if (categories) {
            res.status(200).json(categories);
        } else {
            res.status(404).json({msg: "No se encontraron categorias"});
        }
    } catch (error) {
        console.log("Se rompio en getCategories (controller): " + error)
        res.status(500).json({msg: "Se rompio en getCategories (controller)"});
    }
}

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await emercadoModel.getCategoryById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({msg: "No se encontro la categoria"});
        }
    } catch (error) {
        console.log("Se rompio en getCategoryById (controller): " + error)
        res.status(500).json({msg: "Se rompio en getCategoryById (controller)"});
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await emercadoModel.getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({msg: "No se encontro el producto"});
        }
    } catch (error) {
        console.log("Se rompio en getProductById (controller): " + error)
        res.status(500).json({msg: "Se rompio en getProductById (controller)"});
    }
}

const getCommentsById = async (req, res) => {
    const { id } = req.params;
    try {
        const comments = await emercadoModel.getCommentsById(id);
        if (comments) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({msg: "No se encontraron los comentarios"});
        }
    } catch (error) {
        console.log("Se rompio en getCommentsById (controller): " + error)
        res.status(500).json({msg: "Se rompio en getCommentsById (controller)"});
    }
}

const getCartById = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await emercadoModel.getCartById(id);
        if (cart) {
            res.status(200).json(cart);
        } else {
            res.status(404).json({msg: "No se encontro el carrito"})
        }
    } catch (error) {
        console.log("Se rompio en getCartById (controller): " + error)
        res.status(500).json({msg: "Se rompio en getCartById (controller)"});
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    getProductById,
    getCommentsById,
    getCartById
  };