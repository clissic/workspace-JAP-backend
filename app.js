const express = require("express");
const cors = require("cors");

// Aquí importamos los routers

const emercadoRouter = require("./routes/emercadoRoutes.js");
const loginRouter = require("./routes/loginRoutes.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routers

app.use("/emercado-api", emercadoRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
