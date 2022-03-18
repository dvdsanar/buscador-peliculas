const mongoose = require("mongoose");

//Modelo para generar los usuarios de nuestra API, claves y tipo de valor que han de llevar
const Schema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  rol: String,
});
const Model = mongoose.model("Usuarios", Schema);
module.exports = Model;
