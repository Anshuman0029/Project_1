const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  room: String,
  status: String,
  
}, { collection : 'light_data' }));