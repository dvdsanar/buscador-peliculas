//Importación para usar express
const express = require("express");
const app = express();
const conexion = require("./configuracion/conexion.js");
const pelRouter = require("./peliculas/pelRutas.js");
const usRouter = require("./usuarios/usRutas.js");
const dotenvDavid = require("dotenv");

dotenvDavid.config();
//conexion con la base de datos
conexion();
//Función para que nuestra applicación pueda recibir documentos en formato json
app.use(express.json());
//Levantar el servidor de la API
app.listen(process.env.SERVER_PORT, () =>
  console.log("Servidor levantado con éxito")
);

//rutas de los verbos de las peliculas y los usuarios y uso cada vez que sean llamados
app.use("/usuarios", usRouter);
app.use("/peliculas", pelRouter);
