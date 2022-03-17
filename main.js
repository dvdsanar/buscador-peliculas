//Importación para usar express
const express = require("express");
const app = express();
const conexion = require("./conexion.js");
const pelRouter = require("./peliculas/pelRutas.js");
const usRouter = require("./usuarios/usRutas.js");

//conexion con la base de datos
conexion();
//Función para que nuestra applicación pueda recibir documentos en formato json
app.use(express.json());
//Levantar el servidor de la API
app.listen(3000, () => console.log("Servidor levantado en 3000"));
app.get("/", (req, res) => res.send("Hello World!"));

//rutas de los verbos de las peliculas y los usuarios y uso cada vez que sean llamados
app.use("/usuarios", usRouter);
app.use("/peliculas", pelRouter);
