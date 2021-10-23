const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  idProducto: { type: String, required: true },
  precio:{type: Number, required:true},
  descripcion: { type: String, required: true },
  // disponibilidad: {type: Boolean}
});
const productsModel = mongoose.model('products', productsSchema);
module.exports = productsModel;