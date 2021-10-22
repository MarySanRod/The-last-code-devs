const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    idCliente: { type: String, required: true },
    nomCliente: { type: String, required: true },
    idVendedor: { type: String, required: true},
    nomVendedor: {type: String, required: true},
    fechaCompra: {type: Date, required: true},
    fechaPago: {type: Date, required: true},
    idProducto: {type: String, required: true},
    preProducto: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    idVenta: {type: String, required: true},
    descripcion: {type: String}
  });

  
const salesModel = mongoose.model('sales', salesSchema);
module.exports = salesModel;
