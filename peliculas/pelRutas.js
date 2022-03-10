const express = require("express");
const router = express.Router();
const controller = require("./pelControlador.js");

router.get("/peliculas", controller.traerPeliculas);

router.get("/peliculas/:id", controller.traerPeliculasFiltros);

router.post("/peliculas", controller.nuevaPelicula);

router.delete("/peliculas", controller.borrarPelicula);

module.exports = router;
