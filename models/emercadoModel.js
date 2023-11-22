const fs = require("fs");

/* const getCategories = async () => {
  try {
    const categoriesJSON = "./memory/cats/cat.json";
    const categories = await fs.readFile(categoriesJSON);
    return categories;
  } catch (error) {
    console.log("Se rompio en getCategories (model): " + error);
    return false;
  }
}; */

const getCategories = async () => {
  try {
    const categoriesJSON = "./models/memory/cats/cat.json";
    const data = await fs.promises.readFile(categoriesJSON);
    const categories = JSON.parse(data);
    return categories;
  } catch (error) {
    console.error("Error reading categories:", error);
    return false;
  }
};

const getCategoryById = async (id) => {
  try {
    const categoryJSON = `./models/memory/cats_products/${id}`;
    const data = await fs.promises.readFile(categoryJSON);
    const category = JSON.parse(data);
    return category;
  } catch (error) {
    console.log("Se rompio en getCategoryById (model): " + error);
    return false;
  }
};

const getProductById = async (id) => {
  try {
    const productsJSON = `./models/memory/products/${id}`;
    const data = await fs.promises.readFile(productsJSON);
    const product = JSON.parse(data);
    return product;
  } catch (error) {
    console.log("Se rompio en getProductById (model): " + error);
    return false;
  }
};

const getCommentsById = async (id) => {
  try {
    const commentsJSON = `./models/memory/products_comments/${id}`;
    const data = await fs.promises.readFile(commentsJSON);
    const comments = JSON.parse(data);
    return comments;
  } catch (error) {
    console.log("Se rompio en getCommentsById (model): " + error);
    return false;
  }
};

const getCartById = async (id) => {
  try {
    const cartsJSON = `./models/memory/user_cart/${id}`;
    const data = await fs.promises.readFile(cartsJSON);
    const cart = JSON.parse(data);
    return cart;
  } catch (error) {
    console.log("Se rompio en getCartById (model): " + error);
    return false;
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  getProductById,
  getCommentsById,
  getCartById,
};
