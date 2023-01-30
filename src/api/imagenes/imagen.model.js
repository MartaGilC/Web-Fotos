const mongoose = require("mongoose");

const imagenSchema = new mongoose.Schema(
    {
        título: { type: String, trim: true},
        localización: {type: String, trim: true},
        descripción: {type: String, trim: true},
        imagen: {type: String, required: true, trim: true},
        imagen2: {type: String, trim: true},
        imagen3: {type: String, trim: true},
        imagen4: {type: String, trim: true},
        imagen5: {type: String, trim: true}
    },
    {
        timestamps: true, collection: "imagenes"
    }
);

const Imagen = mongoose.model("imagenes", imagenSchema);
module.exports = Imagen;