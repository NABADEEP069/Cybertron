const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  requestsHandled: { type: Number, default: 0 },
});

module.exports = mongoose.model('NGO', ngoSchema);
