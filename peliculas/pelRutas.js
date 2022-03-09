const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

router.get("/peliculas", controller.traerPeliculas);

router.post("/peliculas", controller.nuevaPelicula);

router.delete("/peliculas", controller.borrar);

module.exports = router;
