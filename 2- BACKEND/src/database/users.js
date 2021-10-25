const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // admin: { type: Boolean, required: true, default: false },
  role: { type: String, required: true, default: 'Pendiente' },
  status: { type: String, required: true, default: 'Desactivado' }
});
const usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;