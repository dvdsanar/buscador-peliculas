const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  titulo: String,
  anio: Number,
  genero: String,
  actores: String,
  duracion: Number,
});
const Model = mongoose.model("Peliculas", Schema);
module.exports = Model;
