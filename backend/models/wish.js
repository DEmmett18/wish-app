const mongoose = require('mongoose');

const wishSchema = mongoose.Schema({
  name: { type: String, required: true},
  url: String
});

module.exports = mongoose.model('Wish', wishSchema);
