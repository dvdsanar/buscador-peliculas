const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  titulo: String,
  ano: Number,
});
const Model = mongoose.model("Peliculas", Schema);
module.exports = Model;
