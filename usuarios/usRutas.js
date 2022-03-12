const express = require("express");
const router = express.Router();
const controller = require("./usControlador.js");

router.get("/", controller.traerUsuarios);

router.get("/:id", controller.traerUsuariosID);

router.post("/", controller.nuevoUsuario);

router.put("/", controller.modificarUsuario);
// las APIs no implementan put y patch, solo uno de ellos
router.patch("/:id", controller.modificarParteUsuario);

router.delete("/:id", controller.borrarUsuario);

module.exports = router;
