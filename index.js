const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./src/utils/db/db");
const rutaImagen = require("./src/api/imagenes/imagen.routes");


const server = express();
const PORT = process.env.PORT
connectDB();

server.use(cors({
    origin: "*",
    credentials: true}))

    server.use(express.json());
server.use(express.urlencoded({ extended: false }));



server.use("/imagenes", rutaImagen);

server.listen(PORT, () => {
    console.log(`Va todo genial. Funcionando en http://localhost:${PORT}`)
})