//al trabajar en mongoose trabajamos el esquema y el modelo
const {Schema, model} = require('mongoose');

const articuloSchema = new Schema ({
    nombre: {type: String, require: true},
    descripcion: String,
    precio: Number,
    stock: Number,
    linkfoto: String

});

module.exports = model('Productos', articuloSchema);
