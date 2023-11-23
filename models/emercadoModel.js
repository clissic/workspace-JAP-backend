const fs = require("fs");

const getCategories = async () => {
  try {
    const categoriesJSON = "./models/memory/cats/cat.json";
    const data = await fs.promises.readFile(categoriesJSON);
    const categories = JSON.parse(data);
    return categories;
  } catch (error) {
    console.error("Se rompio en getCategories (emercadoModel):" + error);
    throw error;
  }
};

const getCategoryById = async (id) => {
  try {
    const categoryJSON = `./models/memory/cats_products/${id}.json`;
    const data = await fs.promises.readFile(categoryJSON);
    const category = JSON.parse(data);
    return category;
  } catch (error) {
    console.error("Se rompio en getCategoryById (emercadoModel): " + error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const productsJSON = `./models/memory/products/${id}.json`;
    const data = await fs.promises.readFile(productsJSON);
    const product = JSON.parse(data);
    return product;
  } catch (error) {
    console.error("Se rompio en getProductById (emercadoModel): " + error);
    throw error;
  }
};

const getCommentsById = async (id) => {
  try {
    const commentsJSON = `./models/memory/products_comments/${id}.json`;
    const data = await fs.promises.readFile(commentsJSON);
    const comments = JSON.parse(data);
    return comments;
  } catch (error) {
    console.error("Se rompio en getCommentsById (emercadoModel): " + error);
    throw error;
  }
};

const getCartById = async (id) => {
  try {
    const cartsJSON = `./models/memory/user_cart/${id}.json`;
    const data = await fs.promises.readFile(cartsJSON);
    const cart = JSON.parse(data);
    return cart;
  } catch (error) {
    console.error("Se rompio en getCartById (emercadoModel): " + error);
    throw error;
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  getProductById,
  getCommentsById,
  getCartById,
};
