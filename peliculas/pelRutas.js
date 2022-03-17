const express = require("express");
const router = express.Router();
const controller = require("./pelControlador.js"); //Controlador de peliculas importado
const verificacion = require("../configuracion/middleware.js");

//Rutas de todos los verbos de nuestras funciones para las peliculas
router.get("/", verificacion(), controller.traerPeliculas);
router.get("/:id", verificacion(), controller.traerPeliculasFiltros);
router.post("/", verificacion("admin"), controller.nuevaPelicula);
router.patch("/:id", verificacion("admin"), controller.modificarPelicula);
router.delete("/:id", verificacion("admin"), controller.borrarPelicula);

module.exports = router;
