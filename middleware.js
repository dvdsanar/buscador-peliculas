const Usuario = require("./usuarios/usModelo.js");
const jwt = require("jsonwebtoken");

const verificacion = (req, res, next) => {
  try {
    jwt.verify(req.headers.token, "geekshubs");
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = verificacion;
