const express = require("express");
const router = express.Router();
const controller = require("./usControlador.js");
const verificacion = require("../middleware.js");

//Rutas de todos los verbos de nuestras funciones para los usuarios
router.get("/", verificacion("cliente"), controller.traerUsuarios);
router.get("/:id", controller.traerUsuariosID);
router.post("/", controller.nuevoUsuario);
router.patch("/:id", controller.modificarParteUsuario);
router.delete("/:id", controller.borrarUsuario);

router.post("/auth", controller.generarFicha);

module.exports = router;
