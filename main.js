//Importación para usar express
const express = require("express");
const app = express();
app.use(express.json());

//Levantar el servidor de la API
app.listen(3000, () => console.log("Servidor levantado en 3000"));
app.get("/", (req, res) => res.send("Hello World!"));

//conectarse a la base de datos a traves de mongoose e importación
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Peliculas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("El mongoose chuta"))
  .catch((error) => console.log("Ha habido un error", error));

//Autenticacion a través de middleware de autenticación
const autenticacion = require("./middleware.js");
//funcion de autenticacion app.use("/", autenticacion);

//rutas de los verbos de las peliculas y los usuarios y uso cada vez que sean llamados
const pelRouter = require("./peliculas/pelRutas.js");
const usRouter = require("./usuarios/usRutas.js");
app.use("/usuarios", usRouter);
app.use("/peliculas", pelRouter);

//generar un token de autenticacion
const token = require("jsonwebtoken");
//const Usuario = require("./usuarios/usModelo.js");

const generarFicha = async (req, res) => {
  const buscarUsuario = await Usuario.findOne({
    email: req.headers.email,
    password: req.headers.password,
  });
  if (buscarUsuario) {
    const ficha = token.sign(
      { email: req.headers.email, password: req.headers.password },
      "geekshubs"
    );
    res.json(ficha);
  } else {
    res.status(401).send("No puedes pasar");
  }
};

// const checkJwt = (ficha) => {
//   const verificacion = token.verify(ficha, "geekshubs");
//   console.log(verificacion);
//   return verificacion;
// };
// app.get("/auth", checkJwt(ficha));
