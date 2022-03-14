const express = require("express");
const router = express.Router();
const controller = require("./pelControlador.js"); //Controlador de peliculas importado

//Rutas de todos los verbos de nuestras funciones para las peliculas
router.get("/", controller.traerPeliculas);

router.get("/:id", controller.traerPeliculasFiltros);

router.post("/", controller.nuevaPelicula);

router.patch("/:id", controller.modificarPelicula);

router.delete("/:id", controller.borrarPelicula);

module.exports = router;
