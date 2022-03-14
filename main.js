const express = require("express");
const app = express();
const morgan = require("morgan"); //morgan
app.use(express.json());
app.use(morgan("tiny")); //morgan
app.listen(3000, () => console.log("Servidor levantado en 3000"));
app.get("/", (req, res) => res.send("Hello World!"));
//conectarse a la base de datos a traves de mongoose
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Peliculas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("El mongoose chuta"))
  .catch((error) => console.log("Ha habido un error", error));

const pelRouter = require("./peliculas/pelRutas.js");
const usRouter = require("./usuarios/usRutas.js");

app.use("/usuarios", usRouter);
app.use("/peliculas", pelRouter);
