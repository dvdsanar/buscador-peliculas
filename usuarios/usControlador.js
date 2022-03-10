const Usuarios = require("./usModelo.js");

module.exports.traerUsuarios = async (req, res) => {
  if (req.query.nombre) {
    console.log("Entra por nombre");
    const listaFiltrada = await Usuarios.find({ nombre: req.query.nombre });
    res.json(listaFiltrada);
  } else if (req.query.email) {
    console.log("Entra por email");
    const listaFiltrada = await Usuarios.find({ email: req.query.email });
    res.json(listaFiltrada);
  } else {
    console.log("Entra por NADA");
    const lista = await Usuarios.find({});
    res.json(lista);
  }
};
module.exports.nuevoUsuario = async (req, res) => {
  const usuario = new Usuarios(req.body);
  await usuario.save();
  res.json(usuario);
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
