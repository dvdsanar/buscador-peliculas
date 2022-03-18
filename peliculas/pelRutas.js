const express = require("express");
const router = express.Router();
const controller = require("./pelControlador.js"); //Controlador de peliculas importado
const verificacion = require("../configuracion/middleware.js"); //Middleware para la verificacion

//Rutas de todos los verbos de nuestras funciones para las peliculas
router.get("/", verificacion(), controller.traerPeliculas); //Cualquier rol puede acceder al no tener ningún parametro el middleware
router.get("/:id", verificacion(), controller.traerPeliculasFiltros);
router.post("/", verificacion("admin"), controller.nuevaPelicula); //Solo puede acceder el rol admin
router.patch("/:id", verificacion("admin"), controller.modificarPelicula);
router.delete("/:id", verificacion("admin"), controller.borrarPelicula);

module.exports = router;
