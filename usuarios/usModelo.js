const mongoose = require("mongoose");
const Schema = new mongoose.Schema({});
const Model = mongoose.model("Usuarios", Schema);
module.exports = Model;

const usuarios = [
  {
    id: 1,
    nombre: "Sara",
    email: "s.sanque@email.es",
    contraseña: "SarareShulona",
  },
  {
    id: 2,
    nombre: "Hugo",
    email: "h.arilop@email.es",
    contraseña: "Hugo007.",
  },
  {
    id: 3,
    nombre: "Laura",
    email: "l.garper@email.es",
    contraseña: "LauLau14",
  },
];

module.exports = usuarios;
