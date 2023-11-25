const fs = require("fs");
const emercadoModel = require("./emercadoModel");

const addToCart = async (cid, pid) => {
  try {
    const cartJSON = `./models/memory/user_cart/${cid}.json`;
    let cart;
    try {
      const cartData = fs.readFileSync(cartJSON, "utf8");
      cart = JSON.parse(cartData) || [];
    } catch (error) {
      console.error("Error al leer/analizar el archivo:" + error);
      cart = [];
    }
    if (!Array.isArray(cart)) {
      console.error("El carrito no es un array válido. Se corregirá.");
      cart = [];
    }
    const productInCartIndex = cart.findIndex((item) => item.id === pid);
    if (productInCartIndex !== -1) {
      cart[productInCartIndex].cantidad += 1;
    } else {
      const productFound = await emercadoModel.getProductById(pid);
      if (productFound) {
        cart.push({
          id: pid,
          cantidad: 1,
          producto: {
            id: pid,
            name: productFound.name,
            cost: productFound.cost,
            currency: productFound.currency,
            image: productFound.images[0],
          },
        });
      }
    }
    fs.writeFileSync(cartJSON, JSON.stringify(cart, null, 2));
    return cart;
  } catch (error) {
    console.error("Se rompió en addToCart (cartModel): " + error);
    throw error;
  }
};

const removeFromCart = async (cid, pid) => {
  try {
    const cartJSON = `./models/memory/user_cart/${cid}.json`;
    let cart;
    try {
      const cartData = fs.readFileSync(cartJSON, "utf8");
      cart = JSON.parse(cartData) || [];
    } catch (error) {
      console.error("Error al leer/analizar el archivo:", error);
      cart = [];
    }

    if (!Array.isArray(cart)) {
      console.error("El carrito no es un array válido. Se corregirá.");
      cart = [];
    }
    const productIndex = cart.findIndex((item) => item.id === pid);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      fs.writeFileSync(cartJSON, JSON.stringify(cart, null, 2));
      return cart;
    } else {
      console.log("El producto no está en el carrito.");
      return cart;
    }
  } catch (error) {
    console.error("Se rompió en removeFromCart (cartModel): " + error);
    throw error;
  }
};

const updateCartItemQuantity = async (cid, pid, cantidad) => {
  try {
    const cartJSON = `./models/memory/user_cart/${cid}.json`;
    let cart;
    try {
      const cartData = fs.readFileSync(cartJSON, "utf8");
      cart = JSON.parse(cartData) || [];
    } catch (error) {
      console.error("Error al leer/analizar el archivo:", error);
      cart = [];
    }
    if (!Array.isArray(cart)) {
      console.error("El carrito no es un array válido. Se corregirá.");
      cart = [];
    }
    const productIndex = cart.findIndex((item) => item.id === pid);
    if (productIndex !== -1) {
      cart[productIndex].cantidad = Number(cantidad);
      fs.writeFileSync(cartJSON, JSON.stringify(cart, null, 2));
      return cart;
    } else {
      console.log("El producto no está en el carrito.");
      return cart;
    }
  } catch (error) {
    console.error("Se rompió en updateCartItemQuantity (cartModel): " + error);
    throw error;
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
};
