const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', true)
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        const db = await mongoose.connect(DB_URL, {
            UseNewUrlParser: true,
            useUnifiedTopology: true
        });
        const { name, host }= db.connection;
        console.log(`Conectado correctamente a la base de datos ${name} en ${host}`)

    } catch (error) {
        console.log("Error de conexión con la bas de datos", error)
    }
}

module.exports = {
    connectDB,
    DB_URL
}