const express = require("express");
const Imagen = require("./imagen.model");
const router = express.Router();
const upload= require("../../middlewares/file");

router.get("/", async (req, res, next) => {
    try {
        const imagenes = await Imagen.find();
        return res.status(200).json(imagenes);
    } catch (error) {
        return next(error);
    }
});

router.get("/:id", async (req, res, next)=> {
    try {
        const id = req.params.id;
        const imagenID = await Imagen.findById(id);
        return res.status(200).json(imagenID)
    } catch (error) {
        return res.status(500).json(error)
    }
});

router.post("/create", async(req, res) => {
    try {
        const imagen = req.body;
        if(req.file){
            imagen.imagen = req.file.path 
        }
        if(req.file){
            imagen.imagen2 = req.file.path 
        }
        if(req.file){
            imagen.imagen3 = req.file.path 
        }
        if(req.file){
            imagen.imagen4 = req.file.path 
        }
        if(req.file){
            imagen.imagen5 = req.file.path 
        }
        const nuevaImagen = new Imagen(imagen);
        const creado = await nuevaImagen.save();
        return res.status(200).json(creado);
    } catch (error) {
        return "error al crear imágenes", error;
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Imagen.findByIdAndDelete(id);
        return res.status(200).json("Imagen eliminada")
    } catch (error) {
        return res.status(500).json("Error al eliminar imagen")
    }
});

router.put("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const imagen = req.body;
        const imagenModificada = new Imagen(imagen);
        imagenModificada._id = id;
        const imagenActualizada = await Imagen.findByIdAndUpdate(id, imagenModificada);
        return res.status(200).json({
            mensaje: "Se modificó la imagen",
            imagenNueva: imagenActualizada
        })
    } catch (error) {
        return res.status(500).json("No se pudo modificar :(")
    }
})

module.exports = router;