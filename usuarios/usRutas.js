const express = require("express");
const router = express.Router();
const controller = require("./usControlador.js");

router.get("/usuarios", controller.traerUsuarios);

router.post("/usuarios", controller.nuevoUsuario);

router.put("/usuarios", controller.modificarUsuario);
// las APIs no implementan put y patch, solo uno de ellos
router.patch("/usuarios", controller.modificarParteUsuario);

router.delete("/usuarios", controller.borrarUsuario);

module.exports = router;
