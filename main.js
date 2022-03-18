//Importación de módulos
const express = require("express");
const app = express();
const conexion = require("./configuracion/conexion.js");
const pelRouter = require("./peliculas/pelRutas.js");
const usRouter = require("./usuarios/usRutas.js");
const dotenvDavid = require("dotenv");

//Función para el uso de variables de entorno
dotenvDavid.config();

//conexion con la base de datos
conexion();

//Función para que nuestra applicación pueda recibir documentos en formato json
app.use(express.json());

//Levantar el servidor de la API
app.listen(process.env.PORT, () => console.log("Servidor levantado con éxito"));

//rutas de los verbos de las peliculas y los usuarios y uso cada vez que sean llamados
app.use("/usuarios", usRouter);
app.use("/peliculas", pelRouter);
