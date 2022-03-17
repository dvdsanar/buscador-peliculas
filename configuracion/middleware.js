const Usuario = require("../usuarios/usModelo.js");
const jwt = require("jsonwebtoken");

const verificacion = (comprobacionRol = null) => {
  return (req, res, next) => {
    try {
      const token = jwt.verify(req.headers.token, process.env.JWT_KEY);
      console.log(token.rol);
      if (comprobacionRol == null || token.rol == comprobacionRol) {
        next();
      } else {
        res.status(403).send("Tus credenciales no te permiten acceder aqui");
      }
    } catch (error) {
      res.status(401).send(error);
    }
  };
};
module.exports = verificacion;
