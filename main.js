const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Servidor levantado en 3000"));
app.get("/", (req, res) => res.send("Hello World!"));
