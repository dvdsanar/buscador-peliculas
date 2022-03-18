//conectarse a la base de datos a traves de mongoose e importación
const mongoose = require("mongoose");

const conexion = async () => {
  await mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Moongose funciona correctamente"))
    .catch((error) => console.log("Ha habido un error", error));
};

module.exports = conexion;
