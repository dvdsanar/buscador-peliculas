const Usuarios = require("./usModelo.js");
const jwt = require("jsonwebtoken");

//Función para mostrar los usuarios por su nombre, email o todos los usuarios
module.exports.traerUsuarios = async (req, res) => {
  try {
    if (req.query.nombre || req.query.email) {
      const listaFiltrada = await Usuarios.find({
        $or: [{ nombre: req.query.nombre }, { email: req.query.email }],
      });
      res.json(listaFiltrada);
    } else {
      const lista = await Usuarios.find({});
      res.json(lista);
    }
  } catch (error) {
    res.json(error);
  }
};

//Función para mostrar los usuarios por su id único
module.exports.traerUsuariosID = async (req, res) => {
  try {
    res.json(await Usuarios.find({ _id: req.params.id }));
  } catch (error) {
    res.json(error);
  }
};

//Función para crear un nuevo usuario
module.exports.nuevoUsuario = async (req, res) => {
  try {
    const usuarioCreado = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
      rol: "cliente",
    };
    const usuario = new Usuarios(usuarioCreado);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.json(error);
  }
};

//Función para modificar una o varias de las claves del usuario
module.exports.modificarParteUsuario = async (req, res) => {
  try {
    await Usuarios.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Usuario modificado");
  } catch (error) {
    res.json(error);
  }
};

//Función para borrar un usuario concreto a traves de su id
module.exports.borrarUsuario = async (req, res) => {
  try {
    await Usuarios.deleteOne({ _id: req.params.id });
    res.json("Usuario eliminado");
  } catch (error) {
    res.json(error);
  }
};

//Función para generar un token de usuario con su rol
module.exports.generarFicha = async (req, res) => {
  try {
    const buscarUsuario = await Usuarios.findOne({
      email: req.headers.email,
      password: req.headers.password,
    });
    if (buscarUsuario) {
      const ficha = jwt.sign({ rol: buscarUsuario.rol }, process.env.JWT_KEY);
      res.json(ficha);
    } else {
      res.status(401).send("No tienes un usuario para poder pasar");
    }
  } catch (error) {
    res.json(error);
  }
};
