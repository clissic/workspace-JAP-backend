const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";

// Aquí importamos los routers

const emercadoRouter = require("./routes/emercadoRoutes.js");
const postController = require("./controllers/postController");
const postRouter = require("./routes/postRoute");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1>Welcome.</h1>");
});

app.use("/posts", (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized user" });
  }
});

app.use("/posts", postRouter);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, SECRET_KEY);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Wrong username/password" });
  }
});






// Routers

app.use("/emercado-api", emercadoRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
