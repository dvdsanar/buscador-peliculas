//conectarse a la base de datos a traves de mongoose e importación
const mongoose = require("mongoose");

const conexion = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/Peliculas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("El mongoose chuta"))
    .catch((error) => console.log("Ha habido un error", error));
};

module.exports = conexion;
