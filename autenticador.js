const Usuario = require("./usuarios/usModelo.js");

const autenticacion = async (email, password) => {
  const buscarUsuario = await Usuario.findOne({ email, password });
  if (buscarUsuario) {
    return true;
  }
  return false;
};

module.exports = autenticacion;

//esta función habría de usarse de middleware junto con el if de abajo

// para el controller hay que utilizar esta función dentro de un if
//con los parametros de autenticacion (email: req.headers.email, contraseña: req.headers.contraseña)
//si devuelve un true que haga la funcion que le digamos
//si devuelve un false que de un error 401
