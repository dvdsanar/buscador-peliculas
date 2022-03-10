const p2 = require("./pelModelo.js");

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

module.exports.borrarPelicula = (req, res) => {
  const peliEncontrada = p2.findIndex(
    (pelicula) => pelicula.id === req.body.id
  );
  p2.splice(peliEncontrada, 1);
  res.json(req.body);
};
