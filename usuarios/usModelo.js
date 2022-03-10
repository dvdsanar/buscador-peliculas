const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  nombre: String,
  email: String,
  contraseña: String,
});
const Model = mongoose.model("Usuarios", Schema);
module.exports = Model;
