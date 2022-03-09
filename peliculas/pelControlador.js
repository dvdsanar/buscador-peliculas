const p2 = require("./peliculas.js");

module.exports.traerPeliculas = (req, res) => res.json(p2);

module.exports.nuevaPelicula = (req, res) => {
  if (p2.find((pelicula) => pelicula.id === req.body.id)) {
    res.status(400);
    res.json({ error: "id duplicado" });
  } else {
    p2.push({ id: req.body.id, name: req.body.name });
    res.json(req.body);
  }
};

module.exports.modificarTodo = (req, res) => {
  let peliEncontrada = p2.find((pelicula) => pelicula.id === req.body.id);
  peliEncontrada.name = req.body.name;
  res.json(req.body);
};

module.exports.modificarParte = (req, res) => {
  let peliEncontrada = p2.find((pelicula) => pelicula.id === req.body.id);
  if (req.body.name) peliEncontrada.name = req.body.name;
  res.json(req.body);
};

module.exports.borrar = (req, res) => {
  const peliEncontrada = p2.findIndex(
    (pelicula) => pelicula.id === req.body.id
  );
  p2.splice(peliEncontrada, 1);
  res.json(req.body);
};
