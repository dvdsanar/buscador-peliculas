const Usuarios = require("./usModelo.js");

//Función para mostrar los usuarios por su nombre, email o todos los usuarios
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

//Función para mostrar los usuarios por su id único
module.exports.traerUsuariosID = async (req, res) => {
  console.log("Usuarios por id");
  res.json(await Usuarios.find({ _id: req.params.id }));
};

//Función para crear un nuevo usuario
module.exports.nuevoUsuario = async (req, res) => {
  const usuario = new Usuarios(req.body);
  await usuario.save();
  res.json(usuario);
};

//Función para modificar alguna de las claves del usuario
module.exports.modificarParteUsuario = async (req, res) => {
  await Usuarios.updateOne({ _id: req.params.id }, req.body);
  res.status(200).send("Usuario modificado");
};

//Función para borrar un usuario concreto a traves de su id
module.exports.borrarUsuario = async (req, res) => {
  console.log("Borrando un usuario");
  res.json(await Usuarios.deleteOne({ _id: req.params.id }));
};
