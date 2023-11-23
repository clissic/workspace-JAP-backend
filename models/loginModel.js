const fs = require("fs").promises;

const signin = async (mail, password) => {
  try {
    const usersJSON = "./models/memory/users/users.json";
    const data = await fs.readFile(usersJSON, "utf8");
    const users = JSON.parse(data);
    const userFound = users.find(
      (user) => user.mail === mail && user.password === password
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