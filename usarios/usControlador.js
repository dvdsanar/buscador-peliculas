const usuarios = require("./usModelo.js");

module.exports.traerUsuarios = (req, res) => res.json(usuarios);

module.exports.nuevoUsuario = (req, res) => {
  if (usuarios.find((usuario) => usuario.id === req.body.id)) {
    res.status(400);
    res.json({ error: "id duplicado" });
  } else {
    usuario.push({ id: req.body.id, nombre: req.body.nombre });
    res.json(req.body);
  }
};

module.exports.modificarUsuario = (req, res) => {
  let usuarioEncontrado = usuarios.find(
    (usuario) => usuario.id === req.body.id
  );
  usuarioEncontrado.nombre = req.body.nombre;
  res.json(req.body);
};

module.exports.modificarParteUsuario = (req, res) => {
  let usuarioEncontrado = usuarios.find(
    (usuario) => usuario.id === req.body.id
  );
  if (req.body.name) usuarioEncontrado.nombre = req.body.nombre;
  res.json(req.body);
};

module.exports.borrarUsuario = (req, res) => {
  const usuarioEncontrado = usuarios.findIndex(
    (usuario) => usuario.id === req.body.id
  );
  usuarios.splice(usuarioEncontrado, 1);
  res.json(req.body);
};
