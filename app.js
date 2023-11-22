const express = require("express");
const cors = require("cors");

// Aquí importamos los routers

const emercadoRouter = require("./routes/emercadoRoutes.js");

const app = express();
const port = 3000;

app.use(express.json());

// Routers

app.use("/emercado-api", emercadoRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.use(
  cors({
    origin: "*",
  })
);
