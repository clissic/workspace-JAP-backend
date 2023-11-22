const fs = require("fs").promises;

const signin = async (username, password) => {
  try {
    const usersJSON = "./models/memory/users/users.json";
    const data = await fs.readFile(usersJSON, "utf8");
    const users = JSON.parse(data);
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );
    return userFound || false;
  } catch (error) {
    console.log("Se rompió en signin (loginModel): " + error);
    throw error;
  }
};

module.exports = {
  signin,
};