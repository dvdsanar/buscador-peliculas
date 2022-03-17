const Peliculas = require("./pelModelo.js"); //Modelo de peliculas importado

// función para mostar las peliculas por titulo, genero, actores o todas las que tenemos en la BD
module.exports.traerPeliculas = async (req, res) => {
  if (req.query.titulo || req.query.genero || req.query.actores) {
    console.log("Entra por titulo");
    const listaFiltrada = await Peliculas.find({
      $or: [
        { titulo: req.query.titulo },
        { genero: req.query.genero },
        { actores: req.query.actores },
      ],
    });
    res.json(listaFiltrada);
    // } else if (req.query.genero) {
    //   console.log("Entra por genero");
    //   const listaFiltrada = await Peliculas.find({ genero: req.query.genero });
    //   res.json(listaFiltrada);
    // } else if (req.query.actores) {
    //   console.log("Entra por actores");
    //   const listaFiltrada = await Peliculas.find({ actores: req.query.actores });
    //   res.json(listaFiltrada);
  } else {
    console.log("Entra por NADA");
    const lista = await Peliculas.find({});
    res.json(lista);
  }
};

//Fucnión para mostrar las películas por su id único
module.exports.traerPeliculasFiltros = async (req, res) => {
  console.log("Entro por id");
  res.json(await Peliculas.find({ _id: req.params.id }));
};

//Función para crear una nueva película
module.exports.nuevaPelicula = async (req, res) => {
  const pelicula = new Peliculas(req.body);
  await pelicula.save();
  res.json(pelicula);
};

//Función para modificar alguna de las claves de la película
module.exports.modificarPelicula = async (req, res) => {
  await Peliculas.updateOne({ _id: req.params.id }, req.body);
  res.status(200).send("Pelicula modificada");
};

//Función para borrar una pelicula a traves de su id
module.exports.borrarPelicula = async (req, res) => {
  console.log("Borrando una película");
  res.json(await Peliculas.deleteOne({ _id: req.params.id }));
};
