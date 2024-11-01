const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ['en', 'hi'], // English and Hindi
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Document', DocumentSchema);
