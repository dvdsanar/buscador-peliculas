const Usuario = require("./usuarios/usModelo.js");
const jwt = require("jsonwebtoken");

const verificacion = (comprobacionRol) => {
  return (req, res, next) => {
    try {
      const token = jwt.verify(req.headers.token, "geekshubs");
      console.log(token);
      if (token.rol == comprobacionRol) {
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
