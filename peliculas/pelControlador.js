const Peliculas = require("./pelModelo.js");

module.exports.traerPeliculas = async (req, res) => {
  if (!req.query) {
    const lista = await Peliculas.find({});
    res.json(lista);
  } else {
    const listaFiltrada = await Peliculas.find({ titulo: req.query.titulo });
    res.json(listaFiltrada);
  }
};

module.exports.nuevaPelicula = async (req, res) => {
  const pelicula = new Peliculas(req.body);
  await pelicula.save();
  res.json(pelicula);
};

module.exports.borrarPelicula = (req, res) => {
  const peliEncontrada = p2.findIndex(
    (pelicula) => pelicula.id === req.body.id
  );
  p2.splice(peliEncontrada, 1);
  res.json(req.body);
};
