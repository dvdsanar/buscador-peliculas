const Peliculas = require("./pelModelo.js"); //Modelo de peliculas importado

// función para mostar las peliculas por titulo, genero, actores o todas las que tenemos en la BD
module.exports.traerPeliculas = async (req, res) => {
  try {
    if (req.query.titulo || req.query.genero || req.query.actores) {
      const listaFiltrada = await Peliculas.find({
        $or: [
          { titulo: req.query.titulo },
          { genero: req.query.genero },
          { actores: req.query.actores },
        ],
      });
      res.json(listaFiltrada);
    } else {
      const lista = await Peliculas.find({});
      res.json(lista);
    }
  } catch (error) {
    res.json(error);
  }
};

//Fucnión para mostrar las películas por su id único
module.exports.traerPeliculasFiltros = async (req, res) => {
  try {
    res.json(await Peliculas.find({ _id: req.params.id }));
  } catch (error) {
    res.json(error);
  }
};

//Función para crear una nueva película
module.exports.nuevaPelicula = async (req, res) => {
  try {
    const pelicula = new Peliculas(req.body);
    await pelicula.save();
    res.json(pelicula);
  } catch (error) {
    res.json(error);
  }
};

//Función para modificar una o varias de las claves de la película
module.exports.modificarPelicula = async (req, res) => {
  try {
    await Peliculas.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Pelicula modificada");
  } catch (error) {
    res.json(error);
  }
};

//Función para borrar una pelicula a traves de su id
module.exports.borrarPelicula = async (req, res) => {
  try {
    await Peliculas.deleteOne({ _id: req.params.id });
    res.json("Película eliminada");
  } catch (error) {
    res.json(error);
  }
};
