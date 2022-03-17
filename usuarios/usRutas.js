const express = require("express");
const router = express.Router();
const controller = require("./usControlador.js"); //Controlador de Usuarios
const verificacion = require("../middleware.js");

//Rutas de todos los verbos de nuestras funciones para los usuarios
router.get("/", verificacion(), controller.traerUsuarios);
router.get("/:id", verificacion(), controller.traerUsuariosID);
router.post("/", verificacion("admin"), controller.nuevoUsuario);
router.patch("/:id", verificacion("admin"), controller.modificarParteUsuario);
router.delete("/:id", verificacion("admin"), controller.borrarUsuario);

router.post("/auth", controller.generarFicha);

module.exports = router;
