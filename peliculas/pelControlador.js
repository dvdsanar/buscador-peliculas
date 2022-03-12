const Peliculas = require("./pelModelo.js");

module.exports.traerPeliculas = async (req, res) => {
  if (req.query.titulo) {
    console.log("Entra por titulo");
    const listaFiltrada = await Peliculas.find({ titulo: req.query.titulo });
    res.json(listaFiltrada);
  } else if (req.query.genero) {
    console.log("Entra por genero");
    const listaFiltrada = await Peliculas.find({ genero: req.query.genero });
    res.json(listaFiltrada);
  } else if (req.query.actores) {
    console.log("Entra por actores");
    const listaFiltrada = await Peliculas.find({ actores: req.query.actores });
    res.json(listaFiltrada);
  } else {
    console.log("Entra por NADA");
    const lista = await Peliculas.find({});
    res.json(lista);
  }
};

module.exports.traerPeliculasFiltros = async (req, res) => {
  console.log("Entro por id");
  res.json(await Peliculas.find({ _id: req.params.id }));
};

module.exports.nuevaPelicula = async (req, res) => {
  const pelicula = new Peliculas(req.body);
  await pelicula.save();
  res.json(pelicula);
};

module.exports.borrarPelicula = async (req, res) => {
  console.log("Borrando una película");
  res.json(await Peliculas.deleteOne({ _id: req.params.id }));
};
