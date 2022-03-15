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

//esta función habría de usarse de middleware junto con el if de abajo

// para el controller hay que utilizar esta función dentro de un if
//con los parametros de autenticacion (email: req.headers.email, contraseña: req.headers.contraseña)
//si devuelve un true que haga la funcion que le digamos
//si devuelve un false que de un error 401
