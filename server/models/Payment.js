const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  paymentIntentId: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);
