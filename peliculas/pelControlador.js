const Peliculas = require("./pelModelo.js");

module.exports.traerPeliculas = async (req, res) => {
  console.log(req.query == {}, "== {}");
  console.log(req.query != {}, "!= {}");
  console.log(!req.query, "!req.query");

  if (req.query.titulo) {
    console.log("Arriba");
    const listaFiltrada = await Peliculas.find({ titulo: req.query.titulo });
    res.json(listaFiltrada);
  } else {
    console.log("Abajo");
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

module.exports.borrarPelicula = (req, res) => {
  const peliEncontrada = p2.findIndex(
    (pelicula) => pelicula.id === req.body.id
  );
  p2.splice(peliEncontrada, 1);
  res.json(req.body);
};
