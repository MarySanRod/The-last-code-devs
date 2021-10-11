const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  product: { type: String, required: true },
  price: { type: Number, required: true }
});
const productsModel = mongoose.model('products', productsSchema);
module.exports = productsModel;