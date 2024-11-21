const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  photoUrl: { type: String, required: true },
  location: { type: { lat: Number, long: Number }, required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  assignedNgo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);
