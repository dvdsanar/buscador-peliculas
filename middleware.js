const Usuario = require("./usuarios/usModelo.js");

const autenticacion = async (req, res, next) => {
  const buscarUsuario = await Usuario.findOne({
    email: req.headers.email,
    password: req.headers.password,
  }); // null
  if (!buscarUsuario) {
    res.status(401).send("Acceso denegado");
  } else {
    next();
  }
};
module.exports = autenticacion;
