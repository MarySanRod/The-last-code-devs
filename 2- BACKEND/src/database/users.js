const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false }
});
const usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;