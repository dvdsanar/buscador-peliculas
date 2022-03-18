const mongoose = require("mongoose");

//Modelo para generar las peliculas, claves y tipo de valor que han de llevar
const Schema = new mongoose.Schema({
  titulo: String,
  anio: Number,
  genero: String,
  actores: String,
  duracion: Number,
});
const Model = mongoose.model("Peliculas", Schema);
module.exports = Model;
