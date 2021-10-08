const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  user: { type: String, required: true },
  password: { type: Number, required: true }
});
const usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;